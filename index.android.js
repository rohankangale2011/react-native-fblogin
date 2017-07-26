import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View } from 'react-native';
import LoginContainer from './app/containers/login/login.container';
import MainContainer from './app/containers/main/main.container';
import { StackNavigator } from 'react-navigation';

const AppComponent = StackNavigator({
  Login: { screen: MainContainer },
  Main: { screen: MainContainer }
},
  {
    headerMode: 'none'
  }
);

AppRegistry.registerComponent('RNativeApp', () => AppComponent);
