// @flow
import {getCreator} from '../../http';

import type {Post} from '../../entities';
import type {RequestOptions} from '../../http';

export type FetchPostApiResponse = {
  data: Post[],
  pagination: {
    total_count: number,
    count: number,
    offset: number,
  },
  meta: {
    status: number,
    msg: string,
    response_id: string,
  },
};

export const endpoints = Object.freeze({
  FETCH_POSTS: 'http://api.giphy.com/v1/stickers/trending',
});

export const fetchPostsApi = (o: RequestOptions) =>
  getCreator(endpoints.FETCH_POSTS, o);
