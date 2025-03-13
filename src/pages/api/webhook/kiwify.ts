import { NextApiRequest, NextApiResponse } from 'next';
import { resend, getProductDeliveryEmailTemplate } from '../../../lib/resend';
import crypto from 'crypto';

// Tipos para os dados do webhook da Kiwify
interface KiwifyWebhookData {
  event: string;
  data: {
    customer: {
      email: string;
      name: string;
    };
    product: {
      name: string;
      id: string;
    };
    order: {
      id: string;
    };
    // Outros campos que podem ser úteis
  };
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Verificar se a requisição é um POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  try {
    // Verificar a assinatura do webhook para garantir que é da Kiwify
    const signature = req.headers['x-kiwify-signature'] as string;
    if (!verifyKiwifySignature(req.body, signature)) {
      console.error('Assinatura do webhook inválida');
      return res.status(401).json({ error: 'Assinatura inválida' });
    }

    // Extrair os dados do webhook
    const webhookData = req.body as KiwifyWebhookData;

    // Verificar se é um evento de compra aprovada
    if (webhookData.event !== 'order.approved') {
      return res.status(200).json({ message: 'Evento ignorado' });
    }

    // Extrair informações do cliente e do produto
    const { email, name } = webhookData.data.customer;
    const productName = webhookData.data.product.name;
    const orderId = webhookData.data.order.id;
    const productId = webhookData.data.product.id;

    // Determinar qual produto enviar com base no ID do produto
    const productLink = getProductLinkById(productId);

    // Gerar o HTML do e-mail usando o template
    const emailHtml = getProductDeliveryEmailTemplate(name, productName, productLink);

    // Enviar e-mail com o produto
    const { data, error } = await resend.emails.send({
      from: 'Planilhas Profissionais <entrega@planilhasprofissionais.com>',
      to: email,
      subject: `Seu produto ${productName} está pronto!`,
      html: emailHtml,
    });

    if (error) {
      console.error('Erro ao enviar e-mail:', error);
      return res.status(500).json({ error: 'Erro ao enviar e-mail' });
    }

    // Registrar a entrega (opcional - você pode implementar um log em banco de dados)
    console.log(`Produto ${productName} entregue para ${email}, pedido: ${orderId}`);

    // Responder com sucesso
    return res.status(200).json({ 
      message: 'Produto entregue com sucesso',
      emailId: data?.id 
    });
  } catch (error) {
    console.error('Erro ao processar webhook:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
}

// Função para verificar a assinatura do webhook da Kiwify
function verifyKiwifySignature(payload: any, signature: string): boolean {
  if (!signature || !process.env.KIWIFY_WEBHOOK_SECRET) {
    return false;
  }

  try {
    // Criar um HMAC usando o segredo do webhook
    const hmac = crypto.createHmac('sha256', process.env.KIWIFY_WEBHOOK_SECRET);
    
    // Atualizar o HMAC com o payload como string
    hmac.update(JSON.stringify(payload));
    
    // Obter o digest em formato hexadecimal
    const calculatedSignature = hmac.digest('hex');
    
    // Comparar a assinatura calculada com a recebida
    return crypto.timingSafeEqual(
      Buffer.from(calculatedSignature),
      Buffer.from(signature)
    );
  } catch (error) {
    console.error('Erro ao verificar assinatura:', error);
    return false;
  }
}

// Função para obter o link do produto com base no ID
function getProductLinkById(productId: string): string {
  // Usar variáveis de ambiente para os links dos produtos
  const productLinks: Record<string, string | undefined> = {
    'produto-fluxo-de-caixa-4-0': process.env.PRODUCT_FLUXO_DE_CAIXA_URL,
    // Adicione outros produtos conforme necessário
  };

  return productLinks[productId] || 'https://planilhasprofissionais.com/contato';
} 