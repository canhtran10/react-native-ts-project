import {AsyncStorage, Button, Text, View} from "react-native";
import * as React from "react";
import {stylesGlobal} from '../Layout';
import {Component, useEffect} from "react";
import {connect} from "react-redux";
import {increment, decrement} from "../Store/Action";
import messaging from '@react-native-firebase/messaging';

export interface Props {
  navigation: any,
  onIncrement: any,
}

class _Home extends Component<Props>{
  constructor(props: Props) {
    super(props);

    this.state = {

    }
  }

  async registerAppWithFCM() {
    await messaging().registerForRemoteNotifications();
  }

  async requestPermission() {
    const granted = messaging().requestPermission();

    if (granted) {
      console.log('User granted messaging permissions!');
    } else {
      console.log('User declined messaging permissions :(');
    }
  }

  App() {
    useEffect(() => {
      const unsubscribe = messaging().onMessage(async remoteMessage => {
        console.log('FCM Message Data:', remoteMessage.data);

        // Update a users messages list using AsyncStorage
        const currentMessages = await AsyncStorage.getItem('messages');
        const messageArray = JSON.parse(currentMessages);
        messageArray.push(remoteMessage.data);
        await AsyncStorage.setItem('messages', JSON.stringify(messageArray));
      });
    }, []);
  }

  async componentDidMount() {
    this.props.onIncrement(1);

    console.log(await messaging().getToken());

    this.App();

    messaging().setBackgroundMessageHandler(async remoteMessage => {
      console.log('Message handled in the background!', remoteMessage);
    });
  }

  render() {
    return (
      <View style={stylesGlobal.root}>
        <Text>Home Screen</Text>
        <Button title={"Go to New Message"} onPress={() => {
          this.props.navigation.jumpTo('NewMessageTab', { owner: 'Michaś' });
        } }/>
        <Button title={"Go to Help"} onPress={() => this.props.navigation.navigate('Help')}/>
      </View>
    );
  }
};

const mapStateToProps = (store: any) => {
  return {
    counter: store.counter
  }
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    onIncrement: (number: any) => dispatch(increment(number)), //saga
    onDncrement: (number: any) => dispatch(decrement(number)),
  }
};

export const Home = connect(mapStateToProps, mapDispatchToProps)(_Home);
