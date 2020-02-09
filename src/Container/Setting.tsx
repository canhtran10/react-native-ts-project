import {Button, Text, View} from "react-native";
import * as React from "react";
import {stylesGlobal} from "../Layout";
import {Component} from "react";

export interface Props {
  navigation: any
}

export class Setting extends Component<Props> {

  render() {
    return (
      <View style={stylesGlobal.root}>
        <Text>Settings Screen</Text>
        <Button title={"Home screen"} onPress={() => this.props.navigation.goBack()}/>
      </View>
    );
  }
};
