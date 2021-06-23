import { createMuiTheme } from '@material-ui/core';

const theme = createMuiTheme({
  palette: {
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
});

export default theme;
