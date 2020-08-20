import { ADD_USERS, AppActions, IAppState, REMOVE_USER } from './types';

export const initialState: IAppState = {
  users: [],
};

export function appReducer(
  state = initialState,
  action: AppActions,
): IAppState {
  switch (action.type) {
    case ADD_USERS:
      return {
        ...state,
        users: [...action.payload.users],
      };
    case REMOVE_USER:
      return {
        ...state,
        users: state.users.filter(
          user => action.payload.userId !== user.userId,
        ),
      };
    default:
      return state;
  }
}
