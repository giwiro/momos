// @flow
import reducer, {
  UserUseFirstTime,
  initialState,
} from '../../../src/modules/user/duck';

describe('Action creators', () => {
  it('should return an action to erase the first time flag', () =>
    expect(new UserUseFirstTime()).toMatchSnapshot());
});

describe('Reducer', () => {
  it('should return initialState', () =>
    expect(initialState).toMatchSnapshot());

  it('should return the state with error set', () =>
    expect(reducer(initialState, new UserUseFirstTime())).toMatchSnapshot());
});
