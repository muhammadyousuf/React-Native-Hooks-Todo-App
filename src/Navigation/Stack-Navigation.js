import React from 'react';
import {createStackNavigator} from 'react-navigation-stack';
import {createAppContainer} from 'react-navigation';
import {createDrawerNavigator} from 'react-navigation-drawer';
import AddTodo from '../Screens/Add-Todo';
import SideMenu from '../Components/Side-Menu';
import HeaderComponent from '../Components/Header-Component';
import InCompleteList from '../Screens/In-Complete-List';
import CompleteList from '../Screens/Complete-List';
const AppNavigator = createStackNavigator(
  {
    Home: {
      screen: InCompleteList,
    },
    AddTodo: {
      screen: AddTodo,
    },
    Completed: {
      screen: CompleteList,
    },
  },
  {
    defaultNavigationOptions: ({navigation}) => ({
      header: <HeaderComponent navigation={navigation} />,
    }),
  },
);

export default createAppContainer(
  createStackNavigator({
    DrawerAbleApp: {
      screen: createDrawerNavigator(
        {
          Main: {screen: AppNavigator},
        },
        {
          contentComponent: ({navigation}) => (
            <SideMenu navigation={navigation} />
          ),
          hideStatusBar: false,
          drawerWidth: 280,
          drawerBackgroundColor: 'rgb(245, 245, 235)',
          contentOptions: {
            activeTintColor: '#6d32ae',
            activeBackgroundColor: '#6d32ae',
          },
        },
      ),
      navigationOptions: {header: null},
    },
  }),
);
