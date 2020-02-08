import {Button, Text, View} from "react-native";
import * as React from "react";
import { stylesGlobal } from '../Layout';

export interface Props {
  navigation: any
}

export const HomeScreen: React.FC<Props> = (props) => {
  return (
    <View style={stylesGlobal.root}>
      <Text>Home Screen</Text>
      <Button title={"Go to New Message"} onPress={() => props.navigation.navigate('NewMessage')}/>
    </View>
  );
}
