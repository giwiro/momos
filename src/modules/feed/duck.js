// @flow
import {ActionCreator, createReducer} from '../../store/utils';
import {ofType} from 'redux-observable';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {fetchPostsApi} from './api';

import type {Action} from '../../store/utils';
import type {ActionsObservable} from 'redux-observable';
import type {Post} from '../../entities';
import type {FetchPostApiResponse} from './api';

export type FeedAction = Action & {};

export type FeedState = {
  isFetching?: boolean,
};

class FetchPosts extends ActionCreator<FeedAction> {}

const FEED_FETCH_POSTS_REQUEST = 'FEED_FETCH_POSTS_REQUEST';
const FEED_FETCH_POSTS_SUCCESS = 'FEED_FETCH_POSTS_SUCCESS';

export function fetchPosts() {
  return {
    type: FEED_FETCH_POSTS_REQUEST,
  };
}

export function fetchPostsSuccess(posts: Post[]) {
  return {
    type: FEED_FETCH_POSTS_SUCCESS,
    posts,
  };
}

export const actions = {
  fetchPosts,
  fetchPostsSuccess,
};

export const initialState = {};

export default createReducer(initialState, {
  [FetchPosts.type]: (state: FeedState, action: FeedAction) => ({
    isFetching: true,
  }),
});

export const fetchPostsEpic = (action$: ActionsObservable) =>
  action$.pipe(
    ofType(FEED_FETCH_POSTS_REQUEST),
    switchMap((action: FeedAction) =>
      fetchPostsApi().pipe(
        map((response: FetchPostApiResponse) =>
          fetchPostsSuccess(response.data),
        ),
        catchError(error => {
          console.log('error: ', error);
          return of(error);
        }),
      ),
    ),
  );
