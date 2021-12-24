import { applyMiddleware, compose, createStore } from '@reduxjs/toolkit';
import { rootReducer } from './reducers';
import { middleware } from './middleware';

declare global {
  interface Window {
    __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
  }
}

const composeEnhancers =
  window['__REDUX_DEVTOOLS_EXTENSION_COMPOSE__'] || compose;

export const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(...middleware)),
);
