import React from 'react';
import {
  StyleSheet,
  Text,
  StatusBar,
  SafeAreaView,
  Platform,
} from 'react-native';
class SideMenu extends React.Component {
  render() {
    const {navigate} = this.props.navigation;

    return (
      <SafeAreaView style={styles.container}>
        <Text>HOME</Text>
      </SafeAreaView>
    );
  }
}

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
