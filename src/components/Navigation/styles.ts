import styled from 'styled-components';

import { BottomNavigation } from '@material-ui/core';

export const StyledBottomNavigation = styled(BottomNavigation)`
  border-top: 4px solid ${({ theme }) => theme.palette.primary.main};
`;
