import { createTheme } from '@mui/material';

export const theme = createTheme({
  palette: {
    primary: {
      main: '#0080ED',
      dark: '#004a8a',
      light: '#0083ED',
      100: '#0083EDFD',
    },
    secondary: {
      main: '#ffffff',
      100: '#fafafa',
      200: '#d3d3d3',
      300: '#eaeaf0',
      400: '#c3c3c3',
      500: '#D3D3D36A',
      600: '#ACB1C0',
      700: '#676767',
      800: '#707070',
      900: '#333333',
      dark: '#000000',
    },
    text: {
      primary: '#333333',
      secondary: '#7A7A7A',
    },
    action: {
      hover: '#004a8a',
      active: '#0EDB55',
    },
    error: {
      main: '#FF0000',
    },
    background: {
      default: '#FFF',
    },
  },
  typography: {
    fontFamily: 'Barlow',
    h1: {
      fontFamily: 'Barlow',
      fontSize: '60px',
      color: 'black',
    },
    h2: {
      fontFamily: 'Barlow',
      fontSize: '40px',
      fontWeight: 700,
    },
    h3: {
      fontFamily: 'Barlow',
      fontSize: '30px',
      fontWeight: 700,
    },
    h4: {
      fontFamily: 'Barlow',
      fontSize: '24px',
    },
    h5: {
      fontFamily: 'Barlow',
      fontWeight: 500,
      fontSize: '18px',
      lineHeight: 1,
    },
    h6: {
      fontFamily: 'Barlow',
      fontWeight: 400,
      fontSize: '14px',
    },
    body1: {
      fontFamily: 'Barlow',
      fontSize: '13px',
    },
    body2: {
      fontFamily: 'Barlow',
      fontSize: '10px',
      lineHeight: '22px',
      fontWeight: 500,
    },
    overline: {
      fontFamily: 'Barlow',
      fontSize: '13px',
    },
    subtitle1: {
      fontFamily: 'Barlow',
      fontSize: '10px',
    },
  },
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 900,
      lg: 1200,
      xl: 1536,
    },
  },
});
