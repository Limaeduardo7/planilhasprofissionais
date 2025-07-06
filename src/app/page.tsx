'use client';
import React from 'react';
import dynamic from 'next/dynamic';
import { motion } from 'framer-motion';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';

const Hero = dynamic(() => import('../components/home/Hero'), {
  ssr: false,
  loading: () => (
    <div className="min-h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4">Kit Fluxo de Caixa 4.0</h1>
        <p className="text-xl">Carregando...</p>
      </div>
    </div>
  )
});

const CountdownTimer = dynamic(() => import('../components/home/CountdownTimer'), {
  ssr: false,
  loading: () => <div>Carregando...</div>
});

const ImageSlider = dynamic(() => import('../components/home/ImageSlider'), {
  ssr: false,
  loading: () => <div>Carregando...</div>
});

const FloatingWhatsApp = dynamic(() => import('../components/chat/FloatingWhatsApp'), {
  ssr: false,
  loading: () => <div></div>
});

export default function Home() {
  return (
    <>
      <Header />
      <main className="bg-dark text-white">
      <Hero />
      
        {/* Seção de Benefícios Rápidos */}
        <section className="py-16 bg-gradient-to-b from-dark to-dark-light">
        <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
                Planilhas Profissionais
          </h2>
              <p className="text-xl md:text-2xl mb-12 text-gray-300">
                Controle Financeiro Simplificado e Eficiente
              </p>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.1 }}
                  viewport={{ once: true }}
                  className="glass-card flex items-start gap-4 text-left"
                >
                  <div className="p-2 rounded-lg bg-purple-400/10">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 7h6m0 10v-3m-3 3h.01M9 17h.01M9 14h.01M12 14h.01M15 11h.01M12 11h.01M9 11h.01M7 21h10a2 2 0 002-2V5a2 2 0 00-2-2H7a2 2 0 00-2 2v14a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-400">Otimize sua gestão financeira</h3>
                    <p className="text-gray-300">Tenha total controle das suas finanças de forma simples e organizada</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  viewport={{ once: true }}
                  className="glass-card flex items-start gap-4 text-left"
                >
                  <div className="p-2 rounded-lg bg-purple-400/10">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-400">Controle de vendas completo</h3>
                    <p className="text-gray-300">Acompanhe todas as suas vendas em um único lugar</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.3 }}
                  viewport={{ once: true }}
                  className="glass-card flex items-start gap-4 text-left"
                >
                  <div className="p-2 rounded-lg bg-purple-400/10">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17v-2m3 2v-4m3 4v-6m2 10H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-400">Relatórios precisos</h3>
                    <p className="text-gray-300">Gere relatórios detalhados em questão de minutos</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.4 }}
                  viewport={{ once: true }}
                  className="glass-card flex items-start gap-4 text-left"
                >
                  <div className="p-2 rounded-lg bg-purple-400/10">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-400">Sem mensalidades</h3>
                    <p className="text-gray-300">Pagamento único com acesso vitalício</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.5 }}
                  viewport={{ once: true }}
                  className="glass-card flex items-start gap-4 text-left"
                >
                  <div className="p-2 rounded-lg bg-purple-400/10">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-400">Suporte dedicado</h3>
                    <p className="text-gray-300">Tire suas dúvidas com nossa equipe especializada</p>
                  </div>
                </motion.div>

                <motion.div 
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.6 }}
                  viewport={{ once: true }}
                  className="glass-card flex items-start gap-4 text-left"
                >
                  <div className="p-2 rounded-lg bg-purple-400/10">
                    <svg className="w-6 h-6 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 10h16M4 14h16M4 18h16" />
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-purple-400">Organização completa</h3>
                    <p className="text-gray-300">Controle todas as entradas e saídas em um só lugar</p>
                  </div>
                </motion.div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="mt-12"
              >
                <a 
                  href="https://pay.kiwify.com.br/QaaB4aO" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-modern text-lg px-8 py-4 inline-flex items-center gap-2"
                >
                  Quero Começar Agora
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
            </div>
        </section>

        {/* Seção de Alerta */}
        <section className="py-16 bg-gradient-to-b from-dark to-dark-light">
          <div className="container mx-auto px-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="max-w-4xl mx-auto text-center"
            >
              <h2 className="text-3xl md:text-5xl font-bold mb-8 text-red-500">
                Empresas desorganizadas fecham as portas em até dois anos!
              </h2>

              <div className="glass-card mb-8 relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-2 bg-gradient-to-r from-red-500 via-red-400 to-red-500"></div>
                <div className="flex flex-col md:flex-row items-center justify-center gap-8 p-8">
                  <div className="text-center md:text-left flex-1">
                    <span className="text-6xl md:text-8xl font-bold text-red-500">50%</span>
                    <p className="text-xl mt-2 text-gray-300">das empresas fecham em até 2 anos</p>
            </div>
                  <div className="w-px h-20 bg-gray-700 hidden md:block"></div>
                  <div className="flex-1">
                    <p className="text-xl text-gray-300">
                      De acordo com o SEBRAE, a falta de controle do fluxo de caixa é a principal razão para que a cada 10 empresas que abrem no Brasil, 5 fechem as portas em até 2 anos.
              </p>
            </div>
          </div>
              </div>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
                className="glass-card bg-gradient-to-r from-purple-900/30 to-pink-900/30"
              >
                <p className="text-xl mb-6">
                  Não permita que isso aconteça com sua empresa, adquira agora nossas Planilhas Profissionais e tenha um controle financeiro preciso e eficiente, garantindo a estabilidade e o crescimento do seu negócio.
                </p>
                <a 
                  href="https://pay.kiwify.com.br/QaaB4aO" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn-modern inline-flex items-center gap-2 text-lg"
                >
                  Proteger Meu Negócio Agora
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
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </a>
              </motion.div>
            </motion.div>
        </div>
      </section>

        {/* Seção de Benefícios */}
        <section id="beneficios" className="py-20 bg-dark-light">
        <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Por que escolher o Kit Fluxo de Caixa 4.0?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="glass-card">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Controle Total</h3>
                <p className="text-gray-300">
                  Tenha uma visão completa das suas finanças com dashboards intuitivos e relatórios detalhados.
                </p>
              </div>
              <div className="glass-card">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Automação Inteligente</h3>
                <p className="text-gray-300">
                  Automatize seus cálculos e projeções financeiras com fórmulas avançadas e integradas.
                </p>
              </div>
              <div className="glass-card">
                <h3 className="text-xl font-semibold mb-4 text-purple-400">Suporte Premium</h3>
                <p className="text-gray-300">
                  Acesso a treinamentos exclusivos e suporte direto com nossa equipe especializada.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Seção de Destaques */}
        <section id="destaques" className="py-20 bg-dark">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              O que está incluído no Kit?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
              <div className="glass-card p-0">
                <ImageSlider
                  images={[
                    'https://i.imgur.com/UWNIXdv.png',
                    'https://i.imgur.com/UbdaU2f.png',
                    'https://i.imgur.com/D75Ik9S.png',
                    'https://i.imgur.com/GNPAYwW.png'
                  ]}
                  title="Pacote Completo de Planilhas"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">Pacote Completo de Planilhas</h3>
                  <ul className="text-gray-300 mb-4 text-left list-disc list-inside">
                    <li>Fluxo de Caixa</li>
                    <li>Dashboard Financeiro</li>
                    <li>DRE</li>
                    <li>Contas a Receber e Pagar</li>
                    <li>Cadastro de Clientes</li>
                    <li>Controle de Estoque</li>
                  </ul>
                </div>
              </div>
              <div className="glass-card p-0">
                <ImageSlider
                  images={[
                    'https://i.imgur.com/Yv666Ei.png',
                    'https://i.imgur.com/tzlBetP.png'
                  ]}
                  title="Planilhas Complementares"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">Planilhas Complementares</h3>
                  <ul className="text-gray-300 mb-4 text-left list-disc list-inside">
                    <li>Fluxo de Caixa Diário</li>
                    <li>Lista de Compras</li>
                    <li>Controle de Pedidos</li>
                    <li>Relatórios Automáticos</li>
                    <li>Gráficos Dinâmicos</li>
                  </ul>
                </div>
              </div>
              <div className="glass-card p-0">
                <div className="w-full">
                  <img
                    src="https://i.imgur.com/9SzYlv9.png"
                    alt="Bônus Exclusivos"
                    className="w-full h-auto object-contain rounded-t-lg"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2 text-purple-400">Bônus Exclusivos</h3>
                  <ul className="text-gray-300 mb-4 text-left list-disc list-inside">
                    <li>Assessoria Técnica</li>
                    <li>Ebook: Como conquistar mais clientes</li>
                    <li>Atualizações Vitalícias</li>
                    <li>Suporte Premium</li>
                  </ul>
                </div>
              </div>
            </div>
            
            <div className="text-center">
              <a 
                href="https://pay.kiwify.com.br/QaaB4aO" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-modern text-lg px-8 py-4 inline-flex items-center gap-2"
              >
                Quero Acesso a Todo o Pacote
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
              </div>
        </section>

        {/* Seção FAQ */}
        <section className="py-20 bg-dark">
          <div className="container mx-auto px-4">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Perguntas Frequentes
            </h2>
            
            <div className="max-w-4xl mx-auto grid gap-6">
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5 }}
                viewport={{ once: true }}
                className="glass-card"
              >
                <h3 className="text-xl font-semibold mb-2 text-purple-400">Como faço o download das planilhas?</h3>
                <p className="text-gray-300">
                  Após a compra, você receberá um link de download imediato por e-mail.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                viewport={{ once: true }}
                className="glass-card"
              >
                <h3 className="text-xl font-semibold mb-2 text-purple-400">Preciso entender de Excel?</h3>
                <p className="text-gray-300">
                  Você não precisa saber mexer no Excel, nossas planilhas profissionais foram feitas para serem o mais intuitivas possível.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="glass-card"
              >
                <h3 className="text-xl font-semibold mb-2 text-purple-400">Qual versão do Excel preciso ter?</h3>
                <p className="text-gray-300">
                  É recomendável da versão 2013 em diante, para utilizar ao máximo todos os recursos. No entanto, a partir da versão 2010 já é possível utilizar as planilhas profissionais.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="glass-card"
              >
                <h3 className="text-xl font-semibold mb-2 text-purple-400">Posso personalizar as planilhas?</h3>
                <p className="text-gray-300">
                  Sim, todas as planilhas são totalmente personalizáveis para atender às suas necessidades específicas.
                </p>
              </motion.div>

              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="glass-card"
              >
                <h3 className="text-xl font-semibold mb-2 text-purple-400">A planilha funciona em MacBook?</h3>
                <p className="text-gray-300">
                  Sim, nossas planilhas profissionais funcionam para todos os dispositivos desde que você tenha o Microsoft Excel instalado (não pode ser o Calc da Apple).
                </p>
              </motion.div>
              </div>

            <div className="text-center mt-12">
              <a 
                href="https://pay.kiwify.com.br/QaaB4aO" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-modern text-lg px-8 py-4 inline-flex items-center gap-2"
              >
                Quero Começar Agora
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
          </div>
        </div>
      </section>

        {/* Seção CTA/Oferta */}
        <section id="oferta" className="py-20 glass">
        <div className="container mx-auto px-4 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-pink-600">
              Oferta Especial por Tempo Limitado
          </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto text-gray-300">
              Adquira agora o Kit Fluxo de Caixa 4.0 com desconto especial e ganhe acesso vitalício a todas as atualizações.
            </p>
            
            <CountdownTimer />

            <div className="flex flex-col items-center gap-4">
              <p className="text-3xl font-bold text-purple-400">
                <span className="text-gray-400 line-through mr-4">R$ 497,00</span>
                <span className="text-green-400">R$ 47,00</span>
              </p>
              <p className="text-sm text-gray-400">
                Pagamento único - Acesso vitalício
              </p>
              <div className="flex items-center gap-2 mb-6">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <p className="text-green-400">
                  Garantia de 30 dias ou seu dinheiro de volta
                </p>
              </div>
              <p className="text-sm text-gray-300 max-w-xl mb-6">
                Se não estiver satisfeito com as planilhas, entre em contato conosco dentro de 30 dias para obter o reembolso completo.
              </p>
              <a 
                href="https://pay.kiwify.com.br/QaaB4aO" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-modern text-lg px-8 py-4 inline-flex items-center gap-2"
              >
                Quero Garantir Meu Acesso
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
                    d="M13 7l5 5m0 0l-5 5m5-5H6"
                  />
                </svg>
              </a>
            </div>
        </div>
      </section>

        {/* Adiciona o botão do WhatsApp flutuante */}
        <FloatingWhatsApp />
      </main>
      <Footer />
    </>
  );
} 