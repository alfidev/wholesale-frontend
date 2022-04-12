const breakpoints = {
  mobile: 320,
  tablet: 768,
  desktopS: 1024,
  desktopM: 1200,
  desktopL: 1400,
};
export const adaptive = {
  minWidth: {
    mobile: '@media only screen and (min-width: ' + breakpoints.mobile + 'px)',
    tablet: '@media only screen and (min-width: ' + breakpoints.tablet + 'px)',
    desktopS: '@media only screen and (min-width: ' + breakpoints.desktopS + 'px)',
    desktopM: '@media only screen and (min-width: ' + breakpoints.desktopM + 'px)',
    desktopL: '@media only screen and (min-width: ' + breakpoints.desktopL + 'px)',
  },
  maxWidth: {
    mobile: '@media only screen and (max-width: ' + (breakpoints.tablet - 1) + 'px)',
    tablet: '@media only screen and (max-width: ' + (breakpoints.desktopS - 1) + 'px)',
    desktopS: '@media only screen and (max-width: ' + (breakpoints.desktopM - 1) + 'px)',
    desktopM: '@media only screen and (max-width: ' + (breakpoints.desktopL - 1) + 'px)',
  },
};
