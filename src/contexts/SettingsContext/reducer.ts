import { SearchFields, SettingsContextData } from '.';
import * as actionTypes from './actionTypes';

interface UpdateData {
  history?: boolean;
  fields?: SearchFields;
}
interface ActionProps {
  type: string;
  payload?: UpdateData;
}

export function reducer(
  state: SettingsContextData,
  { type, payload }: ActionProps
) {
  switch (type) {
    case actionTypes.ENABLE_LIGHT_MODE:
      return {
        ...state,
        ...{
          colorMode: {
            light: true,
            dark: false,
          },
        },
      };

    case actionTypes.ENABLE_DARK_MODE:
      return {
        ...state,
        ...{
          colorMode: {
            light: false,
            dark: true,
          },
        },
      };

    case actionTypes.TOGGLE_SAVE_HISTORY:
      return {
        ...state,
        ...{
          history: !state.history,
        },
      };

    case actionTypes.UPDATE_SEARCH_FIELDS:
      return {
        ...state,
        ...{
          fields: {
            ...state.fields,
            ...payload,
          },
        },
      };
  }

  return state;
}
