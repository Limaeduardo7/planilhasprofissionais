/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export', // Habilita a exportação estática
  images: {
    unoptimized: true, // Necessário para exportação estática
  },
  // Se o repositório for implantado em um subdiretório do domínio
  // basePath: '/nome-do-repositorio',
};

module.exports = nextConfig; 