import { ThemeProvider, CssBaseline } from '@mui/material';
import { AppProps } from 'next/app';
import { theme } from '@/presentation/styles/theme';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
