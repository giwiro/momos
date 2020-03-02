// @flow
import {combineReducers} from 'redux';
import {combineEpics} from 'redux-observable';
import feedReducer, {
  initialState as feedInitialState,
  fetchPostsEpic,
} from './feed/duck';
import error, {initialState as errorInitialState} from './error/duck';

import type {FeedState} from './feed/duck';
import type {ErrorState} from './error/duck';

export type RootState = {
  feed: FeedState,
  error: ErrorState,
};

export const defaultInitialState = {
  feed: feedInitialState,
  error: errorInitialState,
};

export const rootEpic = combineEpics(fetchPostsEpic);

export const appReducer = combineReducers({
  feed: feedReducer,
  error,
});
