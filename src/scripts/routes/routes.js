import Home from '../views/pages/home';
import Detail from '../views/pages/details';
import Favorite from '../views/pages/favorites';

const routes = {
  '/': Home,
  '/home': Home,
  '/detail/:id': Detail,
  '/favorite': Favorite,
};

export default routes;
