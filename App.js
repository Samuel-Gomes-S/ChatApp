import { NavigationContainer } from '@react-navigation/native';
import React from 'react';

import Routes from './src/routes';
import { StatusBar } from 'react-native';



export default function App() {

  return (
    <NavigationContainer>
      <StatusBar backgroundColor={'#216dfb'} barStyle={'light-content'} />
      <Routes />
    </NavigationContainer>
  )
}