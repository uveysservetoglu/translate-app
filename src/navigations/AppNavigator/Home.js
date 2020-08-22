import { createStackNavigator } from 'react-navigation-stack';
import React from 'react';
import Home from "../../pages/Home";

const routeConfigMap = {
  Home : {
    screen:Home,
    navigationOptions: {
      title: 'Dolphin Translate'
    }
  },
};

const stackConfig = {
  initialRouteName: 'Home',
  defaultNavigationOptions: {
    headerStyle: {
      backgroundColor: '#002841',
    },
    headerTintColor: '#fff',
  }
};

const HomeNavigator = createStackNavigator(routeConfigMap, stackConfig);

export default HomeNavigator;
