import NoSsr from '@material-ui/core/NoSsr';
import { ThemeProvider } from 'styled-components';
import { ThemeProvider as MuiThemeProvider } from '@material-ui/core';
import theme from './../themes/theme';

import { Navigation } from './../components/Navigation';
import { Header } from './../components/Header';

import '../styles/globals.css';

import { AppContainer } from './../styles/pages/_app';

function MyApp({ Component, pageProps }) {
  return (
    <NoSsr>
      <MuiThemeProvider theme={theme}>
        <ThemeProvider theme={theme}>
          <AppContainer>
            <Header />

            <main>
              <Component {...pageProps} />
            </main>

            <Navigation />
          </AppContainer>
        </ThemeProvider>
      </MuiThemeProvider>
    </NoSsr>
  );
}

export default MyApp;