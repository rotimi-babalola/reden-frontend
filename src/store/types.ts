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

export const ADD_NEW_USER = 'ADD_NEW_USER';

interface AddNewUserAction {
  type: typeof ADD_NEW_USER;
  payload: {
    user: IUser;
  };
}

export type AppActions = AddNewUserAction;
