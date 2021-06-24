import { ReactNode, useMemo } from 'react';

import useSettingsContext from '../../hooks/useSettingsContext';

import {
  createMuiTheme,
  ThemeProvider as MuiThemeProvider,
} from '@material-ui/core';

import { ThemeProvider } from 'styled-components';

interface ThemeProps {
  children: ReactNode;
}

export function Theme({ children }: ThemeProps) {
  const {
    state: { colorMode },
  } = useSettingsContext();

  const theme = useMemo(
    () =>
      createMuiTheme({
        palette: {
          type: colorMode.dark ? 'dark' : 'light',
          primary: {
            light: '#91E6AE',
            main: '#4DEA81',
            dark: '#25AD53',
          },
          secondary: {
            light: '#44AEE3',
            main: '#0094DE',
            dark: '#0072AD',
          },
        },
        typography: {
          fontFamily: 'Maven Pro',
        },
      }),
    [colorMode]
  );

  return (
    <MuiThemeProvider theme={theme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </MuiThemeProvider>
  );
}
