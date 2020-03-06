// @flow
import {combineReducers} from 'redux';
import {combineEpics} from 'redux-observable';
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
