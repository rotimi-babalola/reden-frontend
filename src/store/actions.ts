import { ADD_NEW_USER, AppActions, IUser } from './types';

export function addUser(user: IUser): AppActions {
  return {
    type: ADD_NEW_USER,
    payload: {
      user,
    },
  };
}
