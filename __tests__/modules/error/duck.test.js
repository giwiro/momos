// @flow
import reducer, {
  ErrorSet,
  ErrorUnset,
  initialState,
} from '../../../src/modules/error/duck';

describe('Action creators', () => {
  it('should return an action with error', () =>
    expect(new ErrorSet({error: 'Sample error text'})).toMatchSnapshot());

  it('should return an action to unset th error', () =>
    expect(new ErrorUnset()).toMatchSnapshot());
});

describe('Reducer', () => {
  it('should return initialState', () =>
    expect(initialState).toMatchSnapshot());

  it('should return the state with error set', () =>
    expect(
      reducer(initialState, new ErrorSet({error: 'Sample error text'})),
    ).toMatchSnapshot());

  it('should return the state with no error', () =>
    expect(
      reducer({error: 'Sample error text'}, new ErrorUnset()),
    ).toMatchSnapshot());
});
