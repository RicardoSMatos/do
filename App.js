import React from 'react';
import { Provider } from 'react-redux'
import { StyleSheet, Text, View, Button } from 'react-native';

import createStore from './src/Redux'

const store = createStore()

export default function App() {

  return (
    <Provider store={store}>
      <View>
        <Text>Com Redux</Text>
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff444',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    fontSize: 22
  },
});
