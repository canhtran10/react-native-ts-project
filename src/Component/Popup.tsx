import {Button, Text, View} from "react-native";
import * as React from "react";
import {stylesGlobal} from "../Layout";

// @ts-ignore
export function Popup({navigation}) {
    return (
        <View style={stylesGlobal.root}>
            <Text>Article Screen</Text>
            <Button title={"Home screen"} onPress={() => navigation.goBack()}/>
        </View>
    );
}

