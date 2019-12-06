import React from 'react';
import {Container, Content, Form, Item, Input, Text, Button} from 'native-base';
import {StyleSheet} from 'react-native';

const AddTodo = () => {
  return (
    <Container>
      <Content>
        <Form style={styles.formStyle}>
          <Item>
            <Input style={styles.inputBox} placeholder="Title" />
          </Item>
          <Item>
            <Input
              keyboardType="numeric"
              style={styles.inputBox}
              placeholder="Order"
            />
          </Item>
          <Button style={styles.BtnStyle}>
            <Text style={styles.btnText}> ADD TODO </Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default AddTodo;

const styles = StyleSheet.create({
  formStyle: {
    width: '80%',
    marginTop: '20%',
    marginLeft: '10%',
    marginBottom: '5%',
  },
  inputBox: {
    marginTop: '15%',
    borderWidth: 2,
    borderColor: '#000',
    backgroundColor: '#fff',
    padding: 10,
    paddingLeft: 10,
    fontFamily: 'MavenPro-Regular',
    fontSize: 13,
  },
  BtnStyle: {
    width: '60%',
    marginTop: '18%',
    marginLeft: '20%',
    backgroundColor: '#B40300',
  },
  btnText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: -10,
    color: '#fff',
    fontFamily: 'times',
  },
});
