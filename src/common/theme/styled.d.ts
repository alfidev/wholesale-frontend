import 'styled-components';

// and extend them!
declare module 'styled-components' {
  export interface DefaultTheme {
    background: {
      body: string;
      contrast: string;
      primary: string;
      secondary: string;
    };
    text: {
      primary: string;
      secondary: string;
      tertiary: string;
    };
  }
}
