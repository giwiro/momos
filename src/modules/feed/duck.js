// @flow
import {
  ActionCreator,
  createReducer,
  generateActionCreators,
} from '../../store/utils';
import {ofType, StateObservable} from 'redux-observable';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {fetchPostsApi} from './api';
import {ErrorSet} from '../error/duck';
import {OrderedMap} from 'immutable';

import type {Action} from '../../store/utils';
import type {ActionsObservable} from 'redux-observable';
import type {Post} from '../../entities';
import type {FetchPostApiResponse} from './api';
import type {RootState} from '../index';

export type FeedAction = Action & {
  posts?: Post[],
  fetchFromTop?: boolean,
};

export type FeedState = {
  isFetching?: boolean,
  isFetchingFromTop?: boolean,
  lastRequestDate?: number,
  posts: OrderedMap<string, Post>,
};

export class FeedFetchPosts extends ActionCreator<FeedAction> {}

export class FeedFetchPostsSuccess extends ActionCreator<FeedAction> {}

export class FeedFetchPostsError extends ActionCreator<FeedAction> {}

export const actions = generateActionCreators([
  FeedFetchPosts,
  FeedFetchPostsSuccess,
]);

export const initialState = {
  posts: new OrderedMap<string, Post>(),
};

const PAGE_SIZE_LIMIT = 30;
export const NUM_POSTS_LIMIT = 150;

export default createReducer(
  initialState,
  {
    [FeedFetchPosts.type]: (state: FeedState, action: FeedAction) => ({
      ...state,
      isFetching: true,
      isFetchingFromTop: !!action.fetchFromTop,
    }),
    [FeedFetchPostsSuccess.type]: (state: FeedState, action: FeedAction) => {
      const om = OrderedMap<string, Post>(
        action.posts.map((post: Post) => [post.id, post]),
      );
      const r = action.fetchFromTop
        ? om.merge(state.posts)
        : state.posts.merge(om);
      return {
        posts: r.slice(0, NUM_POSTS_LIMIT),
        lastRequestDate: Date.now(),
        isFetching: false,
        isFetchingFromTop: false,
      };
    },
    [FeedFetchPostsError.type]: (state: FeedState) => ({
      ...state,
      isFetching: false,
      isFetchingFromTop: false,
    }),
  },
  false,
);

export const fetchPostsEpic = (
  action$: ActionsObservable,
  state$: StateObservable<RootState>,
) =>
  action$.pipe(
    ofType(FeedFetchPosts.type),
    switchMap((action: FeedAction) =>
      fetchPostsApi({
        auth: true,
        queryParams: {
          limit: PAGE_SIZE_LIMIT,
          offset:
            action.fetchFromTop || state$.value.feed.posts.size === 0
              ? 0
              : state$.value.feed.posts.size + 1,
        },
      }).pipe(
        map(
          (response: FetchPostApiResponse) =>
            new FeedFetchPostsSuccess({
              posts: response.data,
              fetchFromTop: action.fetchFromTop,
            }),
        ),
        catchError(error =>
          of(
            new ErrorSet({error: `Huge error :'v ${error.message}`}),
            new FeedFetchPostsError(),
          ),
        ),
      ),
    ),
  );
