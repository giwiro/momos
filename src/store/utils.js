// @flow
export type Action = {
  action: string,
  [key: string]: *,
};

export type Reducer = (state: *, action: Action) => *;

export type ReducerMap = {
  [key: string]: Reducer,
};

export const createReducer = (
  initialState: *,
  reducerMap: ReducerMap,
): Reducer => (state: *, action: Action) => {
  const reducer = reducerMap[action.type];
  if (!reducer) {
    return state;
  }
  return reducer(state, action);
};
