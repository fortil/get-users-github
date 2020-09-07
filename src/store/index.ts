import { createStore } from 'redux';
import { createEpicMiddleware } from 'redux-observable';

import reducersApp from './reducers';
import createMiddleware from './middlewares';
import rootEpic from './epics';

const epicMiddleware = createEpicMiddleware();

const store = createStore(
  reducersApp,
  createMiddleware([epicMiddleware])
);

epicMiddleware.run(rootEpic as any);

export default store;
