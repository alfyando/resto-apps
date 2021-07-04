/* eslint-disable linebreak-style */
import FavoriteRestoIdb from '../../data/fav-ibd';
import { createRestoItemTemplate, createEmptyFavorite, loader } from '../templates/template-creator';

const Favorite = {
  async render() {
    return `
      <div class="load"></div>
      <article class="content">
        <h1 class="explore">Your Favorite Restaurant</h1>
        <div class="list" id="dataCard"></div>
      </article>
    `;
  },

  async afterRender() {
    const resto = await FavoriteRestoIdb.getAllResto();
    const load = document.querySelector('.load');
    const content = document.querySelector('.content');
    const restoContainer = document.querySelector('#dataCard');
    content.style.display = 'none';
    load.innerHTML = loader();
    if (resto.length === 0) {
      content.innerHTML += createEmptyFavorite();
      content.style.display = 'block';
      load.style.display = 'none';
    } else {
      try {
        resto.forEach((newResto) => {
          restoContainer.innerHTML += createRestoItemTemplate(newResto);
        });
        content.style.display = 'block';
        load.style.display = 'none';
      } catch (err) {
        content.style.display = 'block';
        load.style.display = 'none';
        content.innerHTML = `<b>Error:</b> ${err}`;
      }
    }
  },
};

export default Favorite;
