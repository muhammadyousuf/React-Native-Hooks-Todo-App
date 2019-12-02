import React from 'react';
import {StatusBar} from 'react-native';
import AddTodo from './Screens/Add-Todo';

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <AddTodo />
    </>
  );
};

export default App;
