import { createActions } from 'reduxsauce';
import { Action } from 'redux';

export enum UserTypes {
  GET_USER = 'GET_USER',
  SET_USER = 'SET_USER',
  USERS = 'USERS'
}

interface ActionsGeneric<T, X = null, Y = null> extends Action {
  type: T;
  userName?: X;
  user?: Y;
}

export interface IActions {
  getUser: (userName: string) => ActionsGeneric<UserTypes.GET_USER, typeof userName>;
  setUser: (user: any) => ActionsGeneric<UserTypes.GET_USER, undefined, typeof user>;
}

export const { Types, Creators } = createActions<Record<keyof typeof UserTypes, string>, IActions>({
  getUser: ['userName'],
  setUser: ['user'],
});

export default Creators;
