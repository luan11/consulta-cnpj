import styled from 'styled-components';

import { Typography } from '@material-ui/core';

export const StyledTypography = styled(Typography)`
  > b {
    color: ${({ theme }) => theme.palette.primary.light};
  }
`;
