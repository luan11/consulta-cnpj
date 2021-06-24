import styled from 'styled-components';

import { Fab } from '@material-ui/core';

export const StyledFab = styled(Fab)`
  position: absolute !important;
  bottom: ${({ theme }) => `${theme.spacing(10)}px`};
  right: ${({ theme }) => `${theme.spacing(5)}px`};
  background-color: ${({ theme }) => theme.palette.error.main} !important;
  color: ${({ theme }) => theme.palette.error.contrastText} !important;
`;
