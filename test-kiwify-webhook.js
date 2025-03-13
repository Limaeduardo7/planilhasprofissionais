// Script para testar o webhook da Kiwify com diferentes produtos
const axios = require('axios');

// IDs dos webhooks da Kiwify
const KIWIFY_WEBHOOK_IDS = {
  PRODUTO1: 'ryijg7wxh18',
  PRODUTO2: '2bz6rhm4v6l'
};

// URL do webhook (local ou produção)
const webhookUrl1 = `https://planilhasprofissionais.com/.netlify/functions/api/${KIWIFY_WEBHOOK_IDS.PRODUTO1}`;
const webhookUrl2 = `https://planilhasprofissionais.com/.netlify/functions/api/${KIWIFY_WEBHOOK_IDS.PRODUTO2}`;
// const webhookUrlLocal = `http://localhost:8888/.netlify/functions/api/${KIWIFY_WEBHOOK_IDS.PRODUTO1}`; // Para teste local

// Função para simular um evento de compra aprovada da Kiwify
async function simulateKiwifyApprovedOrder(webhookUrl, productId, productName, customerEmail, customerName) {
  const payload = {
    event: 'order.approved',
    data: {
      customer: {
        name: customerName,
        email: customerEmail
      },
      product: {
        id: productId,
        name: productName
      }
    }
  };

  try {
    console.log(`Enviando evento para ${productName} (ID: ${productId}) via ${webhookUrl}...`);
    const response = await axios.post(webhookUrl, payload);
    console.log('Resposta:', response.data);
    console.log('Status:', response.status);
    return response.data;
  } catch (error) {
    console.error('Erro ao enviar evento:', error.message);
    if (error.response) {
      console.error('Detalhes do erro:', error.response.data);
    }
    throw error;
  }
}

// Testar com diferentes produtos e webhooks
async function runTests() {
  try {
    // Teste para Fluxo de Caixa via primeiro webhook
    await simulateKiwifyApprovedOrder(
      webhookUrl1,
      'fluxo-de-caixa-4-0',
      'Fluxo de Caixa 4.0',
      'nasklima@gmail.com', // Use o e-mail verificado no Resend
      'Eduardo Lima'
    );

    // Aguardar um pouco entre as requisições
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Teste para Controle de Estoque via segundo webhook
    await simulateKiwifyApprovedOrder(
      webhookUrl2,
      'controle-estoque',
      'Controle de Estoque Profissional',
      'nasklima@gmail.com', // Use o e-mail verificado no Resend
      'Eduardo Lima'
    );

    // Aguardar um pouco entre as requisições
    await new Promise(resolve => setTimeout(resolve, 2000));

    // Teste para Controle Financeiro via primeiro webhook
    await simulateKiwifyApprovedOrder(
      webhookUrl1,
      'controle-financeiro',
      'Controle Financeiro Completo',
      'nasklima@gmail.com', // Use o e-mail verificado no Resend
      'Eduardo Lima'
    );

    console.log('Todos os testes foram concluídos com sucesso!');
  } catch (error) {
    console.error('Erro durante os testes:', error);
  }
}

// Executar os testes
runTests(); 