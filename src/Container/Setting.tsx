import {Button, Text, View} from "react-native";
import * as React from "react";
import {stylesGlobal} from "../Layout";
import {Component} from "react";
import * as RootNavigation from '../Navigation/RootNavigation';

export interface Props {
  navigation: any
}

export class Setting extends Component<Props> {

  componentDidMount(): void {

  }

  pressButton = () => {
    RootNavigation.navigate('Home', {screen: 'Home'})
  };

  render() {
    return (
      <View style={stylesGlobal.root}>
        <Text>Settings Screen</Text>
        <Button title={"Home screen"} onPress={() => this.pressButton}/>
      </View>
    );
  }
};
