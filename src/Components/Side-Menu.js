import React from 'react';
import {
  StyleSheet,
  StatusBar,
  SafeAreaView,
  Platform,
  TouchableOpacity,
} from 'react-native';
import {Text, View, Icon} from 'native-base';
const SideMenu = props => {
  //const {navigate} = props.navigation;

  return (
    <SafeAreaView style={styles.container}>
      <View>
        <TouchableOpacity style={styles.SingleRow}>
          <Icon style={styles.SideMenuIcon} type="Feather" name="list" />
          <Text style={styles.ItemText}>TODO LIST</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SingleRow}>
          <Icon style={styles.SideMenuIcon} type="Entypo" name="add-to-list" />
          <Text style={styles.ItemText}>ADD TODO</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SingleRow}>
          <Icon
            style={styles.SideMenuIcon}
            type="MaterialIcons"
            name="done-all"
          />
          <Text style={styles.ItemText}>COMPLETED</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SingleRow}>
          <Icon style={styles.SideMenuIcon} type="Entypo" name="user" />
          <Text style={styles.ItemText}>PROFILE</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.SingleRow}>
          <Icon style={styles.SideMenuIcon} type="Entypo" name="log-out" />
          <Text style={styles.ItemText}>LOGOUT</Text>
        </TouchableOpacity>
      </View>
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
  SideMenuIcon: {
    marginLeft: '6%',
    color: '#B40300',
  },
  SingleRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#E5E0E0',
    padding: 10,
    marginTop: '8%',
  },
  ItemText: {
    marginLeft: '5%',
    marginTop: '2%',
    fontFamily: 'times',
    color: 'black',
  },
});
