import {Button, Text, View} from "react-native";
import * as React from "react";
import {stylesGlobal} from "../Layout";

export interface Props {
  navigation: any
}

export const Help: React.FC<Props> = (props) => {
  return (
    <View style={stylesGlobal.root}>
      <Text>About Screen</Text>
      <Button title={"Home screen"} onPress={() => props.navigation.navigate('TabNavigatorBottom', {screen: 'Home'})}/>
    </View>
  )
};
