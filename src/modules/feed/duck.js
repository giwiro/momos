// @flow
import {
  ActionCreator,
  createReducer,
  generateActionCreators,
} from '../../store/utils';
import {ofType} from 'redux-observable';
import {of} from 'rxjs';
import {catchError, map, switchMap} from 'rxjs/operators';
import {fetchPostsApi} from './api';
import {ErrorSet} from '../error/duck';

import type {Action} from '../../store/utils';
import type {ActionsObservable} from 'redux-observable';
import type {Post} from '../../entities';
import type {FetchPostApiResponse} from './api';

export type FeedAction = Action & {
  posts?: Post[],
};

export type FeedState = {
  isFetching?: boolean,
  posts?: Post[],
};

export class FeedFetchPosts extends ActionCreator<FeedAction> {}

export class FeedFetchPostsSuccess extends ActionCreator<FeedAction> {}

export const actions = generateActionCreators([
  FeedFetchPosts,
  FeedFetchPostsSuccess,
]);

export const initialState = {};

export default createReducer(initialState, {
  [FeedFetchPosts.type]: (state: FeedState, action: FeedAction) => ({
    isFetching: true,
  }),
  [FeedFetchPostsSuccess.type]: (state: FeedState, action: FeedAction) => ({
    posts: action.posts,
  }),
});

export const fetchPostsEpic = (action$: ActionsObservable) =>
  action$.pipe(
    ofType(FeedFetchPosts.type),
    switchMap((action: FeedAction) =>
      fetchPostsApi().pipe(
        map(
          (response: FetchPostApiResponse) =>
            new FeedFetchPostsSuccess({posts: response.data}),
        ),
        catchError(error => {
          const aa = new ErrorSet({error: `Huge error :'v ${error.message}`});
          console.log('aa', aa);
          return of(aa);
        }),
      ),
    ),
  );
