import {createStackNavigator} from "react-navigation-stack";
import React from "react";

const routeConfigMap = {
  Login: { screen: require('../../pages/Login').default },
  Register: { screen: require('../../pages/Register').default },
};

const stackConfig = {
  headerMode: 'none',
  initialRouteName: 'Login',
};

const Auth = createStackNavigator(routeConfigMap, stackConfig);

export default Auth;
