import { RouteItem } from './types';
import { UserProfilePage, routes as userProfileRoutes } from '../../modules/UserProfile';
import { ROUTE_BASKETS, ROUTE_CATALOG, ROUTE_HISTORY, ROUTE_MAIN, ROUTE_PROFILE } from './constants';

export const applicationRoutes: RouteItem[] = [
  {
    title: 'Главная',
    path: ROUTE_MAIN,
    exact: true,
    inMenu: true,
    component: UserProfilePage,
  },
  {
    title: 'Каталог',
    path: ROUTE_CATALOG,
    exact: false,
    inMenu: true,
    component: UserProfilePage,
  },
  {
    title: 'Корзины',
    path: ROUTE_BASKETS,
    exact: false,
    inMenu: true,
    component: UserProfilePage,
  },
  {
    title: 'История',
    path: ROUTE_HISTORY,
    exact: false,
    inMenu: true,
    component: UserProfilePage,
  },
  {
    title: 'Профиль',
    path: ROUTE_PROFILE,
    exact: false,
    inMenu: true,
    component: UserProfilePage,
    menu: userProfileRoutes,
  },
];
