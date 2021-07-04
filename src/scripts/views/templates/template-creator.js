/* eslint-disable linebreak-style */
/* eslint-disable no-use-before-define */
import CONFIG from '../../global/config';

const createRestoDetailTemplate = (result) => `
  <h1 class="explore">Detail of ${result.name}</h1>
  <img class="detail_poster" height="400px" width="100%" src="${CONFIG.BASE_IMAGE_URL}medium/${result.pictureId}" alt="restoran ${result.name}">
  <div class="detail_info">
    <h2><i class="fa fa-map-marker fa-md" aria-hidden="true"></i><span class="color" aria-label="address at ${result.address}, ${result.city}"> ${result.address}, ${result.city}</span></h2>
    <h2><i class="fa fa-list-alt fa-md" aria-hidden="true"></i><span class="color" aria-label="categories"> ${result.categories.map((category) => `<span class=""> ${category.name}</span>`).join('')}</span></h2>
    <h2><i class="fa fa-star fa-md"> </i><span class="color" aria-label="rating"> ${result.rating}</span></h2>
    <h2>Description</h2>
    <p>${result.description}</p>
    <h2>Menu</h2>
    <div class="menulist">
      <div class="detail_food">
        <h3>Makanan</h3>
        ${result.menus.foods.map((food) => `<ul><li style="list-style:none;">${food.name}</li></ul>`).join('')}
      </div>
      <div class="detail_drink">
        <h3>Minuman</h3>
        ${result.menus.drinks.map((drink) => `<ul><li style="list-style:none;">${drink.name}</li></ul>`).join('')}
      </div>
    </div>
    <h2>Reviews (${result.customerReviews.length})</h2>
    <div class="detail_review">
    ${createReviewCard(result.customerReviews)}
    </div>
  </div>
`;

const createSkeletonTemplate = (count) => {
  let template = '';

  for (let i = 0; i < count; i += 1) {
    template += `
      <div class="card">
      <img class="card_item_img" width="100%" height="200px" src="./placeholder.svg" alt="skeleton">
      <div class="card_item_content">
        <h2 class="skeleton">Lorem ipsum dolor sit.</a></h2>
        <p class="skeleton"></p>
        <div class="card_item_desc">Lorem ipsum dolor sit amet, consectetur adipisicing elit. A adipisci alias aspernatur, assumenda aut consectetur consequuntur debitis deleniti dicta dolorem dolorum eos exercitationem labore laboriosam magni nihil, nobis obcaecati optio perspiciatis placeat qui recusandae saepe sapiente sequi totam ullam ut.</div>
      </div>
      </div>
  `;
  }
  return template;
};

const createRestoItemTemplate = (result) => `
    <div class="card">
    <img class="lazyload card_item_img" src="./placeholder.svg" height="200px" width="100%" data-src="${CONFIG.BASE_IMAGE_URL}small/${result.pictureId}" alt="${result.name}" title="${result.name}">
    <div class="city">${result.city}</div>
    <div class="card_item_content">
        <h2 class="card_item_title"><a tabindex="0" href="${`/#/detail/${result.id}`}">${result.name}</a></h2>
        <p class="card_item_rating">
            Rating : <span class="fa fa-star"> </span>
            <span class="card_item_rating_value" aria-label="rating ${result.rating}">${result.rating}</span>
        </p>
        <div class="card_item_desc">${result.description}</div>
    </div>
    </div>
`;

const createLikeRestaurantButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
     <i class="fa fa-heart-o fa-lg" aria-hidden="true"></i>
  </button>
`;

const createUnlikeRestaurantButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart fa-lg" aria-hidden="true"></i>
  </button>
`;

const createEmptyFavorite = () => `
  <div class="empty_container">
    <h3>Sorry...</h3>
    <p class="empty_subtitle">You didn't added any restaurants yet</p>
    <a href="/">Add Restaurant</a>
  </div>
`;

const createReviewCard = (data) => {
  let customerReview = '';
  data.forEach((review) => {
    customerReview += `
        <div class="detail_review_item">
          <div class="review_header">
            <p class="review_name">${review.name}</p>
            <p class="review_date">${review.date}</p>
          </div>
          <div class="review_body">
          "${review.review}"
          </div>
        </div>     
      `;
  });
  return customerReview;
};

const loader = () => `
  <div class="loader"></div>
`;

export {
  createRestoItemTemplate,
  createSkeletonTemplate,
  createRestoDetailTemplate,
  createLikeRestaurantButtonTemplate,
  createUnlikeRestaurantButtonTemplate,
  createEmptyFavorite,
  createReviewCard,
  loader,
};
