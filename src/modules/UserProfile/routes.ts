import {
  ROUTE_PROFILE_FIN,
  ROUTE_PROFILE_MAIN,
  ROUTE_PROFILE_NOTIFICATIONS,
  ROUTE_PROFILE_SECURITY,
} from './constants';

export const routes = [
  {
    title: 'Основное',
    path: ROUTE_PROFILE_MAIN,
    exact: true,
  },
  {
    title: 'Финансы',
    path: ROUTE_PROFILE_FIN,
    exact: false,
  },
  {
    title: 'Безопасность',
    path: ROUTE_PROFILE_SECURITY,
    exact: false,
  },
  {
    title: 'Оповещения',
    path: ROUTE_PROFILE_NOTIFICATIONS,
    exact: false,
  },
];
