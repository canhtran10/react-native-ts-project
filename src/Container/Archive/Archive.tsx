import {Button, Text, View} from "react-native";
import * as React from "react";
import {stylesGlobal} from "../../Layout";
import {Component} from "react";

export interface Props {
    navigation: any
}

export interface State {
    navigation: any
}

// @ts-ignore
export class Archive extends Component<Props, State> {

    constructor(props: any) {
        super(props);

        this.state = {
            navigation: props.navigation
        }
    }

    render() {
        return (
            <View style={stylesGlobal.root}>
                <Text>Article Screen</Text>
                <Button title={"Article to Home screen"} onPress={() => this.state.navigation.goBack()}/>
            </View>
        );
    }
}

