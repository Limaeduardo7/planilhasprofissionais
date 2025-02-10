import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { sendMessageToGemini } from '../../services/gemini';

const FloatingChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Array<{text: string, isUser: boolean}>>([
    {
      text: "Oi! Eu sou o Bruno, especialista em gestão financeira! 😊 Estou aqui pra te ajudar a encontrar a melhor solução pro controle financeiro do seu negócio. Como posso te ajudar hoje?",
      isUser: false
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const [isTyping, setIsTyping] = useState(false);

  const handleSendMessage = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!inputMessage.trim()) return;

    // Adiciona mensagem do usuário
    const userMessage = { text: inputMessage, isUser: true };
    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');
    setIsTyping(true);

    try {
      // Integração real com Gemini
      const response = await sendMessageToGemini(inputMessage);
      const aiResponse = {
        text: response,
        isUser: false
      };
      setMessages(prev => [...prev, aiResponse]);
    } catch (error) {
      console.error('Erro ao processar mensagem:', error);
      const errorResponse = {
        text: "Puxa, desculpa! Tive um probleminha técnico aqui. Você pode tentar me perguntar de novo? 😅",
        isUser: false
      };
      setMessages(prev => [...prev, errorResponse]);
    } finally {
      setIsTyping(false);
    }
  };

  return (
    <>
      {/* Botão flutuante */}
      <button
        onClick={() => setIsOpen(true)}
        className="fixed bottom-4 right-4 z-50 bg-purple-600 text-white p-4 rounded-full shadow-lg hover:bg-purple-700 transition-all duration-300 animate-bounce"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z"
          />
        </svg>
      </button>

      {/* Janela do chat */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 100 }}
            className="fixed bottom-20 right-4 z-50 w-96 h-[500px] bg-dark-light rounded-lg shadow-2xl flex flex-col overflow-hidden glass"
          >
            {/* Header do chat */}
            <div className="p-4 bg-purple-600 text-white flex justify-between items-center">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center">
                  <span className="font-semibold">B</span>
                </div>
                <div>
                  <h3 className="font-semibold">Bruno</h3>
                  <p className="text-xs text-white/80">Especialista em Gestão Financeira</p>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(false)}
                className="text-white hover:text-gray-200"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Área de mensagens */}
            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.isUser ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-[80%] p-3 rounded-lg ${
                      message.isUser
                        ? 'bg-purple-600 text-white'
                        : 'bg-gray-700 text-white'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-gray-700 text-white p-3 rounded-lg">
                    Bruno está digitando...
                  </div>
                </div>
              )}
            </div>

            {/* Input de mensagem */}
            <form onSubmit={handleSendMessage} className="p-4 border-t border-gray-700">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Digite sua mensagem..."
                  className="flex-1 p-2 rounded-lg bg-gray-700 text-white focus:outline-none focus:ring-2 focus:ring-purple-600"
                />
                <button
                  type="submit"
                  className="bg-purple-600 text-white p-2 rounded-lg hover:bg-purple-700 transition-colors"
                >
                  <svg
                    className="w-5 h-5"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
                    />
                  </svg>
                </button>
              </div>
            </form>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default FloatingChat; 