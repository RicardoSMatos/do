import React from 'react';
import { Provider } from 'react-redux'
import { PersistGate } from 'redux-persist/integration/react'
import { Text, View, StatusBar } from 'react-native';
import FlashMessage from "react-native-flash-message";
import 'react-native-gesture-handler'

import RootContainer from './src/Container/RootContainer'

import createStore from './src/Redux'

const { store, persistor } = createStore()

export default function App() {

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <RootContainer />
        <FlashMessage position="top" />
      </PersistGate>
    </Provider>
  );
}


