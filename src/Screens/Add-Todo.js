import React, {useState} from 'react';
import {Container, Content, Form, Item, Input, Text, Button} from 'native-base';
import {StyleSheet, ToastAndroid} from 'react-native';
import AddRecord from '../Networks/Add-Record';
const AddTodo = () => {
  const [title, setTitle] = useState('');
  const [order, setOrder] = useState(1);
  function handleSubmit() {
    if (!title) {
      return ToastAndroid.show('Please selet title!', ToastAndroid.SHORT);
    }
    let data = {};
    data.title = title;
    data.order = order;
    data.completed = false;
    AddRecord(data).then(result => {
      console.log('result', result);
      ToastAndroid.show('Task Add SuccessFully!', ToastAndroid.SHORT);
      setTitle('');
      setOrder(1);
    });
  }
  return (
    <Container>
      <Content>
        <Form style={styles.formStyle}>
          <Item>
            <Input
              style={styles.inputBox}
              value={title}
              placeholder="Title"
              onChangeText={e => setTitle(e)}
            />
          </Item>
          <Item>
            <Input
              keyboardType="numeric"
              style={styles.inputBox}
              value={order}
              onChangeText={e => setOrder(e)}
              placeholder="Order"
            />
          </Item>
          <Button style={styles.BtnStyle} onPress={handleSubmit}>
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
