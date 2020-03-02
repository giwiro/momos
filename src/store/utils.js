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
  static name: string;

  static get fnName(): string {
    const name = this.name;
    return name[0].toLowerCase() + name.slice(1);
  }

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

export const generateActionCreators = (
  classes: Class<ActionCreator>[],
): {[key: string]: () => void} => {
  const r = {};
  classes.forEach(
    (cls: Class<ActionCreator>) => (r[(cls: any).fnName] = aa => new cls(aa)),
  );
  return r;
};

export const createReducer = (
  initialState: *,
  reducerMap: ReducerMap,
  debug: boolean = false,
): Reducer => (state: *, action: Action) => {
  if (debug) {
    console.log('[ACTION]:', action);
  }
  if (reducerMap.hasOwnProperty(action.type)) {
    return reducerMap[action.type](state, action);
  }
  return state || initialState;
};
