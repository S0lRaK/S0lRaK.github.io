import preset, { Theme } from '@rebass/preset';
import 'styled-components';

declare module 'styled-components' {
  // eslint-disable-next-line
  export interface DefaultTheme extends Theme {}
}

const BASE_THEME = preset as Theme;

const theme: Theme = {
  ...BASE_THEME,
  colors: {
    background: '#000000',
    muted: '#5A1CA6',
    gray: '#333333',
    textLight: '#FFFFFF',
    textDark: '#000000',

    primary: '#F1EE58',
    secondary: '#A6A42D',
    highlight: '#FFFD78',
    accent: '#5A1CA6',
    accentLight: '#7C2AF7'
  },
  queries: {
    xs: '@media screen and (max-width: 40em)',
    sm: '@media screen and (min-width: 40em) and (max-width: 52em)',
    md: '@media screen and (min-width: 52em) and (max-width: 64em)',
    lg: '@media screen and (min-width: 64em)',
  },
  buttons: {
    empty: {
      p: 0,
      border: 0,
      m: 0,
      background: 'transparent',
    },
  },
  fonts: {
    body: 'Cabin, Open Sans, sans-serif',
    heading: 'inherit',
    monospace: 'monospace',
  },
};

export default theme;
