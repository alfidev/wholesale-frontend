import { FC } from 'react';

export type RouteItem = {
  path: string;
  exact: boolean;
  inMenu: boolean;
  component: FC;
  sidebarComponent?: FC;
  footerComponent?: FC;
  title: string;
  menu?: RouteSubItem[];
};

export type RouteSubItem = {
  path: string;
  exact: boolean;
  title: string;
};
