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
    case actionTypes.UPDATE_SAVE_HISTORY:
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
