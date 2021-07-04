/* eslint-disable linebreak-style */
/* eslint-disable no-console */
import { Workbox } from 'workbox-window';

const swRegister = () => {
  if ('serviceWorker' in navigator) {
    const wb = new Workbox('./sw.js');

    wb.addEventListener('waiting', () => {
      console.log('Service Worker has installed');
    });

    wb.addEventListener('activated', (event) => {
      if (!event.isUpdate) {
        console.log('sw activated');
      }
    });

    wb.register();
  }
};

export default swRegister;
