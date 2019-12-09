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
} from 'native-base';
import {StyleSheet, ScrollView, View} from 'react-native';
import fetchRecords from '../Networks/Fetch-Records';
import deleteRecord from '../Networks/Delete-Record';
import editRecords from '../Networks/Edit-Record';

function InCompleteList() {
  const [todoList, setTodoList] = useState([]);
  const [text, setText] = useState('');
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
        //   //applying filter for the inserted text in search bar
        const itemData = item.title
          ? item.title.toUpperCase()
          : ''.toUpperCase();
        // const textData = text.toUpperCase();
        return itemData.indexOf(searchValue.toUpperCase()) > -1;
      });
      setTodoList(newData);
    });
  }
  function deleteTodo(id) {
    deleteRecord(id).then(() => {
      fetchRecords().then(res => {
        setTodoList(res);
      });
    });
  }
  function editTodo(id) {
    let data = {completed: true};
    console.log('data', data, id);
    editRecords(data, id).then(result => {
      console.log('result', result);
      fetchRecords().then(res => {
        setTodoList(res);
      });
    });
  }
  return (
    <Container>
      <Content>
        <ScrollView>
          <View style={styles.SearchStyle}>
            <Item>
              <Icon style={styles.IconStyle} name="ios-search" />
              <Input
                placeholder="Search"
                value={text}
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
          {todoList.map((data, index) => {
            return !data.completed ? (
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
                      onPress={() => deleteTodo(data.id)}
                    />
                    <Icon
                      style={styles.IconStyle}
                      name="done"
                      type="MaterialIcons"
                      onPress={() => editTodo(data.id)}
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

export default InCompleteList;

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
});
