import React, {useState} from 'react';
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
} from 'native-base';
import {StyleSheet, ScrollView} from 'react-native';

function InCompleteList() {
  const [todoList] = useState([
    {title: 'First todo', order: 3},
    {title: 'Second todo', order: 12},
  ]);
  return (
    <Container>
      <Content>
        <ScrollView>
          {todoList.map((data, index) => {
            return (
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
                    />
                    <Icon
                      style={styles.IconStyle}
                      name="done"
                      type="MaterialIcons"
                    />
                  </Right>
                </ListItem>
              </List>
            );
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
    fontSize: 30,
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
    borderTopColor: 'red',
    borderTopWidth: 2,
    backgroundColor: '#EDE3E3',
    marginTop: '5%',
  },
  todoTextStyle: {
    textTransform: 'capitalize',
    fontFamily: 'times',
  },
});
