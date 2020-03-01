// @flow
import {combineReducers} from 'redux';
import {combineEpics} from 'redux-observable';
import feedReducer, {
  initialState as feedInitialState,
  fetchPostsEpic,
} from './feed/duck';

import type {FeedState} from './feed/duck';

export type RootState = {
  feed: FeedState,
};

export const defaultInitialState = {
  feed: feedInitialState,
};

export const rootEpic = combineEpics(fetchPostsEpic);

export const appReducer = combineReducers({
  feed: feedReducer,
});
