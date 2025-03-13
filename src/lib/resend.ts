import { Resend } from 'resend';

// Inicializar o cliente Resend com a chave de API
export const resend = new Resend(process.env.RESEND_API_KEY);

// Template de e-mail para entrega de produto
export function getProductDeliveryEmailTemplate(
  customerName: string,
  productName: string,
  productLink: string
) {
  return `
    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; color: #333;">
      <div style="text-align: center; margin-bottom: 20px;">
        <img src="https://planilhasprofissionais.com/logo.png" alt="Planilhas Profissionais" style="max-width: 200px;">
      </div>
      
      <div style="background-color: #f9f9f9; border-radius: 8px; padding: 20px; margin-bottom: 20px;">
        <h1 style="color: #28a745; margin-top: 0;">Olá ${customerName}!</h1>
        <p>Obrigado por adquirir o <strong>${productName}</strong>!</p>
        <p>Seu acesso já está disponível e você pode baixar seu produto através do link abaixo:</p>
        
        <div style="text-align: center; margin: 30px 0;">
          <a href="${productLink}" target="_blank" style="background-color: #28a745; color: white; padding: 12px 24px; text-decoration: none; border-radius: 4px; font-weight: bold; display: inline-block;">
            ACESSAR MEU PRODUTO
          </a>
        </div>
        
        <p><strong>Importante:</strong> Se você tiver qualquer dificuldade para acessar seu produto, responda a este e-mail ou entre em contato pelo WhatsApp.</p>
      </div>
      
      <div style="border-top: 1px solid #eee; padding-top: 20px; font-size: 14px; color: #666;">
        <p>Atenciosamente,<br>Equipe Planilhas Profissionais</p>
        <p>
          <a href="https://planilhasprofissionais.com" style="color: #28a745; text-decoration: none;">planilhasprofissionais.com</a> | 
          <a href="https://wa.me/5554996258695" style="color: #28a745; text-decoration: none;">WhatsApp</a>
        </p>
      </div>
    </div>
  `;
} 