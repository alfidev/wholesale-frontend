import { FC } from 'react';

export type RouteItem = {
  path: string;
  exact: boolean;
  component: FC;
};
