import {Button, Text, View} from "react-native";
import * as React from "react";

export interface Props {
  navigation: any
}

export const NewMessage: React.FC<Props> = props => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>New Message Screen</Text>
      <Button title={"Home screen"} onPress={() => props.navigation.goBack()}/>
    </View>
  );
}
