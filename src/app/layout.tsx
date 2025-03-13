import './globals.css';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import Script from 'next/script';
import MetaPixel from '@/components/MetaPixel';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: 'Kit Fluxo de Caixa 4.0 | Planilhas Profissionais para Gestão Financeira',
  description: 'Kit completo de planilhas profissionais para gestão financeira. Inclui fluxo de caixa, DRE, controle de estoque e muito mais. Acesso vitalício e suporte técnico.',
  keywords: 'fluxo de caixa, planilhas financeiras, gestão financeira, controle financeiro, planilhas profissionais, DRE, controle de estoque',
  authors: [{ name: 'Kit Fluxo de Caixa 4.0' }],
  creator: 'Kit Fluxo de Caixa 4.0',
  publisher: 'Kit Fluxo de Caixa 4.0',
  openGraph: {
    type: 'website',
    locale: 'pt_BR',
    url: 'https://kitfluxodecaixa.com.br',
    title: 'Kit Fluxo de Caixa 4.0 | Planilhas Profissionais para Gestão Financeira',
    description: 'Kit completo de planilhas profissionais para gestão financeira. Inclui fluxo de caixa, DRE, controle de estoque e muito mais.',
    siteName: 'Kit Fluxo de Caixa 4.0',
    images: [
      {
        url: 'https://i.imgur.com/UWNIXdv.png',
        width: 1200,
        height: 630,
        alt: 'Kit Fluxo de Caixa 4.0',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Kit Fluxo de Caixa 4.0 | Planilhas Profissionais',
    description: 'Kit completo de planilhas profissionais para gestão financeira.',
    images: ['https://i.imgur.com/UWNIXdv.png'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'adicione_seu_codigo_de_verificacao',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://kitfluxodecaixa.com.br" />
        <link rel="icon" type="image/png" href="https://i.imgur.com/vidEXH1.png" />
        <meta name="theme-color" content="#8A3AB9" />
        {/* Meta Pixel Code (alternativa com Script) */}
        <Script id="facebook-pixel" strategy="afterInteractive">
          {`
            !function(f,b,e,v,n,t,s)
            {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
            n.callMethod.apply(n,arguments):n.queue.push(arguments)};
            if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
            n.queue=[];t=b.createElement(e);t.async=!0;
            t.src=v;s=b.getElementsByTagName(e)[0];
            s.parentNode.insertBefore(t,s)}(window, document,'script',
            'https://connect.facebook.net/en_US/fbevents.js');
            fbq('init', '623770760410420');
            fbq('track', 'PageView');
          `}
        </Script>
      </head>
      <body className={`${inter.className} bg-dark text-white`}>
        {/* Meta Pixel componente (abordagem alternativa com useEffect) */}
        <MetaPixel />
        {children}
      </body>
    </html>
  );
} 