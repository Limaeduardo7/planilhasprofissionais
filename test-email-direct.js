// Script para testar o envio de e-mail diretamente com o Resend para diferentes produtos
const { Resend } = require('resend');

// Inicializar o cliente Resend com a chave API
const resend = new Resend('re_iRKH28RL_Mih9VuSaY7vdBV9FXkVhUSN3');

// Links dos produtos
const PRODUCT_LINKS = {
  'fluxo-de-caixa-4-0': 'https://drive.google.com/drive/folders/1gWs22ggjAuZTjC4zt6W29jSeXPuMafdE?usp=drive_link',
  'controle-estoque': 'https://drive.google.com/drive/folders/1gWs22ggjAuZTjC4zt6W29jSeXPuMafdE?usp=drive_link',
  'controle-financeiro': 'https://drive.google.com/drive/folders/1gWs22ggjAuZTjC4zt6W29jSeXPuMafdE?usp=drive_link'
};

// Função para enviar e-mail para um produto específico
async function sendProductEmail(productId, productName, customerEmail, customerName) {
  const productLink = PRODUCT_LINKS[productId] || 'https://drive.google.com/drive/folders/1gMx3OvPmZR-tYurJwjjqINY5Yd8JFQHd';
  
  try {
    console.log(`Enviando e-mail para ${productName} (ID: ${productId})...`);
    
    const { data, error } = await resend.emails.send({
      from: 'Planilhas Profissionais <onboarding@resend.dev>', // Use o domínio verificado no Resend
      to: customerEmail, // E-mail verificado na conta do Resend
      subject: `Acesso ao seu produto: ${productName}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #4CAF50;">Obrigado pela sua compra!</h2>
          <p>Olá ${customerName},</p>
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
      return { success: false, error };
    } else {
      console.log('E-mail enviado com sucesso!');
      console.log('ID do e-mail:', data.id);
      return { success: true, data };
    }
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
    return { success: false, error };
  }
}

// Testar com diferentes produtos
async function runTests() {
  try {
    // Teste para Fluxo de Caixa
    await sendProductEmail(
      'fluxo-de-caixa-4-0',
      'Fluxo de Caixa 4.0',
      'nasklima@gmail.com', // Use o e-mail verificado no Resend
      'Eduardo Lima'
    );

    // Aguardar um pouco entre os envios
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Teste para Controle de Estoque
    await sendProductEmail(
      'controle-estoque',
      'Controle de Estoque Profissional',
      'nasklima@gmail.com', // Use o e-mail verificado no Resend
      'Eduardo Lima'
    );

    // Aguardar um pouco entre os envios
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Teste para Controle Financeiro
    await sendProductEmail(
      'controle-financeiro',
      'Controle Financeiro Completo',
      'nasklima@gmail.com', // Use o e-mail verificado no Resend
      'Eduardo Lima'
    );

    console.log('Todos os testes foram concluídos!');
  } catch (error) {
    console.error('Erro durante os testes:', error);
  }
}

// Executar os testes
runTests(); 