/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import 'react-native-gesture-handler';
import React from 'react';
import {persistStore} from 'redux-persist';
import {PersistGate} from 'redux-persist/integration/react';
import FeedContainer from './src/modules/feed/containers/FeedContainer';
import ErrorContainer from './src/modules/error/containers/ErrorContainer';
import HomeContainer from './src/modules/home/containers/HomeContainer';
import {Provider} from 'react-redux';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import configureStore from './src/store';

// Here put the initialState persisted
const store = configureStore();
const persistor = persistStore(store);

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <>
            <ErrorContainer />
            <Stack.Navigator
              screenOptions={{
                headerShown: false,
                initialRouteName: 'Home',
              }}>
              <Stack.Screen name="Home" component={HomeContainer} />
              <Stack.Screen name="Feed" component={FeedContainer} />
            </Stack.Navigator>
          </>
        </PersistGate>
      </Provider>
    </NavigationContainer>
  );
};

export default App;
