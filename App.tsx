import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import Router from './src/router/index';
import { Provider } from 'react-redux'
import { store } from './src/redux';

export default function App() {
  return (
    <Provider store={store}>
      <NavigationContainer>
          <Router/>
      </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
