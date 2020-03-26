// @flow
import {
  ActionCreator,
  generateActionCreators,
  createReducer,
} from '../../src/store/utils';

describe('ActionCreator', () => {
  it('should return correct class name as type property', () => {
    const ac = new ActionCreator();
    expect(ac.type).toMatchSnapshot();
  });

  it('should return correct function name', () =>
    expect(ActionCreator.fnName).toMatchSnapshot());

  it('should return an appended payload', () =>
    expect(new ActionCreator({foo: 'bar'})).toMatchSnapshot());
});

describe('generateActionCreators', () => {
  it('should generate function map from generate action creators', () => {
    const gen = generateActionCreators([ActionCreator]);
    expect(gen).toMatchSnapshot();
  });

  it('should execute the generated function', () => {
    const gen = generateActionCreators([ActionCreator]);
    expect(gen.actionCreator()).toMatchSnapshot();
  });
});

describe('createReducer', () => {
  const reducerMap = {
    ActionCreator: () => ({foo: 'bar'}),
  };

  it('should create the reducer', () =>
    expect(createReducer({}, reducerMap)).toMatchSnapshot());

  it('should execute correctly the reducer', () =>
    expect(
      createReducer({}, reducerMap)({}, new ActionCreator()),
    ).toMatchSnapshot());
});
