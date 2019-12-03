import React from 'react';
import {Container, Content, Form, Item, Input, Text, Button} from 'native-base';
import {StyleSheet, ScrollView} from 'react-native';

const Signup = () => {
  return (
    <Container>
      <Content>
        <ScrollView>
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
            <Item>
              <Input
                style={styles.inputBox}
                placeholder="Password"
                secureTextEntry={true}
              />
            </Item>
            <Button style={styles.BtnStyle}>
              <Text style={styles.btnText}> SIGN UP </Text>
            </Button>
          </Form>
        </ScrollView>
      </Content>
    </Container>
  );
};

export default Signup;

const styles = StyleSheet.create({
  formStyle: {
    width: '80%',
    marginTop: '10%',
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
    marginTop: 20,
    color: '#fff',
    fontFamily: 'times',
  },
});
