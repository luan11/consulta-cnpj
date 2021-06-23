import { createContext, ReactNode, useReducer, useRef } from 'react';

import { buildActions } from './buildActions';
import { reducer } from './reducer';

export interface SearchFields {
  razao_social: boolean;
  nome_fantasia: boolean;
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
}

export const initialState: SettingsContextData = {
  history: true,
  fields: {
    razao_social: true,
    nome_fantasia: true,
    situacao_cadastral: true,
    codigo_natureza_juridica: true,
    data_inicio_atividades: true,
    cnae: true,
    endereco: true,
    telefone: true,
    capital_social: true,
    porte: true,
  },
};

interface Actions {
  updateSaveHistory: () => void;
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
