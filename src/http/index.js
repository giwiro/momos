// @flowgetCreator
import {ajax} from 'rxjs/ajax';
import queryString from 'query-string';

import type {Observable} from 'rxjs';

export type RequestOptions = {|
  auth: boolean,
  queryParams: {[key: string]: string},
|};

function httpCreatorFactory(
  route: string,
  o?: GetRequestOptions,
): Observable<any> {
  // api_key=fFhPABg0GwQnR23KvPMokjM3PmGbScYR&limit=30&offset=10
  let url = route;
  let queryParams = {};

  if (o) {
    if (o.auth) {
      queryParams.api_key = 'fFhPABg0GwQnR23KvPMokjM3PmGbScYR';
    }
    if (o.queryParams) {
      queryParams = {...queryParams, ...o.queryParams};
    }
  }

  if (queryParams) {
    url = `${url}?${queryString.stringify(queryParams)}`;
  }

  console.log('REQ: ', url);
  return ajax.getJSON(url);
}

export const getCreator = (route: string, o?: RequestOptions) =>
  httpCreatorFactory(route, o);
