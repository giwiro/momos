// @flow
import {
  ActionCreator,
  createReducer,
  generateActionCreators,
} from '../../store/utils';

import type {Action} from '../../store/utils';

export type ErrorAction = Action & {};

export type ErrorState = {};

export class ErrorSet extends ActionCreator<ErrorAction> {}

export const actions = generateActionCreators([ErrorSet]);

export const initialState = {};

export default createReducer(initialState, {
  [ErrorSet.type]: (state: ErrorState, action: ErrorAction) => ({
    isFetching: true,
  }),
});
