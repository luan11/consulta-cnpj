import { useContext } from 'react';

import { SettingsContext } from './../../contexts/SettingsContext';

function useSettingsContext() {
  const context = useContext(SettingsContext);

  if (typeof context === 'undefined') {
    throw new Error(
      'You have to use useSettingsContext inside <SettingsContextProvider />'
    );
  }

  return { ...context };
}

export default useSettingsContext;
