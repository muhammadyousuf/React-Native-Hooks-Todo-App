import React from 'react';
import {SafeAreaView, StatusBar, Text} from 'react-native';
import AddTodo from './Screens/Add-Todo';
import {Container, Header, Content, Form, Item, Input} from 'native-base';
const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />

      <AddTodo />
    </>
  );
};

export default App;
