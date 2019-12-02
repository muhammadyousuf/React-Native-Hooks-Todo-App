import React from 'react';
import {Header, Left, Right, Body, Text, Icon} from 'native-base';
import {StyleSheet} from 'react-native';

const HeaderComponent = props => {
  const {navigation} = props;
  return (
    <Header style={styles.headerColor} androidStatusBarColor="red">
      <Left style={styles.headerAlign}>
        <Icon
          onPress={() => navigation.toggleDrawer()}
          name="menu"
          type="Entypo"
          style={styles.IconTextColor}
        />
      </Left>
      <Body style={styles.headerAlign}>
        <Text style={styles.IconTextColor}>TODO</Text>
      </Body>
      <Right>
        <Icon name="close" type="FontAwesome" style={styles.IconTextColor} />
      </Right>
    </Header>
  );
};

export default HeaderComponent;

const styles = StyleSheet.create({
  IconTextColor: {
    color: '#fff',
    fontFamily: 'times',
  },
  headerAlign: {
    flex: 3,
    justifyContent: 'center',
  },
  headerColor: {backgroundColor: 'red'},
});
