import React from 'react';
import {Container, Header, Content, Form, Item, Input} from 'native-base';

const AddTodo = () => {
  return (
    <Container>
      <Header />
      <Content>
        <Form>
          <Item>
            <Input placeholder="Title" />
          </Item>
          <Item last>
            <Input placeholder="Order" />
          </Item>
        </Form>
      </Content>
    </Container>
  );
};

export default AddTodo;
