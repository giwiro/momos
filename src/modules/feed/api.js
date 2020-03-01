// @flow
import {getCreator} from '../../http';

import type {Post} from '../../entities';

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
  FETCH_POSTS:
    'http://api.giphy.com/v1/stickers/trending?api_key=fFhPABg0GwQnR23KvPMokjM3PmGbScYR&limit=30&offset=10',
});

export const fetchPostsApi = () => getCreator(endpoints.FETCH_POSTS);
