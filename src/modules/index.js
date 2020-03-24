// @flow
import {combineReducers} from 'redux';
import {combineEpics} from 'redux-observable';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';
import {immutableTransform} from '../utils';
import userReducer, {initialState as userInitialState} from './user/duck';
import feedReducer, {
  initialState as feedInitialState,
  fetchPostsEpic,
} from './feed/duck';
import error, {initialState as errorInitialState} from './error/duck';

import type {UserState} from './user/duck';
import type {FeedState} from './feed/duck';
import type {ErrorState} from './error/duck';

export type RootState = {
  user: UserState,
  feed: FeedState,
  error: ErrorState,
};

const persistConfig = {
  transforms: [immutableTransform()],
  key: 'root',
  storage: AsyncStorage,
};

export const defaultInitialState = {
  user: userInitialState,
  feed: feedInitialState,
  error: errorInitialState,
};

export const rootEpic = combineEpics(fetchPostsEpic);

export const appReducer = combineReducers<*, *>({
  user: userReducer,
  feed: feedReducer,
  error,
});

export const persistedReducer = persistReducer<*, *>(persistConfig, appReducer);
