import { AppBar, Toolbar, Container } from '@material-ui/core';

import { StyledTypography } from './styles';

export function Header() {
  return (
    <AppBar position="sticky" color="secondary">
      <Toolbar component={Container}>
        <StyledTypography variant="h5">
          Consulta <b>CNPJ</b>
        </StyledTypography>
      </Toolbar>
    </AppBar>
  );
}
