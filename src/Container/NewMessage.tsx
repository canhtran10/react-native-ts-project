import {Button, Text, View} from "react-native";
import * as React from "react";
import {stylesGlobal} from "../Layout";

export interface Props {
  navigation: any
}

export const NewMessage: React.FC<Props> = props => {
  return (
    <View style={stylesGlobal.root}>
      <Text>New Message Screen</Text>
      <Button title={"Home screen"} onPress={() => props.navigation.goBack()}/>
    </View>
  );
};
