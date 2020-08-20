import { ADD_USERS, AppActions, IUser, REMOVE_USER } from './types';

export function addUsers(users: IUser[]): AppActions {
  return {
    type: ADD_USERS,
    payload: {
      users,
    },
  };
}

export function removeUser(userId: string): AppActions {
  return {
    type: REMOVE_USER,
    payload: {
      userId,
    },
  };
}
