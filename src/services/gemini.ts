const GEMINI_API_KEY = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
const API_URL = 'https://generativelanguage.googleapis.com/v1/models/gemini-pro:generateContent';

export async function sendMessageToGemini(message: string): Promise<string> {
  try {
    if (!GEMINI_API_KEY) {
      console.error('Chave da API não encontrada');
      throw new Error('Chave da API do Gemini não configurada');
    }

    const prompt = `Atue como Bruno, um especialista em gestão financeira amigável e prestativo.
    Use emojis ocasionalmente e mantenha um tom amigável.

    Detalhes do produto que você está vendendo:
    - Kit Fluxo de Caixa 4.0
    - Preço atual: R$ 147,00 (valor normal R$ 497,00)
    - Garantia de 30 dias
    - Acesso vitalício
    - Inclui planilhas completas
    - Suporte técnico incluído
    - Link para compra: https://sun.eduzz.com/1210961

    Mensagem do usuário: ${message}`;

    console.log('Enviando requisição para API...');
    const response = await fetch(`${API_URL}?key=${GEMINI_API_KEY}`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        contents: [{
          parts: [{
            text: prompt
          }]
        }],
        generationConfig: {
          temperature: 0.7,
          topK: 1,
          topP: 0.8,
          maxOutputTokens: 800,
        },
        safetySettings: [{
          category: "HARM_CATEGORY_DEROGATORY",
          threshold: "BLOCK_NONE"
        }]
      })
    });

    if (!response.ok) {
      const errorData = await response.json();
      console.error('Erro na resposta da API:', errorData);
      throw new Error(`Erro na API: ${response.status} - ${JSON.stringify(errorData)}`);
    }

    const data = await response.json();
    console.log('Resposta completa:', data);

    if (!data.candidates?.[0]?.content?.parts?.[0]?.text) {
      console.error('Formato de resposta inválido:', data);
      throw new Error('Formato de resposta inválido');
    }

    const text = data.candidates[0].content.parts[0].text;
    console.log('Texto da resposta:', text);
    return text;

  } catch (error: any) {
    console.error('Erro detalhado:', {
      name: error.name,
      message: error.message,
      stack: error.stack
    });

    if (error.message?.includes('API key')) {
      return 'Ops! Parece que estou com um problema de configuração. Por favor, tente novamente em alguns minutos! 🔧';
    }

    if (error.message?.includes('quota') || error.message?.includes('rate')) {
      return 'Puxa! Parece que atingimos nosso limite de conversas por hoje. Que tal tentar novamente amanhã? 😅';
    }

    if (error.message?.includes('blocked') || error.message?.includes('safety')) {
      return 'Desculpe, não consegui processar essa mensagem. Poderia tentar reformular de outra forma? 🤔';
    }

    return 'Desculpe! Tive um probleminha técnico aqui. Você pode tentar me perguntar de novo? 🔄';
  }
} 