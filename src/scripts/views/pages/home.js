/* eslint-disable linebreak-style */
import RestaurantSource from '../../data/resto-source';
import { createSkeletonTemplate, createRestoItemTemplate, loader } from '../templates/template-creator';

const Home = {
  async render() {
    return `
      <div class="load"></div>
      <article class="content">
        <h1 class="explore">Restaurant List</h1>
        <div class="list" id="dataCard">
          ${createSkeletonTemplate(20)}
        </div>
      </article>
    `;
  },
  async afterRender() {
    const load = document.querySelector('.load');
    const content = document.querySelector('.content');
    const restaurantContainer = document.querySelector('#dataCard');
    content.style.display = 'none';
    load.innerHTML = loader();
    try {
      const restaurant = await RestaurantSource.getRestaurantList();
      restaurantContainer.innerHTML = '';
      restaurant.forEach((resto) => {
        restaurantContainer.innerHTML += createRestoItemTemplate(resto);
      });
      content.style.display = 'block';
      load.style.display = 'none';
    } catch (err) {
      content.style.display = 'block';
      load.style.display = 'none';
      content.innerHTML = `<b>Error:</b> ${err}`;
    }
  },
};

export default Home;
