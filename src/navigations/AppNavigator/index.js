import { createBottomTabNavigator } from 'react-navigation-tabs';
import {Icon} from "native-base";
import React  from 'react';

const AppNavigation = createBottomTabNavigator(
  {
    Home: {
      screen:require('./Home').default,
      navigationOptions: (e) => {
        return {
          title: `Translate`,
          tabBarLabel: () => null,
          tabBarIcon: ({ tintColor }) => (
            <Icon name="md-home" style={{ color: tintColor }} />
          )
        }
      }
    },
    Word: {
      screen:require('../../pages/Home').default,
      navigationOptions: (e) => {
        return {
          tabBarLabel: () => null,
          tabBarIcon: ({ tintColor }) => (
            <Icon name="ios-book" style={{ color: tintColor }} />
          )
        }
      }
    },
    User: {
      screen:require('../../pages/Home').default,
      navigationOptions: (e) => {
        return {
          tabBarLabel: () => null,
          tabBarIcon: ({ tintColor, activeTintColor }) => (
            <Icon name="ios-options" style={{ color: tintColor }} />
          )
        }
      }
    },
  },
  {
    tabBarPosition: 'bottom',
    initialRouteName: 'Home',
    tabBarOptions: {
      activeTintColor: '#002841'
    }

    // drawer options
    // defaultNavigationOptions: {
    //   headerStyle: {
    //     backgroundColor: '#002841',
    //   },
    //   headerTintColor: '#fff',
    // }
  }
);

export default AppNavigation;
