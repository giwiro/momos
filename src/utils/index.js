// @flow
import {useRef, useEffect} from 'react';
import Immutable from 'immutable';
import Serialize from 'remotedev-serialize';
import {createTransform} from 'redux-persist';

export function usePrevious(value: any) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

export function immutableTransform(config?: {[key: string]: any} = {}) {
  const serializer = Serialize.immutable(Immutable, config.records);
  return createTransform(serializer.stringify, serializer.parse, config);
}
