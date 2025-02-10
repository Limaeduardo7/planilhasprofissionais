# Planilhas Profissionais

Site moderno desenvolvido com Next.js, React e Tailwind CSS para apresentação e venda de planilhas profissionais.

## Tecnologias Utilizadas

- Next.js 14
- React 18
- TypeScript
- Tailwind CSS
- @tailwindcss/aspect-ratio

## Pré-requisitos

- Node.js 18.17 ou superior
- npm ou yarn

## Instalação

1. Clone o repositório:
```bash
git clone https://github.com/seu-usuario/planilhas-profissionais.git
cd planilhas-profissionais
```

2. Instale as dependências:
```bash
npm install
# ou
yarn install
```

3. Adicione um vídeo de fundo:
- Coloque seu vídeo de fundo na pasta `public/videos/`
- Renomeie para `hero-background.mp4`

## Desenvolvimento

Para iniciar o servidor de desenvolvimento:

```bash
npm run dev
# ou
yarn dev
```

Abra [http://localhost:3000](http://localhost:3000) no seu navegador para ver o resultado.

## Build

Para criar uma versão de produção:

```bash
npm run build
# ou
yarn build
```

Para iniciar a versão de produção:

```bash
npm start
# ou
yarn start
```

## Estrutura do Projeto

```
planilhas-profissionais/
├── public/
│   └── videos/
│       └── hero-background.mp4
├── src/
│   ├── app/
│   │   ├── layout.tsx
│   │   └── page.tsx
│   └── components/
│       ├── layout/
│       │   ├── Header.tsx
│       │   └── Footer.tsx
│       └── home/
│           └── Hero.tsx
├── package.json
├── tailwind.config.ts
└── README.md
```

## Personalização

- Para alterar cores, fontes e outros estilos, edite o arquivo `tailwind.config.ts`
- Para modificar o conteúdo, edite os componentes em `src/components/`
- Para adicionar novas páginas, crie arquivos na pasta `src/app/`

## Contribuição

1. Faça um Fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## Licença

Este projeto está sob a licença MIT. Veja o arquivo `LICENSE` para mais detalhes. 