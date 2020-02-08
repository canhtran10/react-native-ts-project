import {Button, Text, View} from "react-native";
import * as React from "react";

export interface Props {
  navigation: any
}

export const Setting: React.FC<Props> = (props) => {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Settings Screen</Text>
      <Button title={"Home screen"} onPress={() => props.navigation.goBack()}/>
    </View>
  );
}
