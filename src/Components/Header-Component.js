import React from 'react';
import {Header, Left, Right, Body, Text, Icon} from 'native-base';
import {StyleSheet, BackHandler} from 'react-native';

const HeaderComponent = props => {
  const {navigation} = props;
  return (
    <Header style={styles.headerColor} androidStatusBarColor="#690100">
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
        <Icon
          name="close"
          type="FontAwesome"
          style={styles.IconTextColor}
          onPress={() => BackHandler.exitApp()}
        />
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
  headerColor: {backgroundColor: '#B40300'},
});
