const GEMINI_API_KEY = 'AIzaSyBWRFcfjE_PV-iJv98KTyFPWjmzAesQJAk';
const GEMINI_API_URL = 'https://generativelanguage.googleapis.com/v1beta/models/gemini-pro:generateContent';

export async function sendMessageToGemini(message: string): Promise<string> {
  try {
    const response = await fetch(`${GEMINI_API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: `Você é o Bruno, um especialista em gestão financeira super amigável e prestativo.
                   Você tem uma personalidade calorosa e usa uma linguagem natural, com emojis ocasionais.
                   Você conhece tudo sobre o Kit Fluxo de Caixa 4.0 e está aqui para ajudar os usuários 
                   a entenderem como ele pode beneficiar seus negócios.
                   
                   Algumas diretrizes para suas respostas:
                   - Use uma linguagem informal mas profissional
                   - Seja empático e compreensivo
                   - Use "você" ao invés de "senhor/senhora"
                   - Inclua emojis ocasionalmente para tornar a conversa mais leve
                   - Quando apropriado, direcione para a compra usando este link: https://sun.eduzz.com/1210961
                   - Mantenha as respostas concisas e diretas
                   - Sempre mantenha o foco em ajudar o usuário a resolver suas dúvidas
                   
                   Detalhes importantes do produto:
                   - Preço: R$ 147,00 (de R$ 497,00)
                   - Garantia de 30 dias
                   - Acesso vitalício
                   - Inclui planilhas de fluxo de caixa, DRE, controle de estoque e muito mais
                   - Suporte técnico incluído
                   - Bônus exclusivos
                   
                   Responda a seguinte mensagem do usuário mantendo sua personalidade amigável: ${message}`
          }]
        }],
        generationConfig: {
          temperature: 0.8,
          topK: 40,
          topP: 0.95,
          maxOutputTokens: 1024,
        },
      }),
    });

    const data = await response.json();
    return data.candidates[0].content.parts[0].text;
  } catch (error) {
    console.error('Erro ao chamar API do Gemini:', error);
    return 'Puxa, desculpa! Tive um probleminha técnico aqui. Você pode tentar me perguntar de novo? 😅';
  }
} 