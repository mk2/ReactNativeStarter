/**
 * アプリ
 */

import React, { Component } from "react";
import {
  createAppContainer,
  createStackNavigator,
  SafeAreaView,
} from "react-navigation";

import Home from "@src/screens/home/Home";

const RootNavigator = createStackNavigator(
  {
    Home,
  },
  {
    initialRouteKey: "Home",
    headerMode: "float",
  }
);

const AppNavigator = createStackNavigator(
  {
    Root: RootNavigator,
  },
  {
    mode: "modal",
    headerMode: "none",
  }
);

const AppContainer = createAppContainer(AppNavigator);

export default class App extends Component {
  render() {
    return (
      <>
        <AppContainer />
        <SafeAreaView />
      </>
    );
  }
}
