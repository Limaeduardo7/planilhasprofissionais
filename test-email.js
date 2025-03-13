// Script para testar o envio de e-mail
const fetch = require('node-fetch');

async function testEmail() {
  try {
    const response = await fetch('http://localhost:3000/api/test-email', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: 'limaeduardo7@gmail.com', // E-mail do usuário
        name: 'Eduardo Lima',
        productName: 'Fluxo de Caixa 4.0'
      }),
    });

    const data = await response.json();
    console.log('Resposta:', data);
  } catch (error) {
    console.error('Erro ao enviar e-mail de teste:', error);
  }
}

testEmail(); 