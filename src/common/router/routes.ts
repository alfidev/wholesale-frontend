import { RouteItem } from './types';
import { UserProfilePage } from '../../modules/UserProfile';

export const applicationRoutes: RouteItem[] = [
  {
    path: '/profile',
    exact: false,
    component: UserProfilePage,
  },
];
