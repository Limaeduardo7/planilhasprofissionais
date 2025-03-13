const { Resend } = require('resend');

// Inicializar o cliente Resend com a chave API
const resend = new Resend(process.env.RESEND_API_KEY);

exports.handler = async (event, context) => {
  // Verificar se é uma solicitação de webhook da Kiwify
  if (event.path.includes('/api/webhook/kiwify')) {
    try {
      // Analisar o corpo da solicitação
      const payload = JSON.parse(event.body);
      
      // Verificar se é uma notificação de pedido aprovado
      if (payload.event === 'order.approved') {
        // Extrair informações do cliente e do produto
        const { customer, product } = payload;
        
        // Determinar qual produto foi comprado e obter o link correspondente
        let productLink = '';
        let productName = product.name;
        
        // Lógica para determinar qual link de produto enviar
        if (product.id === process.env.KIWIFY_PRODUCT_ID_FLUXO_CAIXA) {
          productLink = process.env.PRODUCT_LINK_FLUXO_CAIXA;
        } else if (product.id === process.env.KIWIFY_PRODUCT_ID_CONTROLE_ESTOQUE) {
          productLink = process.env.PRODUCT_LINK_CONTROLE_ESTOQUE;
        } else if (product.id === process.env.KIWIFY_PRODUCT_ID_CONTROLE_FINANCEIRO) {
          productLink = process.env.PRODUCT_LINK_CONTROLE_FINANCEIRO;
        }
        
        // Enviar e-mail de confirmação com o link do produto
        if (productLink) {
          const { data, error } = await resend.emails.send({
            from: 'Planilhas Profissionais <contato@planilhasprofissionais.com>',
            to: customer.email,
            subject: `Acesso ao seu produto: ${productName}`,
            html: `
              <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
                <h2 style="color: #4CAF50;">Obrigado pela sua compra!</h2>
                <p>Olá ${customer.name},</p>
                <p>Estamos muito felizes em tê-lo como cliente. Seu pagamento foi aprovado com sucesso!</p>
                <p>Você adquiriu: <strong>${productName}</strong></p>
                <p>Para acessar seu produto, clique no botão abaixo:</p>
                <div style="text-align: center; margin: 30px 0;">
                  <a href="${productLink}" style="background-color: #4CAF50; color: white; padding: 12px 20px; text-decoration: none; border-radius: 4px; font-weight: bold;">ACESSAR MEU PRODUTO</a>
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