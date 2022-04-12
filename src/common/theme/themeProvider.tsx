import React from 'react';
import { ReactNode } from 'react';
import { lightTheme } from './palette';
import { GlobalStyles } from './globalStyles';
import { ThemeProvider as StyledComponentsThemeProvider } from 'styled-components';

type Props = {
  children: ReactNode;
};

export const ThemeProvider = ({ children }: Props) => {
  return (
    <StyledComponentsThemeProvider theme={lightTheme}>
      <GlobalStyles />
      {children}
    </StyledComponentsThemeProvider>
  );
};
