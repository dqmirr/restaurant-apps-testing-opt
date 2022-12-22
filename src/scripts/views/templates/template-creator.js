import CONFIG from '../../globals/config';

const createFavoriteRestaurantItemTemplate = (restaurant) => `
<div class="list_item_favorite">
            <img class="list_item_thumb" src="${CONFIG.BASE_IMG_URL}/${restaurant.pictureId}" alt="${restaurant.name}" title="${restaurant.name}">
            <div class="city">${restaurant.city}</div>
            <div class="list_item_content">
                <p class="list_item_rating">
                    RATING : 
                    <a href="#" class="list_item_rating_value">${restaurant.rating}</a>
                </p>
                <h1 class="list_item_title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h1>
                <div class="list_item_desc">${restaurant.description.slice(0, 150)}...</div>
            </div>
        </div>
`;

const createRestaurantItemTemplate = (restaurant) => `
<div class="list_item">
<picture>
              <source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}">
              <img class="lazyload" data-src="${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId}" alt="${restaurant.name}">
            </picture>
<div class="city">${restaurant.city}</div>
<div class="list_item_content">
    <p class="list_item_rating">
        RATING : 
        <a href="#" class="list_item_rating_value">${restaurant.rating}</a>
    </p>
    <h1 class="list_item_title"><a href="${`/#/detail/${restaurant.id}`}">${restaurant.name}</a></h1>
    <div class="list_item_desc">${restaurant.description.slice(0, 150)}...</div>
</div>
</div>
`;

const createRestaurantDetailTemplate = (restaurant) => `
  <h2 class="restaurant__title">${restaurant.name}</h2>
  <picture>
                      <source media="(max-width: 600px)" srcset="${CONFIG.BASE_IMAGE_URL_SMALL + restaurant.pictureId}">
                      <img src="${CONFIG.BASE_IMAGE_URL_LARGE + restaurant.pictureId}" alt="${restaurant.name}">
                    </picture>
  <div class="restaurant__info">
  <h3>Information</h3>
  <h4>Address</h4>
  <p>${restaurant.address} , Kota ${restaurant.city}</p>
  <h4>Rating</h4>
  <p>${restaurant.rating}</p>
  <h4>Categories</h4>
  <p>${restaurant.categories.map((category) => category.name).join(' | ')}</p>
  <h4>Foods</h4>
  <p>${restaurant.menus.foods.map((food) => food.name).join(' | ')}</p>
  <h4>Drinks</h4>
  <p>${restaurant.menus.drinks.map((drink) => drink.name).join(' | ')}</p>
</div>
<div class="restaurant__description">
<h3>Description</h3>
<p>${restaurant.description}</p>
</div>
<div class="restaurant__description">
<h3>Customer Reviews</h3>
<p>${restaurant.customerReviews.map((customer) => customer.review).join(' | ')}</p>
</div>
`;

const createLikeButtonTemplate = () => `
  <button aria-label="like this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart-o" aria-hidden="true"></i>
  </button>
`;

const createLikedButtonTemplate = () => `
  <button aria-label="unlike this restaurant" id="likeButton" class="like">
    <i class="fa fa-heart" aria-hidden="true"></i>
  </button>
`;

export {
  createFavoriteRestaurantItemTemplate,
  createRestaurantItemTemplate,
  createRestaurantDetailTemplate,
  createLikeButtonTemplate,
  createLikedButtonTemplate,
};
