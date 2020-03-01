// @flow
export type Action = {
  action: string,
  [key: string]: *,
};

export type Reducer = (state: *, action: Action) => *;

export type ReducerMap = {
  [key: string]: Reducer,
};

export class ActionCreator<T> {
  payload: T;

  static get type(): string {
    return `${this.name}`;
  }
  constructor(payload: T) {
    return {
      type: this.constructor.type,
      ...payload,
    };
  }
}

export const createReducer = (
  initialState: *,
  reducerMap: ReducerMap,
): Reducer => (state: *, action: Action) => {
  if (reducerMap.hasOwnProperty(action.type)) {
    return reducerMap[action.type](state, action);
  }
  return state || initialState;
};
