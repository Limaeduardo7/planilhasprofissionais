/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  images: {
    domains: ['i.imgur.com'],
    unoptimized: true,
  },
  // Adicionar um prefixo de ativos para o GitHub Pages, comentado inicialmente
  // assetPrefix: '/planilhasprofissionais/',
  // basePath: '/planilhasprofissionais',
  output: 'export',
  // Desabilitar a geração de arquivos de API no build estático
  experimental: {
    appDir: false,
  },
}

module.exports = nextConfig; 