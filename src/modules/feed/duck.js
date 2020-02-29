// @flow
import {createReducer} from '../../store/utils';

import type {Action} from '../../store/utils';

export type FeedAction = Action & {};

export type FeedState = {
  isFetching: boolean,
};

const FEED_FETCH_POSTS_REQUEST = 'FEED_FETCH_POSTS_REQUEST';

export function fetchPosts() {
  return {
    type: FEED_FETCH_POSTS_REQUEST,
  };
}

export const actions = {
  FEED_FETCH_POSTS_REQUEST,
  fetchPosts,
};

export const initialState = {};

export const r2 = createReducer(initialState, {
  FEED_FETCH_POSTS_REQUEST: (state: FeedState, action: FeedAction) => ({
    isFetching: true,
  }),
});

export default function reducer(
  state: FeedState = initialState,
  action: FeedAction,
): FeedState {
  console.log('state', state);
  console.log('action', action);
  switch (action.type) {
    case FEED_FETCH_POSTS_REQUEST:
      return {
        isFetching: true,
      };
    default:
      return state;
  }
}
