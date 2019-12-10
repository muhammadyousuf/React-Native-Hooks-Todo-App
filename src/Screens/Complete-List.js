import React, {useState, useEffect} from 'react';
import {
  Container,
  Content,
  Text,
  List,
  ListItem,
  Left,
  Right,
  Icon,
  Badge,
  Item,
  Input,
  Button,
} from 'native-base';
import {StyleSheet, ScrollView, View} from 'react-native';
import fetchRecords from '../Networks/Fetch-Records';
import deleteRecord from '../Networks/Delete-Record';
import Modal from 'react-native-modal';

function CompleteList() {
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [id, setId] = useState(null);

  useEffect(() => {
    fetchRecords().then(res => {
      setTodoList(res);
    });
  }, []);
  function ClearText(textClear) {
    SearchFilterFunction(textClear);
  }
  function SearchFilterFunction(searchValue) {
    setText(searchValue);
    fetchRecords().then(res => {
      const newData = res.filter(function(item) {
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        return itemData.indexOf(searchValue.toUpperCase()) > -1;
      });
      setTodoList(newData);
    });
  }
  function deleteTodo() {
    deleteRecord(id).then(() => {
      fetchRecords().then(res => {
        setTodoList(res);
        setIsVisible(false);
        setId('');
      });
    });
  }
  function deleteModal(todoId) {
    setIsVisible(true);
    setId(todoId);
  }
  function clearBtn() {
    setIsVisible(false);
    setId('');
  }
  return (
    <Container>
      <Content>
        <ScrollView>
          <View style={styles.SearchStyle}>
            <Item>
              <Icon style={styles.IconStyle} name="ios-search" />
              <Input
                value={text}
                placeholder="Search"
                onChangeText={textValue => SearchFilterFunction(textValue)}
              />
              <Icon
                style={styles.IconStyle}
                name="close"
                type="AntDesign"
                onPress={() => ClearText('')}
              />
            </Item>
          </View>
          <Modal
            isVisible={isVisible}
            animationOutTiming={0}
            animationOut="fadeIn">
            <View style={styles.ModalStyle}>
              <Text style={styles.ModelHeading}>DELETE TODO</Text>
              <View style={styles.ModelViewer}>
                <Text style={styles.mesgHeading}>
                  Are you sure you want to delete task?
                </Text>
                <View style={styles.buttonALign}>
                  <Button
                    style={styles.yesBtnStyle}
                    onPress={() => deleteTodo()}>
                    <Text> Yes</Text>
                  </Button>
                  <Button style={styles.noBtnStyle} onPress={() => clearBtn()}>
                    <Text style={styles.nobtnText}> No</Text>
                  </Button>
                </View>
              </View>
            </View>
          </Modal>
          {todoList.map((data, index) => {
            return data.completed ? (
              <List style={styles.listStlye} key={index}>
                <ListItem noBorder>
                  <Left>
                    <Text style={styles.todoTextStyle}>{data.title} </Text>
                  </Left>
                  <Right>
                    <Badge>
                      <Text>{data.order}</Text>
                    </Badge>
                  </Right>
                </ListItem>
                <ListItem style={styles.ListTOP}>
                  <Left>
                    <Text style={styles.dateTimeStyle}>Mon, Dec 2019</Text>
                    <Text style={styles.dateTimeStyle}>15:30</Text>
                  </Left>
                  <Right style={styles.SingleRowIcon}>
                    <Icon
                      style={styles.IconStyle}
                      name="delete"
                      type="AntDesign"
                      onPress={() => deleteModal(data.id)}
                    />
                  </Right>
                </ListItem>
              </List>
            ) : null;
          })}
        </ScrollView>
      </Content>
    </Container>
  );
}

export default CompleteList;

const styles = StyleSheet.create({
  SingleRowIcon: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  IconStyle: {
    marginLeft: '10%',
    color: '#B40300',
    fontSize: 25,
    fontWeight: 'bold',
  },
  dateTimeStyle: {
    fontSize: 12,
    color: 'gray',
    marginLeft: '5%',
  },
  ListTOP: {
    marginTop: -20,
  },
  listStlye: {
    borderBottomColor: 'red',
    borderBottomWidth: 2,
    backgroundColor: '#EDE3E3',
  },
  todoTextStyle: {
    textTransform: 'capitalize',
    fontFamily: 'times',
  },
  SearchStyle: {
    width: '90%',
    marginLeft: '5%',
    marginTop: '5%',
    marginBottom: '5%',
    borderWidth: 2,
    height: 50,
    borderColor: '#B40300',
    borderRadius: 5,
    backgroundColor: '#fff',
  },
  ModalStyle: {
    backgroundColor: '#fff',
    height: 160,
  },
  ModelHeading: {
    fontFamily: 'times',
    marginLeft: 20,
    fontWeight: 'bold',
    marginTop: 20,
    marginBottom: 0,
  },
  ModelViewer: {
    borderTopColor: '#B40300',
    borderTopWidth: 5,
    marginTop: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonALign: {flexDirection: 'row', paddingTop: 20},
  mesgHeading: {fontFamily: 'times', fontSize: 14, marginTop: 10},
  noBtnStyle: {
    marginLeft: 30,
    height: 35,
    borderRadius: 5,
    backgroundColor: 'lightgray',
  },
  yesBtnStyle: {
    backgroundColor: '#B40300',
    height: 35,
    borderRadius: 5,
  },
  nobtnText: {color: 'black'},
});
