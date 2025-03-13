export const FB_PIXEL_ID = '623770760410420';

declare global {
  interface Window {
    fbq: any;
  }
}

export const pageview = () => {
  window.fbq('track', 'PageView');
};

export const event = (name: string, options = {}) => {
  window.fbq('track', name, options);
};

export const initializeFacebookAds = () => {
  const token = 'EAARosmjljAMBO3iLjwb5aHbfWpObOGAW3tCcMNqLkS8bMnP3U93dKSh7TlCQh0TET2uLEs7pQ7hWdpc2vjTAAabnIHE1rc1Ka9FPU79GZBN73ixL56svMQzKwHhZB9X8TysR0I7Pk9y9qKlI1XNDyHeWGND6Y3gWmDn3pVo2SbsnOZAsNhV4243ULjhdwycgQZDZD';
  
  if (typeof window !== 'undefined') {
    window.fbq = function() {
      // @ts-ignore
      window.fbq.callMethod ? window.fbq.callMethod.apply(window.fbq, arguments) : window.fbq.queue.push(arguments);
    };
    
    if (!window.fbq) window.fbq = function() {};
    window.fbq.push = window.fbq;
    window.fbq.loaded = true;
    window.fbq.version = '2.0';
    window.fbq.queue = [];
    
    window.fbq('init', FB_PIXEL_ID, { external_id: token });
    window.fbq('track', 'PageView');
  }
}; 