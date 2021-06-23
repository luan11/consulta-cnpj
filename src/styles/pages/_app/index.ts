import styled from 'styled-components';

export const AppContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;

  > main {
    flex-grow: 1;
    max-height: calc(100vh - 60px);
    overflow-y: auto;
    background-color: ${({ theme }) => theme.palette.grey[50]};
  }
`;