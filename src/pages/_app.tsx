import { AppProps } from 'next/app';
import { useEffect } from 'react';
import { initializeFacebookAds } from '@/lib/facebook-pixel';

function MyApp({ Component, pageProps }: AppProps) {
  useEffect(() => {
    initializeFacebookAds();
  }, []);

  return <Component {...pageProps} />;
}

export default MyApp; 