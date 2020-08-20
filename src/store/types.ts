export interface IUser {
  userId: string;
  userName: string;
}

export interface IChatMessage {
  id: string;
  chat: string;
}

export interface IAppState {
  users: IUser[];
}

export const ADD_USERS = 'ADD_USERS';
export const REMOVE_USER = 'REMOVE_USER';

interface AddUsersAction {
  type: typeof ADD_USERS;
  payload: {
    users: IUser[];
  };
}

interface RemoveUserAction {
  type: typeof REMOVE_USER;
  payload: {
    userId: string;
  };
}

export type AppActions = AddUsersAction | RemoveUserAction;
