import { ADD_USERS, AppActions, REMOVE_USER } from './types';

export function addUsers(users: string[]): AppActions {
  return {
    type: ADD_USERS,
    payload: {
      users,
    },
  };
}

export function removeUser(userName: string): AppActions {
  return {
    type: REMOVE_USER,
    payload: {
      userName,
    },
  };
}

// export function addMe
