// Topics for understanding
// redux modules for nested stores
// state normalisation
// (normalizer library)

import thunkMiddleware from 'redux-thunk';
import { createLogger } from 'redux-logger';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/index';
import * as ActionCreators from './actions';

const loggerMiddleware = createLogger();
// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(
    thunkMiddleware,
    loggerMiddleware,
  )),
);

export const actions = ActionCreators;
export default { actions, store };
