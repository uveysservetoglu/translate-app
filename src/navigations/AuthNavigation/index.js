import React from 'react';
import {createStackNavigator} from "react-navigation-stack";

const AuthNavigation = createStackNavigator(
  {
    Auth: {
      screen: require('./Auth').default,
    },
  },
  {
    initialRouteName: 'Auth',
    headerMode:'none',
    tabBarOptions: {
      activeTintColor: '#A6192E'
    },
  }
);

export default AuthNavigation;
