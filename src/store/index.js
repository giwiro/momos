// @flow
import {createStore, applyMiddleware} from 'redux';
import {defaultInitialState, rootEpic, persistedReducer} from '../modules';
import {createEpicMiddleware} from 'redux-observable';

import type {RootState} from '../modules';

const configureStore = (initialState?: RootState = defaultInitialState) => {
  const middlewares = [];
  // Redux observable
  const epic = createEpicMiddleware();
  middlewares.push(epic);
  const appliedMiddlewares = applyMiddleware(...middlewares);
  const store = createStore<*, *, *>(
    persistedReducer,
    initialState,
    appliedMiddlewares,
  );
  epic.run(rootEpic);
  return store;
};

export default configureStore;
