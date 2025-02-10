'use client';
import React from 'react';
import Link from 'next/link';
import { useState } from 'react';
import { motion } from 'framer-motion';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const scrollToSection = (e: React.MouseEvent<HTMLAnchorElement>, id: string) => {
    e.preventDefault();
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setIsMenuOpen(false);
    }
  };

  return (
    <motion.header 
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed w-full z-50 glass"
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center h-20">
          {/* Logo */}
          <a 
            href="#inicio" 
            onClick={(e) => scrollToSection(e, 'inicio')}
            className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600"
          >
            Fluxo de Caixa 4.0
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-8">
            <a 
              href="#inicio" 
              onClick={(e) => scrollToSection(e, 'inicio')}
              className="text-white hover:text-purple-400 transition-colors"
            >
              Início
            </a>
            <a 
              href="#beneficios" 
              onClick={(e) => scrollToSection(e, 'beneficios')}
              className="text-white hover:text-purple-400 transition-colors"
            >
              Benefícios
            </a>
            <a 
              href="#destaques" 
              onClick={(e) => scrollToSection(e, 'destaques')}
              className="text-white hover:text-purple-400 transition-colors"
            >
              Destaques
            </a>
            <a 
              href="#oferta" 
              onClick={(e) => scrollToSection(e, 'oferta')}
              className="text-white hover:text-purple-400 transition-colors"
            >
              Oferta
            </a>
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <svg
              className="w-6 h-6"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              {isMenuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <motion.nav 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.2 }}
            className="md:hidden pb-4"
          >
            <a 
              href="#inicio"
              onClick={(e) => scrollToSection(e, 'inicio')}
              className="block py-2 text-white hover:text-purple-400 transition-colors"
            >
              Início
            </a>
            <a 
              href="#beneficios"
              onClick={(e) => scrollToSection(e, 'beneficios')}
              className="block py-2 text-white hover:text-purple-400 transition-colors"
            >
              Benefícios
            </a>
            <a 
              href="#destaques"
              onClick={(e) => scrollToSection(e, 'destaques')}
              className="block py-2 text-white hover:text-purple-400 transition-colors"
            >
              Destaques
            </a>
            <a 
              href="#oferta"
              onClick={(e) => scrollToSection(e, 'oferta')}
              className="block py-2 text-white hover:text-purple-400 transition-colors"
            >
              Oferta
            </a>
          </motion.nav>
        )}
      </div>
    </motion.header>
  );
};

export default Header; 