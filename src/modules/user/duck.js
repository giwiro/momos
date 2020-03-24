// @flow
import {
  ActionCreator,
  createReducer,
  generateActionCreators,
} from '../../store/utils';

import type {Action} from '../../store/utils';

export type UserAction = Action;

export type UserState = {|
  firstTime: boolean,
|};

export class UserUseFirstTime extends ActionCreator<UserAction> {}

export const actions = generateActionCreators([UserUseFirstTime]);

export const initialState = {
  firstTime: true,
};

export default createReducer(initialState, {
  [UserUseFirstTime.type]: (state: UserState) => ({
    firstTime: false,
  }),
});
