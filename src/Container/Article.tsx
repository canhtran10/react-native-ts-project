import {Button, Text, View} from "react-native";
import * as React from "react";

// @ts-ignore
export function Article({ navigation }) {
  return (
    <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <Text>Article Screen</Text>
      <Button title={"Home screen"} onPress={() => navigation.goBack()}/>
    </View>
  );
}

