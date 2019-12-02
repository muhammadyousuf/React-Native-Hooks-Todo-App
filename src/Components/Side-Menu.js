import React from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
  Platform,
} from 'react-native';
const SideMenu = props => {
  //const {navigate} = props.navigation;

  return (
    <SafeAreaView style={styles.container}>
      <Text>HOME</Text>
    </SafeAreaView>
  );
};

export default SideMenu;

const styles = StyleSheet.create({
  container: {
    ...Platform.select({
      android: {
        marginTop: StatusBar.currentHeight,
      },
    }),
  },
});
