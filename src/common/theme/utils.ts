import { DefaultTheme } from 'styled-components';

type GetterProps = {
  theme: DefaultTheme;
};
export const THEME_GETTER = ({ theme }: GetterProps) => theme;
