// @flow
import {ajax} from 'rxjs/ajax';
import queryString from 'query-string';

import type {Observable} from 'rxjs';

export type RequestOptions = {|
  auth: boolean,
  queryParams: {[key: string]: string},
|};

function httpCreatorFactory(
  route: string,
  o?: RequestOptions,
): Observable<any> {
  let url = route;
  let queryParams = {};

  if (o) {
    if (o.auth) {
      queryParams.api_key = 'fFhPABg0GwQnR23KvPMokjM3PmGbScYR';
    }
    if (o.queryParams) {
      queryParams = {...o.queryParams, ...queryParams};
    }
  }

  if (queryParams) {
    url = `${url}?${queryString.stringify(queryParams)}`;
  }

  return ajax.getJSON(url);
}

export const getCreator = (route: string, o?: RequestOptions) =>
  httpCreatorFactory(route, o);
