import { combineReducers } from 'redux';
import { createReducer } from 'reduxsauce';
import { Types, UserTypes } from './actions';
import INITIAL_STATE from './initialState';

interface GenericAction<T = unknown> {
  type: keyof typeof UserTypes;
  user?: T;
}
export interface SetUserReducer {
  (state: typeof INITIAL_STATE, action: GenericAction<any>): typeof INITIAL_STATE;
}

const setUser: SetUserReducer = (state, { user }) => {
  if (user) {
    state.user = user;
  }
  return state;
};

const HANDLERS = {
  [Types.SET_USER]: setUser
};

const reducer = createReducer<typeof INITIAL_STATE>(INITIAL_STATE, HANDLERS);

const reducers = combineReducers({ API: reducer });

export type RootState = ReturnType<typeof reducers>;

export default reducers;
