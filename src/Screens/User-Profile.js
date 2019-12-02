import React from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Text,
  Button,
  Icon,
} from 'native-base';
import {StyleSheet, View} from 'react-native';

const UserProfile = () => {
  return (
    <Container>
      <Content>
        <Form style={styles.formStyle}>
          <View style={styles.inputBox}>
            <Item>
              <Icon name="user" type="AntDesign" />
              <Input placeholder="Name" />
            </Item>
          </View>
          <View style={styles.inputBox}>
            <Item>
              <Icon name="email" type="MaterialIcons" />
              <Input placeholder="Email" />
            </Item>
          </View>
          <View style={styles.inputBox}>
            <Item>
              <Icon name="phone" type="Feather" />
              <Input keyboardType="numeric" placeholder="Contact" />
            </Item>
          </View>
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
