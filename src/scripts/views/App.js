/* eslint-disable linebreak-style */
/* eslint-disable no-undef */
/* eslint-disable no-underscore-dangle */
import DrawerInitiator from '../utils/drawer-initiator';
import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import '../components/nav-bar';
import '../components/hero';
import 'lazysizes';
import 'lazysizes/plugins/parent-fit/ls.parent-fit';

class App {
  constructor({ button, drawer, content }) {
    this._button = button;
    this._drawer = drawer;
    this._content = content;

    this._initialAppShell();
  }

  _initialAppShell() {
    DrawerInitiator.init({
      button: this._button,
      drawer: this._drawer,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    this._content.innerHTML = await page.render();
    await page.afterRender();
    const skipContent = document.querySelector('#maincontent');
    skipContent.addEventListener('click', () => {
      docoument.querySelector('#maincontent').focus();
    });
  }
}

export default App;
