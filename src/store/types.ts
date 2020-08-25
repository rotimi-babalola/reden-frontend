export interface IUser {
  userName: string;
}

export interface IChatMessage {
  id: string;
  message: string;
  userName: string;
}

export interface IAppState {
  users: string[];
  chats: IChatMessage[];
}

export const ADD_USERS = 'ADD_USERS';
export const REMOVE_USER = 'REMOVE_USER';
export const SEND_MESSAGE = 'SEND_MESSAGE';

interface AddUsersAction {
  type: typeof ADD_USERS;
  payload: {
    users: string[];
  };
}

interface RemoveUserAction {
  type: typeof REMOVE_USER;
  payload: {
    userName: string;
  };
}

interface SendMessageAction {
  type: typeof SEND_MESSAGE;
  payload: {
    id: string;
    message: string;
    username: string;
  };
}

export type AppActions = AddUsersAction | RemoveUserAction | SendMessageAction;
