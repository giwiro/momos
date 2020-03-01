// @flow
import {ajax} from 'rxjs/ajax';

import type {Observable} from 'rxjs';

function httpCreatorFactory(route: string): Observable {
  return ajax.getJSON(route);
}

export const getCreator = (route: string) => httpCreatorFactory(route);
