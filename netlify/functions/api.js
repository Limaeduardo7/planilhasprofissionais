const { Resend } = require('resend');

// Inicializar o cliente Resend com a chave API
const resend = new Resend(process.env.RESEND_API_KEY || 're_iRKH28RL_Mih9VuSaY7vdBV9FXkVhUSN3');

// Links dos produtos
const PRODUCT_LINKS = {
  // ID do produto na Kiwify: Link do Google Drive
  // Fluxo de Caixa
  'fluxo-de-caixa-4-0': 'https://drive.google.com/drive/folders/1gMx3OvPmZR-tYurJwjjqINY5Yd8JFQHd',
  'fluxo-de-caixa': 'https://drive.google.com/drive/folders/1gMx3OvPmZR-tYurJwjjqINY5Yd8JFQHd',
  'fluxo-caixa': 'https://drive.google.com/drive/folders/1gMx3OvPmZR-tYurJwjjqINY5Yd8JFQHd',
  
  // Controle de Estoque
  'controle-estoque': 'https://drive.google.com/drive/folders/1gMx3OvPmZR-tYurJwjjqINY5Yd8JFQHd',
  'estoque': 'https://drive.google.com/drive/folders/1gMx3OvPmZR-tYurJwjjqINY5Yd8JFQHd',
  
  // Controle Financeiro
  'controle-financeiro': 'https://drive.google.com/drive/folders/1gMx3OvPmZR-tYurJwjjqINY5Yd8JFQHd',
  'financeiro': 'https://drive.google.com/drive/folders/1gMx3OvPmZR-tYurJwjjqINY5Yd8JFQHd',
  
  // Adicione mais produtos aqui conforme necessário
};

// Função para identificar o produto com base no ID ou nome
function identifyProduct(productId, productName) {
  // Normalizar o ID e nome do produto (remover espaços, converter para minúsculas)
  const normalizedId = productId.toLowerCase().trim();
  const normalizedName = productName.toLowerCase().trim();
  
  // Verificar se o ID do produto está diretamente mapeado
  if (PRODUCT_LINKS[normalizedId]) {
    return {
      link: PRODUCT_LINKS[normalizedId],
      name: productName
    };
  }
  
  // Verificar correspondências parciais no ID
  for (const [key, link] of Object.entries(PRODUCT_LINKS)) {
    if (normalizedId.includes(key)) {
      return {
        link: link,
        name: productName
      };
    }
  }
  
  // Verificar correspondências no nome do produto
  const keywords = {
    'fluxo': 'fluxo-de-caixa-4-0',
    'caixa': 'fluxo-de-caixa-4-0',
    'estoque': 'controle-estoque',
    'financeiro': 'controle-financeiro',
    'financeira': 'controle-financeiro'
  };
  
  for (const [keyword, productKey] of Object.entries(keywords)) {
    if (normalizedName.includes(keyword) && PRODUCT_LINKS[productKey]) {
      return {
        link: PRODUCT_LINKS[productKey],
        name: productName
      };
    }
  }
  
  // Retornar link padrão se nenhuma correspondência for encontrada
  return {
    link: 'https://drive.google.com/drive/folders/1gMx3OvPmZR-tYurJwjjqINY5Yd8JFQHd',
    name: productName
  };
}

exports.handler = async (event, context) => {
  // Verificar se é uma solicitação de webhook da Kiwify
  if (event.path.includes('/api/webhook/kiwify')) {
    try {
      // Analisar o corpo da solicitação
      const payload = JSON.parse(event.body);
      
      // Registrar o payload para depuração
      console.log('Payload recebido da Kiwify:', JSON.stringify(payload));
      
      // Verificar se é uma notificação de pedido aprovado
      if (payload.event === 'order.approved') {
        // Extrair informações do cliente e do produto
        const { customer, product } = payload.data;
        
        // Identificar o produto e obter o link correspondente
        const productInfo = identifyProduct(product.id, product.name);
        
        // Enviar e-mail de confirmação com o link do produto
        const { data, error } = await resend.emails.send({
          from: 'Planilhas Profissionais <onboarding@resend.dev>',
          to: customer.email,
          subject: `Acesso ao seu produto: ${productInfo.name}`,
          html: `
            <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
              <h2 style="color: #4CAF50;">Obrigado pela sua compra!</h2>
              <p>Olá ${customer.name},</p>
              <p>Estamos muito felizes em tê-lo como cliente. Seu pagamento foi aprovado com sucesso!</p>
              <p>Você adquiriu: <strong>${productInfo.name}</strong></p>
              <p>Para acessar seu produto, clique no botão abaixo:</p>
              <div style="text-align: center; margin: 30px 0;">
                <a href="${productInfo.link}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px; font-weight: bold;">ACESSAR MEU PRODUTO</a>
              </div>
              <p>Se você tiver alguma dúvida ou precisar de suporte, responda a este e-mail ou entre em contato pelo WhatsApp.</p>
              <p>Atenciosamente,<br>Equipe Planilhas Profissionais</p>
            </div>
          `,
        });
        
        if (error) {
          console.error('Erro ao enviar e-mail:', error);
          return {
            statusCode: 500,
            body: JSON.stringify({ error: 'Erro ao enviar e-mail' }),
          };
        }
        
        console.log('E-mail enviado com sucesso:', data);
      }
      
      // Responder com sucesso
      return {
        statusCode: 200,
        body: JSON.stringify({ message: 'Webhook processado com sucesso' }),
      };
    } catch (error) {
      console.error('Erro ao processar webhook:', error);
      return {
        statusCode: 400,
        body: JSON.stringify({ error: 'Erro ao processar webhook' }),
      };
    }
  }
  
  // Para outras rotas de API
  return {
    statusCode: 404,
    body: JSON.stringify({ error: 'Rota não encontrada' }),
  };
}; 