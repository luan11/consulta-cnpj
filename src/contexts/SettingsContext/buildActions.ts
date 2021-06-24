import * as actionTypes from './actionTypes';

interface DispatchProps {
  type: string;
  payload?: {};
}
type Dispatch = (props: DispatchProps) => void;

export const buildActions = (dispatch: Dispatch) => {
  return {
    enableLightMode: () =>
      dispatch({
        type: actionTypes.ENABLE_LIGHT_MODE,
      }),
    enableDarkMode: () =>
      dispatch({
        type: actionTypes.ENABLE_DARK_MODE,
      }),
    toggleSaveHistory: () =>
      dispatch({
        type: actionTypes.TOGGLE_SAVE_HISTORY,
      }),
    updateSearchFields: (payload: {}) =>
      dispatch({
        type: actionTypes.UPDATE_SEARCH_FIELDS,
        payload,
      }),
  };
};
