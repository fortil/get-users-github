/* eslint-disable no-underscore-dangle */
import { applyMiddleware, compose } from 'redux';

declare global {
  /* tslint:disable:interface-name */
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__: any;
  }
}

export default function createMiddleware(middlewares: any[]) {
  const middleware = applyMiddleware(...middlewares);
  /* tslint:disable:strict-type-predicates */
  const composeEnhancers =
    typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
      ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({})
      : compose;

  return composeEnhancers(middleware);
}
