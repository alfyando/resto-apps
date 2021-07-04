/* eslint-disable linebreak-style */
import 'regenerator-runtime';
import '../styles/main.css';
import '../styles/detail.css';
import '../styles/responsive.css';
import App from './views/App';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#drawer'),
  content: document.querySelector('main'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});
