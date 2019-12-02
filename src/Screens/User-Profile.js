import React from 'react';
import {Container, Content, Form, Item, Input, Text, Button} from 'native-base';
import {StyleSheet} from 'react-native';

const UserProfile = () => {
  return (
    <Container>
      <Content>
        <Form style={styles.formStyle}>
          <Item>
            <Input style={styles.inputBox} placeholder="Name" />
          </Item>
          <Item>
            <Input style={styles.inputBox} placeholder="Email" />
          </Item>
          <Item>
            <Input
              keyboardType="numeric"
              style={styles.inputBox}
              placeholder="Contact"
            />
          </Item>
          <Button style={styles.BtnStyle}>
            <Text style={styles.btnText}> UPDATE </Text>
          </Button>
        </Form>
      </Content>
    </Container>
  );
};

export default UserProfile;

const styles = StyleSheet.create({
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
    backgroundColor: '#B40300',
  },
  btnText: {
    marginLeft: '35%',
    marginTop: '5%',
  },
});
