import React from "react";
import  { createAppContainer, createSwitchNavigator } from 'react-navigation'
import AppNavigator from  './AppNavigator'
import Auth from  './AuthNavigation'

const SwitchNavigator = createSwitchNavigator(
  {
    Auth: Auth,
    App: AppNavigator
  },
  {
    initialRouteName: 'App',
  }
);
export const AppContainer = createAppContainer(SwitchNavigator);
