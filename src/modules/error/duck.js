// @flow
import {
  ActionCreator,
  createReducer,
  generateActionCreators,
} from '../../store/utils';

import type {Action} from '../../store/utils';

export type ErrorAction = Action & {
  error?: string,
};

export type ErrorState = {
  error?: string,
};

export class ErrorSet extends ActionCreator<ErrorAction> {}

export class ErrorUnset extends ActionCreator<ErrorAction> {}

export const actions = generateActionCreators([ErrorSet, ErrorUnset]);

export const initialState = {};

export default createReducer(initialState, {
  [ErrorSet.type]: (state: ErrorState, action: ErrorAction) => ({
    error: action.error,
  }),
  [ErrorUnset.type]: () => initialState,
});
