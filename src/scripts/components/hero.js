/* eslint-disable linebreak-style */
class Hero extends HTMLElement {
  connectedCallback() {
    this.render();
  }

  render() {
    this.innerHTML = `
        <!-- Hero -->
        <div class="hero">
          <div class="herotext">
              <h1>Resto Apps</h1>
              <h2>don't forget to pray before and after eating!</h2>
          </div>
        </div>
    `;
  }
}

customElements.define('hero-img', Hero);
