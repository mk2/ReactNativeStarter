/**
 * ホーム画面
 */

import React, { Component } from "react";
import { observer } from "mobx-react";
import { Text, View } from "react-native";

@observer
export default class Home extends Component {
  render() {
    return (
      <View>
        <Text>Home</Text>
      </View>
    );
  }
}
