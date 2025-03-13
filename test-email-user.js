// Script para testar o envio de e-mail diretamente com o Resend
const { Resend } = require('resend');

// Inicializar o cliente Resend com a chave API
const resend = new Resend('re_Lv2t9jdP_AhAcTxfZz4ebvaNWCCqSns9m');

// Link do produto para teste - Link correto do Google Drive
const productLink = 'https://drive.google.com/drive/folders/1gMx3OvPmZR-tYurJwjjqINY5Yd8JFQHd';

async function testEmail() {
  try {
    const { data, error } = await resend.emails.send({
      from: 'Planilhas Profissionais <onboarding@resend.dev>', // Use o domínio verificado no Resend
      to: 'nasklima@gmail.com', // E-mail verificado na conta do Resend
      subject: `Acesso ao seu produto: Fluxo de Caixa 4.0`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #e0e0e0; border-radius: 5px;">
          <h2 style="color: #4CAF50;">Obrigado pela sua compra!</h2>
          <p>Olá Eduardo Lima,</p>
          <p>Estamos muito felizes em tê-lo como cliente. Seu pagamento foi aprovado com sucesso!</p>
          <p>Você adquiriu: <strong>Fluxo de Caixa 4.0</strong></p>
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
    } else {
      console.log('E-mail enviado com sucesso!');
      console.log('ID do e-mail:', data.id);
    }
  } catch (error) {
    console.error('Erro ao enviar e-mail:', error);
  }
}

testEmail(); 