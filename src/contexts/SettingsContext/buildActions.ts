import * as actionTypes from './actionTypes';

interface DispatchProps {
  type: string;
  payload?: {};
}
type Dispatch = (props: DispatchProps) => void;

export const buildActions = (dispatch: Dispatch) => {
  return {
    updateSaveHistory: () =>
      dispatch({
        type: actionTypes.UPDATE_SAVE_HISTORY,
      }),
    updateSearchFields: (payload: {}) =>
      dispatch({
        type: actionTypes.UPDATE_SEARCH_FIELDS,
        payload,
      }),
  };
};
