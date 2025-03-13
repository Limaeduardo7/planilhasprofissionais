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
  },
  'ia0ai3c2yy3': {
    link: 'https://drive.google.com/drive/folders/1X77GcF7FWPQbZ6nlWNP4uo2JS9Vdmh9q?usp=drive_link',
    defaultName: 'Planilha de Precificação de Produtos'
  },
  'wab3dr1gwmk': {
    link: 'https://drive.google.com/drive/folders/13F7t9xLuMNZDKd0exsjbAcm_2SxCYdRb?usp=drive_link',
    defaultName: 'Planilhas para Recursos Humanos'
  },
  'dj818mtxkyj': {
    link: 'https://drive.google.com/drive/folders/1I58ZtVMerqyiQoxF-4bn5E8ycLFBC0Er?usp=drive_link',
    defaultName: 'Planilha de Estoque profissional + 5 planilhas bônus'
  },
  '0dct00063qt': {
    link: 'https://drive.google.com/drive/folders/1R-xje3lFc6bNyyAYl2vBWGKD8JStcMz4?usp=drive_link',
    defaultName: 'Planilha de Balanço Patrimonial'
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

const webhook3 = {
  id: 'ia0ai3c2yy3',
  url: `https://planilhasprofissionais.com/.netlify/functions/api/ia0ai3c2yy3`,
  productName: 'Planilha de Precificação de Produtos'
};

const webhook4 = {
  id: 'wab3dr1gwmk',
  url: `https://planilhasprofissionais.com/.netlify/functions/api/wab3dr1gwmk`,
  productName: 'Planilhas para Recursos Humanos'
};

const webhook5 = {
  id: 'dj818mtxkyj',
  url: `https://planilhasprofissionais.com/.netlify/functions/api/dj818mtxkyj`,
  productName: 'Planilha de Estoque profissional + 5 planilhas bônus'
};

const webhook6 = {
  id: '0dct00063qt',
  url: `https://planilhasprofissionais.com/.netlify/functions/api/0dct00063qt`,
  productName: 'Planilha de Balanço Patrimonial'
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
    
    // Selecione quais webhooks testar (comente ou descomente conforme necessário)
    const webhooksToTest = [
      { name: 'Planilha de Orçamento Familiar', webhook: webhook1 },
      { name: 'Kit Fluxo de Caixa 4.0', webhook: webhook2 },
      { name: 'Planilha de Precificação de Produtos', webhook: webhook3 },
      { name: 'Planilhas para Recursos Humanos', webhook: webhook4 },
      { name: 'Planilha de Estoque profissional', webhook: webhook5 },
      { name: 'Planilha de Balanço Patrimonial', webhook: webhook6 }
    ];
    
    for (const [index, test] of webhooksToTest.entries()) {
      console.log(`\n=== TESTE ${index + 1}: ${test.name} ===`);
      await simulateKiwifyApprovedOrder(test.webhook, testEmail, testName);
      
      // Aguardar um pouco entre as requisições (exceto na última)
      if (index < webhooksToTest.length - 1) {
        await new Promise(resolve => setTimeout(resolve, 2000));
      }
    }
    
    console.log('\nTodos os testes foram concluídos com sucesso!');
    console.log('Verifique sua caixa de e-mail para confirmar se os links corretos foram enviados.');
  } catch (error) {
    console.error('Erro durante os testes:', error);
  }
}

// Executar os testes
runTests(); 