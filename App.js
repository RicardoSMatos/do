import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';

export default function App() {

  console.log('Loggando...')

  return (
    <View style={styles.container}>
      <Text>Testando o text</Text>
      <Text style={styles.text}>Open up App.js to start working on your app!</Text>
      <Button
        title="Botão"
      />
    </View>
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
