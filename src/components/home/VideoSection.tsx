'use client';

import React from 'react';
import { motion } from 'framer-motion';

const VideoSection = () => {
  return (
    <section className="py-16 bg-dark">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="max-w-4xl mx-auto text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
            Veja o Kit em Ação
          </h2>
          
          <div className="relative pt-[56.25%] rounded-xl overflow-hidden shadow-2xl">
            <iframe
              className="absolute top-0 left-0 w-full h-full"
              src="https://www.youtube.com/embed/SEU_VIDEO_ID"
              title="Kit Fluxo de Caixa 4.0 Demonstração"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
          
          <div className="mt-8">
            <p className="text-xl text-gray-300 mb-4">
              Assista ao vídeo e descubra como o Kit Fluxo de Caixa 4.0 pode transformar sua gestão financeira
            </p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-3 rounded-full font-semibold text-lg shadow-lg hover:shadow-xl transition-all duration-300"
            >
              Quero Começar Agora
            </motion.button>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default VideoSection; 