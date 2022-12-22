import RestaurantSource from '../../data/restaurant-source';
import { createRestaurantItemTemplate } from '../templates/template-creator';

const Home = {
  async render() {
    return `
        <div class="latest">
            <div class="list" id="restLists"></div>
        </div>
    </section>
</main>`;
  },

  async afterRender() {
    const restaurants = await RestaurantSource.getRestaurantList();
    const restaurantListContainer = document.querySelector('#restLists');
    restaurants.forEach((restaurant) => {
      restaurantListContainer.innerHTML += createRestaurantItemTemplate(restaurant);
    });
  },
};

export default Home;
