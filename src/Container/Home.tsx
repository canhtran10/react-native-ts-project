import {Button, Text, View} from "react-native";
import * as React from "react";
import {stylesGlobal} from '../Layout';
import {Component} from "react";

export interface Props {
  navigation: any
}

export class Home extends Component<Props>{
  constructor(props: Props) {
    super(props);

    this.state = {

    }
  }

  render() {
    return (
      <View style={stylesGlobal.root}>
        <Text>Home Screen</Text>
        <Button title={"Go to New Message"} onPress={() => this.props.navigation.navigate('NewMessage')}/>
        <Button title={"Go to Help"} onPress={() => this.props.navigation.navigate('Help')}/>
      </View>
    );
  }
};
