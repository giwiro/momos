/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React from 'react';
import FeedContainer from './src/modules/feed/containers/FeedContainer';
import ErrorContainer from './src/modules/error/containers/ErrorContainer';
import {Provider} from 'react-redux';
import configureStore from './src/store';

// Here put the initialState persisted
let initialState = undefined;
const store = configureStore(initialState);

const App = () => {
  return (
    <>
      <Provider store={store}>
        <ErrorContainer />
        <FeedContainer />
      </Provider>
    </>
  );
};

export default App;
