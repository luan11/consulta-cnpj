import { Theme } from './../components/Theme';
import { Navigation } from './../components/Navigation';
import { Header } from './../components/Header';

import '../styles/globals.css';

import { AppContainer } from './../styles/pages/_app';

import { SettingsContextProvider } from './../contexts/SettingsContext';

function MyApp({ Component, pageProps }) {
  return (
    <SettingsContextProvider>
      <Theme>
        <AppContainer>
          <Header />

          <main>
            <Component {...pageProps} />
          </main>

          <Navigation />
        </AppContainer>
      </Theme>
    </SettingsContextProvider>
  );
}

export default MyApp;
