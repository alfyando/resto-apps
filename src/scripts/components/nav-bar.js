/* eslint-disable linebreak-style */
class Navbar extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <!-- Navigasi untuk Mobile -->
        <nav class="menumobile">
            <div aria-label="logo">Resto Apps</div>
                <div class="iconmenu" id="menu">
                    <button aria-label="button menu dropdown on mobile device" type="button">
                        <span class="fa fa-bars fa-lg"></span>
                    </button>
                </div>
            </div>
        </nav>
        <nav id="drawer" class="navmobile">
            <ul class="navlistmobile">
                <li class="navitemmobile"><a tabindex="0" href="#/">Home</a></li>
                <li class="navitemmobile"><a tabindex="0" href="#/favorite">Favorite</a></li>
                <li class="navitemmobile"><a tabindex="0" target="_blank" rel="noopener" href="https://www.linkedin.com/in/alfyandoo/">About Us</a></li>
            </ul>
        </nav> 
        <!-- Navigasi untuk Desktop -->
        <nav class="nav">
            <a class="logo" href="#/">Resto Apps</a>
            <ul class="navlist">
                <li class="navitem"><a tabindex="0" href="#/">Home</a></li>
                <li class="navitem"><a tabindex="0" href="#/favorite">Favorite</a></li>
                <li class="navitem"><a tabindex="0" target="_blank" rel="noopener" href="https://www.linkedin.com/in/alfyandoo/">About Us</a></li>
            </ul>
        </nav>
        `;
  }
}

customElements.define('nav-bar', Navbar);
