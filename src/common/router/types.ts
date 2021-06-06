import { ReactNode } from 'react';

export type RouterItem = {
  path: string;
  exact: boolean;
  component: ReactNode;
};
