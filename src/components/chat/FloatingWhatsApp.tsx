'use client';
import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const FloatingWhatsApp = () => {
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [isPulsing, setIsPulsing] = useState(false);
  const phoneNumber = '+555491397178';
  const message = 'Tenho dúvidas sobre o Fluxo de Caixa 4.0.';
  
  // Efeito de pulsação a cada 3 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setIsPulsing(true);
      setTimeout(() => setIsPulsing(false), 1000);
    }, 5000);
    
    // Mostrar o tooltip automaticamente após 15 segundos na página
    const tooltipTimer = setTimeout(() => {
      setIsTooltipVisible(true);
      // Não esconder mais automaticamente
    }, 15000);
    
    return () => {
      clearInterval(interval);
      clearTimeout(tooltipTimer);
    };
  }, []);
  
  const handleWhatsAppClick = () => {
    // Esconder o tooltip quando o botão for clicado
    setIsTooltipVisible(false);
    
    const encodedMessage = encodeURIComponent(message);
    const whatsappUrl = `https://wa.me/${phoneNumber.replace(/\+/g, '')}?text=${encodedMessage}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <AnimatePresence>
        {isTooltipVisible && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8, y: 0 }}
            animate={{ opacity: 1, scale: 1, y: -10 }}
            exit={{ opacity: 0, scale: 0.8, y: 0 }}
            transition={{ duration: 0.3, type: "spring", stiffness: 500 }}
            className="absolute bottom-full right-0 mb-3 p-3 bg-gradient-to-r from-green-500 to-green-600 text-white rounded-xl shadow-xl text-sm max-w-[250px] whitespace-nowrap font-medium"
            style={{ 
              transform: 'translateY(-8px)',
              boxShadow: '0 10px 25px rgba(0, 0, 0, 0.2)'
            }}
          >
            <p className="font-bold">Precisa de ajuda?</p>
            <div className="absolute bottom-0 right-4 transform translate-y-1/2 rotate-45 w-3 h-3 bg-green-600"></div>
          </motion.div>
        )}
      </AnimatePresence>
      
      <motion.button
        onClick={handleWhatsAppClick}
        className="relative bg-gradient-to-r from-green-500 to-green-600 hover:from-green-600 hover:to-green-700 text-white p-4 rounded-full shadow-lg transition-all duration-300"
        animate={{ 
          scale: isPulsing ? [1, 1.08, 1] : 1
        }}
        transition={{ duration: 1, type: "spring" }}
        style={{ boxShadow: '0 5px 15px rgba(0, 0, 0, 0.1)' }}
        aria-label="Abrir WhatsApp"
      >
        {/* Efeito pulsante */}
        <motion.div 
          className="absolute inset-0 rounded-full bg-green-400 opacity-30"
          animate={{ 
            scale: [1, 1.5, 1],
            opacity: [0.3, 0, 0]
          }}
          transition={{ 
            repeat: Infinity,
            repeatType: "loop",
            duration: 2.5,
            ease: "easeInOut"
          }}
        />
        
        <svg 
          className="w-6 h-6" 
          fill="currentColor" 
          viewBox="0 0 24 24"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
        </svg>
      </motion.button>
    </div>
  );
};

export default FloatingWhatsApp; 