import React from 'react';
import Login from '../Screens/Login';
import Signup from '../Screens/Signup';
import {StyleSheet} from 'react-native';
import {Container, Header, Tab, Tabs} from 'native-base';
const TabsMenu = () => {
  return (
    <Container>
      <Header
        hasTabs
        style={styles.headerStyle}
        androidStatusBarColor="#B40300"
      />
      <Tabs>
        <Tab
          heading="LOGIN"
          tabStyle={styles.tabsStyle}
          textStyle={styles.headings}
          activeTextStyle={styles.activeHeading}
          activeTabStyle={styles.tabsActive}>
          <Login />
        </Tab>
        <Tab
          heading="SIGNUP"
          textStyle={styles.headings}
          tabStyle={styles.tabsStyle}
          activeTextStyle={styles.activeHeading}
          activeTabStyle={styles.tabsActive}>
          <Signup />
        </Tab>
      </Tabs>
    </Container>
  );
};

export default TabsMenu;

const styles = StyleSheet.create({
  headerStyle: {
    backgroundColor: '#B40300',
  },
  tabsStyle: {backgroundColor: '#B40300'},
  tabsActive: {backgroundColor: '#fff'},
  headings: {
    color: '#fff',
    fontFamily: 'times',
  },
  activeHeading: {
    color: '#B40300',
    fontWeight: 'bold',
    fontFamily: 'times',
  },
});
