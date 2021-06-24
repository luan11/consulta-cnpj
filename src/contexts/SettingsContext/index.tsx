import { GetStaticProps } from 'next';
import { createContext, ReactNode, useEffect, useReducer, useRef } from 'react';

import { buildActions } from './buildActions';
import { reducer } from './reducer';

import { getLocalStorage } from '../../utils/getLocalStorage';
import { buildLocalStorage } from './../../utils/buildLocalStorage';
import { updateLocalStorage } from './../../utils/updateLocalStorage';

export interface SearchFields {
  situacao_cadastral: boolean;
  codigo_natureza_juridica: boolean;
  data_inicio_atividades: boolean;
  cnae: boolean;
  endereco: boolean;
  telefone: boolean;
  capital_social: boolean;
  porte: boolean;
}

export interface SettingsContextData {
  history: boolean;
  fields: SearchFields;
  colorMode: {
    light: boolean;
    dark: boolean;
  };
}

export const initialState: SettingsContextData = {
  history: true,
  fields: {
    situacao_cadastral: true,
    codigo_natureza_juridica: true,
    data_inicio_atividades: true,
    cnae: true,
    endereco: true,
    telefone: true,
    capital_social: true,
    porte: true,
  },
  colorMode: {
    light: true,
    dark: false,
  },
};

interface Actions {
  enableLightMode: () => void;
  enableDarkMode: () => void;
  toggleSaveHistory: () => void;
  updateSearchFields: (payload: {}) => void;
}

interface SettingsContextProps {
  state: SettingsContextData;
  actions: Actions;
}

export const SettingsContext = createContext({} as SettingsContextProps);

interface SettingsContextProviderProps {
  children: ReactNode;
}

export function SettingsContextProvider({
  children,
}: SettingsContextProviderProps) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const actions = useRef(buildActions(dispatch));

  useEffect(() => {
    const {
      enableLightMode,
      enableDarkMode,
      toggleSaveHistory,
      updateSearchFields,
    } = actions.current;

    buildLocalStorage({
      settings: initialState,
      history: [],
    });

    const { settings } = getLocalStorage();

    if (settings.colorMode.light) {
      enableLightMode();
    } else if (settings.colorMode.dark) {
      enableDarkMode();
    }

    if (!settings.history) {
      toggleSaveHistory();
    }

    updateSearchFields(settings.fields);
  }, []);

  useEffect(() => {
    updateLocalStorage({
      settings: state,
    });
  }, [state]);

  return (
    <SettingsContext.Provider
      value={{
        state,
        actions: actions.current,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
}
