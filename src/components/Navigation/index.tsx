import { ChangeEvent, useState } from 'react';
import { useRouter } from 'next/router';
import { NextLinkComposed } from '../Link';

import { BottomNavigationAction } from '@material-ui/core';
import { Search, History, Settings } from '@material-ui/icons';

import { StyledBottomNavigation } from './styles';

export function Navigation() {
  const router = useRouter();

  const [value, setValue] = useState(router.pathname);

  function handleChange(event: ChangeEvent, newValue: string) {
    setValue(newValue);
  }

  return (
    <StyledBottomNavigation onChange={handleChange} value={value}>
      <BottomNavigationAction
        label="Pesquisar"
        value="/"
        icon={<Search />}
        component={NextLinkComposed}
        to="/"
      />
      <BottomNavigationAction
        label="Histórico"
        value="/history"
        icon={<History />}
        component={NextLinkComposed}
        to="/history"
      />
      <BottomNavigationAction
        label="Configurações"
        value="/settings"
        icon={<Settings />}
        component={NextLinkComposed}
        to="/settings"
      />
    </StyledBottomNavigation>
  );
}
