import React, {useState} from 'react';
import {
  Container,
  Content,
  Form,
  Item,
  Input,
  Text,
  Button,
  Icon,
  View,
} from 'native-base';
import {StyleSheet, ScrollView} from 'react-native';

const Login = () => {
  const [passSecure, setpassSecure] = useState(true);
  return (
    <Container>
      <Content>
        <ScrollView>
          <Form style={styles.formStyle}>
            <View style={styles.inputBox}>
              <Item>
                <Input placeholder="Email" />
                <Icon
                  name="email"
                  type="MaterialIcons"
                  style={styles.IconStyle}
                />
              </Item>
            </View>
            <View style={styles.inputBox}>
              <Item>
                <Input placeholder="Password" secureTextEntry={passSecure} />
                <Icon
                  name="eye"
                  type="Feather"
                  onPress={() => setpassSecure(!passSecure)}
                  style={styles.IconStyle}
                />
              </Item>
            </View>

            <Button style={styles.BtnStyle}>
              <Text style={styles.btnText}> SIGN IN </Text>
            </Button>
          </Form>
        </ScrollView>
      </Content>
    </Container>
  );
};

export default Login;

const styles = StyleSheet.create({
  formStyle: {
    width: '80%',
    marginTop: '6%',
    marginLeft: '10%',
    marginBottom: '25%',
  },
  inputBox: {
    marginTop: '15%',
    borderWidth: 2,
    borderColor: '#000',
    borderTopColor: 'green',
    backgroundColor: '#fff',
    padding: 2,
    paddingLeft: 10,
    fontFamily: 'MavenPro-Regular',
    fontSize: 13,
  },
  BtnStyle: {
    width: '60%',
    marginTop: '18%',
    marginBottom: '5%',
    marginLeft: '20%',
    backgroundColor: '#B40300',
  },
  btnText: {
    justifyContent: 'center',
    alignItems: 'center',
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: 0,
    color: '#fff',
    fontFamily: 'times',
  },
  IconStyle: {
    fontSize: 30,
    color: '#B40300',
  },
});
