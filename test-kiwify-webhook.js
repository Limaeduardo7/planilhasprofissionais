// Script para testar o webhook da Kiwify com diferentes produtos
const axios = require('axios');

// Mapeamento de webhooks para produtos
const WEBHOOK_PRODUCT_MAPPING = {
  'ryijg7wxh18': {
    link: 'https://drive.google.com/drive/folders/1gWs22ggjAuZTjC4zt6W29jSeXPuMafdE?usp=drive_link',
    defaultName: 'Planilha de Orçamento Familiar'
  },
  '2bz6rhm4v6l': {
    link: 'https://drive.google.com/drive/folders/1gMx3OvPmZR-tYurJwjjqINY5Yd8JFQHd?usp=drive_link',
    defaultName: 'Kit Fluxo de Caixa 4.0'
  }
};

// URLs dos webhooks (produção)
const webhook1 = {
  id: 'ryijg7wxh18',
  url: `https://planilhasprofissionais.com/.netlify/functions/api/ryijg7wxh18`,
  productName: 'Planilha de Orçamento Familiar'
};

const webhook2 = {
  id: '2bz6rhm4v6l',
  url: `https://planilhasprofissionais.com/.netlify/functions/api/2bz6rhm4v6l`,
  productName: 'Kit Fluxo de Caixa 4.0'
};

// Função para simular um evento de compra aprovada da Kiwify
async function simulateKiwifyApprovedOrder(webhook, customerEmail, customerName) {
  const payload = {
    event: 'order.approved',
    data: {
      customer: {
        name: customerName,
        email: customerEmail
      },
      product: {
        id: `produto-teste-${webhook.id}`,
        name: webhook.productName
      }
    }
  };

  try {
    console.log(`Enviando evento para ${webhook.productName} via webhook ${webhook.id}...`);
    console.log(`Webhook URL: ${webhook.url}`);
    console.log(`Link esperado: ${WEBHOOK_PRODUCT_MAPPING[webhook.id].link}`);
    
    const response = await axios.post(webhook.url, payload);
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

// Testar com diferentes webhooks
async function runTests() {
  try {
    const testEmail = 'nasklima@gmail.com'; // Use o e-mail verificado no Resend
    const testName = 'Eduardo Lima';
    
    console.log('=== TESTE 1: Webhook para Fluxo de Caixa ===');
    await simulateKiwifyApprovedOrder(webhook1, testEmail, testName);

    // Aguardar um pouco entre as requisições
    await new Promise(resolve => setTimeout(resolve, 2000));

    console.log('\n=== TESTE 2: Webhook para Controle de Estoque ===');
    await simulateKiwifyApprovedOrder(webhook2, testEmail, testName);
    
    console.log('\nTodos os testes foram concluídos com sucesso!');
    console.log('Verifique sua caixa de e-mail para confirmar se os links corretos foram enviados.');
  } catch (error) {
    console.error('Erro durante os testes:', error);
  }
}

// Executar os testes
runTests(); 