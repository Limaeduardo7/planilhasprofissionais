'use client';
import React from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Image from 'next/image';

const Hero = () => {
  const [ref, inView] = useInView({
    threshold: 0.1,
    triggerOnce: true
  });

  return (
    <section id="inicio" role="banner" aria-label="Seção principal" className="relative min-h-screen bg-black pt-20">
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gradient-to-b from-purple-900/20 via-dark to-black" aria-hidden="true"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(138,58,185,0.1)_0%,rgba(0,0,0,0)_65%)]" aria-hidden="true"></div>
      </div>

      <motion.div
        ref={ref}
        initial={{ opacity: 0 }}
        animate={inView ? { opacity: 1 } : { opacity: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 container mx-auto px-4 py-10 flex flex-col items-center justify-center min-h-screen"
      >
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: -20 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="text-center mb-8 max-w-4xl"
        >
          <div className="inline-block mb-4 px-4 py-1 rounded-full bg-gradient-to-r from-purple-500/10 to-pink-500/10 border border-purple-500/20">
            <strong className="text-purple-400">Novo: Kit Fluxo de Caixa 4.0</strong>
          </div>
          
          <h1 className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600 leading-tight">
            Transforme o Controle Financeiro do Seu Negócio em Resultados Reais
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-8 leading-relaxed">
            O sistema completo que já ajudou mais de <strong className="text-purple-400">2.547 empresários</strong> a 
            conquistarem o controle total de suas finanças e aumentarem seus lucros
          </p>

          <div className="flex flex-wrap justify-center gap-4 mb-8" role="list">
            <div className="flex items-center gap-2 text-gray-300" role="listitem">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Planilhas Profissionais</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300" role="listitem">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Suporte Vitalício</span>
            </div>
            <div className="flex items-center gap-2 text-gray-300" role="listitem">
              <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
              </svg>
              <span>Garantia de 30 dias</span>
            </div>
          </div>
        </motion.div>

        <div className="w-full max-w-4xl mx-auto mb-8">
          <div className="vimeo-container glass rgb-border rgb-glow">
            <iframe
              title="Vídeo de apresentação do Kit Fluxo de Caixa 4.0"
              src="https://player.vimeo.com/video/830395583?autoplay=1&loop=1&title=0&byline=0&portrait=0"
              allow="autoplay; fullscreen; picture-in-picture"
              allowFullScreen
              style={{ border: 'none' }}
              loading="lazy"
              aria-label="Vídeo explicativo sobre o Kit Fluxo de Caixa 4.0"
            ></iframe>
          </div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="text-center"
        >
          <div className="glass-card bg-gradient-to-r from-purple-900/30 to-pink-900/30 p-6 mb-8 max-w-2xl mx-auto">
            <div className="mb-4">
              <span className="text-2xl md:text-3xl font-bold">
                <span className="text-gray-400 line-through mr-4" aria-label="Preço original">R$ 497,00</span>
                <span className="text-green-400" aria-label="Preço com desconto">R$ 147,00</span>
              </span>
              <p className="text-sm text-gray-400 mt-1">Pagamento único - Acesso vitalício</p>
            </div>
            
            <div className="space-y-3 mb-6" role="list">
              <div className="flex items-center gap-2 justify-center" role="listitem">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Acesso Imediato a Todas as Planilhas</span>
              </div>
              <div className="flex items-center gap-2 justify-center" role="listitem">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Atualizações Gratuitas para Sempre</span>
              </div>
              <div className="flex items-center gap-2 justify-center" role="listitem">
                <svg className="w-5 h-5 text-green-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                </svg>
                <span className="text-gray-300">Bônus Exclusivos (Valor: R$ 497,00)</span>
              </div>
            </div>
          </div>

          <a 
            href="https://sun.eduzz.com/1210961" 
            target="_blank"
            rel="noopener noreferrer"
            className="btn-modern text-xl px-10 py-5 inline-flex items-center gap-3 animate-pulse"
            aria-label="Clique para garantir seu acesso com desconto"
          >
            GARANTIR MEU ACESSO COM DESCONTO
            <svg 
              className="w-6 h-6" 
              fill="none" 
              stroke="currentColor" 
              viewBox="0 0 24 24"
              aria-hidden="true"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M13 7l5 5m0 0l-5 5m5-5H6"
              />
            </svg>
          </a>
          <div className="mt-4 flex items-center justify-center gap-2">
            <svg className="w-5 h-5 text-yellow-500" fill="currentColor" viewBox="0 0 20 20" aria-hidden="true">
              <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
            </svg>
            <p className="text-sm text-gray-400">
              <span aria-label="Compra segura">🔒 Compra 100% Segura</span> • <span aria-label="Garantia">Garantia de 30 Dias</span> • <span aria-label="Acesso">Acesso Imediato</span>
            </p>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero; 