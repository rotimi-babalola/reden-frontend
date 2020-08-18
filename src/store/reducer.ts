import { ADD_NEW_USER, AppActions, IAppState } from './types';

export const initialState: IAppState = {
  users: [],
};

export function appReducer(
  state = initialState,
  action: AppActions,
): IAppState {
  switch (action.type) {
    case ADD_NEW_USER:
      return {
        ...state,
        users: [...state.users, action.payload.user],
      };
    default:
      return state;
  }
}
