import React from 'react';
import {StatusBar} from 'react-native';
import AppContainer from './src/Navigation/Stack-Navigation';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <AppContainer />
    </>
  );
};

export default App;
