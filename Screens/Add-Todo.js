import React from 'react';
import {
  Container,
  Header,
  Content,
  Form,
  Item,
  Input,
  Left,
  Right,
  Body,
  Text,
  Icon,
  Button,
} from 'native-base';
import {StyleSheet} from 'react-native';

const AddTodo = () => {
  return (
    <Container>
      <Header style={styles.headerColor} androidStatusBarColor="red">
        <Left style={styles.headerAlign}>
          <Icon name="menu" type="Entypo" style={styles.IconTextColor} />
        </Left>
        <Body style={styles.headerAlign}>
          <Text style={styles.IconTextColor}>TODO</Text>
        </Body>
        <Right>
          <Icon name="close" type="FontAwesome" style={styles.IconTextColor} />
        </Right>
      </Header>
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
  IconTextColor: {
    color: '#fff',
    fontFamily: 'times',
  },
  headerAlign: {
    flex: 3,
    justifyContent: 'center',
  },
  formStyle: {
    width: '80%',
    marginTop: '20%',
    marginLeft: '10%',
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
    width: '80%',
    marginTop: '20%',
    marginLeft: '12%',
    backgroundColor: 'red',
  },
  btnText: {
    marginLeft: '30%',
  },
  headerColor: {backgroundColor: 'red'},
});
