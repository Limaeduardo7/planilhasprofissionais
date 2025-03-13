import { NextApiRequest, NextApiResponse } from 'next';
import { resend, getProductDeliveryEmailTemplate } from '../../lib/resend';

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Apenas permitir requisições POST
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Método não permitido' });
  }

  try {
    // Extrair dados do corpo da requisição
    const { email, name, productName } = req.body;

    // Validar dados
    if (!email || !name || !productName) {
      return res.status(400).json({ 
        error: 'Dados incompletos',
        message: 'Email, nome e nome do produto são obrigatórios' 
      });
    }

    // Link de teste para o produto
    const productLink = 'https://planilhasprofissionais.com/teste-produto';

    // Gerar o HTML do e-mail usando o template
    const emailHtml = getProductDeliveryEmailTemplate(name, productName, productLink);

    // Enviar e-mail de teste
    const { data, error } = await resend.emails.send({
      from: 'Planilhas Profissionais <entrega@planilhasprofissionais.com>',
      to: email,
      subject: `[TESTE] Seu produto ${productName} está pronto!`,
      html: emailHtml,
    });

    if (error) {
      console.error('Erro ao enviar e-mail de teste:', error);
      return res.status(500).json({ error: 'Erro ao enviar e-mail' });
    }

    // Responder com sucesso
    return res.status(200).json({ 
      message: 'E-mail de teste enviado com sucesso',
      emailId: data?.id 
    });
  } catch (error) {
    console.error('Erro ao processar requisição:', error);
    return res.status(500).json({ error: 'Erro interno do servidor' });
  }
} 