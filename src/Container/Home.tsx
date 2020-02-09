import {Button, Text, View} from "react-native";
import * as React from "react";
import {stylesGlobal} from '../Layout';
import {Component} from "react";
import {connect} from "react-redux";
import {loadMessage, loadMessages} from "../Store/Action";

export interface Props {
  navigation: any,
  loadMessages: any,
  loadMessage: any,
}

class _Home extends Component<Props>{
  constructor(props: Props) {
    super(props);

    this.state = {

    }
  }

  componentDidMount(): void {
    //this.props.loadMessages([]);
    this.props.loadMessage([]);
  }

  render() {
    return (
      <View style={stylesGlobal.root}>
        <Text>Home Screen</Text>
        <Button title={"Go to New Message"} onPress={() => this.props.navigation.navigate('NewMessage')}/>
        <Button title={"Go to Help"} onPress={() => this.props.navigation.navigate('Help')}/>
      </View>
    );
  }
};

const mapStateToProps = (store: any) => {
  return {
    messages: store.messages
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    loadMessages: (messages: any) => dispatch(loadMessages(messages)), //saga
    loadMessage: (messages: any) => dispatch(loadMessage(messages)),
  }
};

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home);
