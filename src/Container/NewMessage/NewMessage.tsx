import {Button, Text, View} from "react-native";
import * as React from "react";
import {stylesGlobal} from "../../Layout";
import {Component} from "react";

export interface Props {
    navigation: any,
    route?: any,
}

export interface State {
    owner?: string
}

export class NewMessage extends Component<Props, State> {
    constructor(props: Props) {
        super(props);
        const owner = this.props.route.params && this.props.route.params.owner ? this.props.route.params.owner : null;
        this.state = {
            owner: owner
        }
    }

    render() {
        let {owner} = this.state;
        return (
            <View style={stylesGlobal.root}>
                <Text>New Message Screen {owner}</Text>
                <Button title={"Home screen"} onPress={() => this.props.navigation.goBack()}/>
            </View>
        );
    }
}
