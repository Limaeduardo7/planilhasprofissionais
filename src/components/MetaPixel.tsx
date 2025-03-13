'use client';

import { useEffect } from 'react';

declare global {
  interface Window {
    fbq: any;
    _fbq: any;
  }
}

export default function MetaPixel() {
  useEffect(() => {
    // Inicialização do Meta Pixel
    if (typeof window !== 'undefined') {
      // Código separado para evitar erros de tipagem
      const metaPixelScript = `
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
      `;
      
      // Criar e executar o script
      const script = document.createElement('script');
      script.innerHTML = metaPixelScript;
      document.head.appendChild(script);
    }
  }, []);

  return (
    <>
      <noscript>
        <img 
          height="1" 
          width="1" 
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=623770760410420&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>
    </>
  );
} 