import {Button, Text, View} from "react-native";
import * as React from "react";
import {Component} from "react";
import {stylesGlobal} from "../../Layout";

export interface Props {
    navigation: any,
    title: String,
    content: Text
}

export class Help extends Component<Props> {

    constructor(props: Props) {
        super(props);

        this.state = {
            title: props.title,
            content: props.content
        }
    }

    render() {
        return (
            <View style={stylesGlobal.root}>
                <Text>Help Screen {this.state.title}</Text>
                <Button title={"Home screen"}
                        onPress={() => this.props.navigation.navigate('TabNavigatorBottom', {screen: 'NewMessageTab'})}/>

                <Button title={"Go to New Message"} onPress={() => {
                    this.props.navigation.jumpTo('NewMessageTab', {owner: 'From Help'});
                }}/>
            </View>
        )
    }
}
