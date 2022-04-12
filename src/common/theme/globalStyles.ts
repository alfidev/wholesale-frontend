import { createGlobalStyle } from 'styled-components';

import RobotoThin from '../../assets/fonts/Roboto-Thin.woff';
import RobotoLight from '../../assets/fonts/Roboto-Light.woff';
import RobotoRegular from '../../assets/fonts/Roboto-Regular.woff';
import RobotoMedium from '../../assets/fonts/Roboto-Medium.woff';
import RobotoBold from '../../assets/fonts/Roboto-Bold.woff';
import RobotoBlack from '../../assets/fonts/Roboto-Black.woff';
import RobotoItalic from '../../assets/fonts/Roboto-Italic.woff';

export const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: "Roboto";
    src: url(${RobotoThin}) format("woff");
    font-weight: 100;
    font-style: normal; }

  @font-face {
    font-family: "Roboto";
    src: url(${RobotoLight}) format("woff");
    font-weight: 300;
    font-style: normal; }

  @font-face {
    font-family: "Roboto";
    src: url(${RobotoRegular}) format("woff");
    font-weight: 400;
    font-style: normal; }

  @font-face {
    font-family: "Roboto";
    src: url(${RobotoMedium}) format("woff");
    font-weight: 500;
    font-style: normal; }

  @font-face {
    font-family: "Roboto";
    src: url(${RobotoBold}) format("woff");
    font-weight: 700;
    font-style: normal; }

  @font-face {
    font-family: "Roboto";
    src: url(${RobotoBlack}) format("woff");
    font-weight: 900;
    font-style: normal; }

  @font-face {
    font-family: "Roboto";
    src: url(${RobotoItalic}) format("woff");
    font-weight: 500;
    font-style: italic; }
  
  body {
    background-color: ${({ theme }) => theme.background.body};
    margin: 0;
    padding: 0;
    font-family: Roboto;
  }
  
  * {
    box-sizing: border-box;
  }
`;
