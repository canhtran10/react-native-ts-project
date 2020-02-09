import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './Navigation';
import {AppState} from "react-native";
import {Component} from "react";
import { navigationRef } from './Navigation';

export interface Props {
  navigation?: any,
  appState?: any
}

interface State {
  appState: any
}

class App extends Component<Props, State>{

  constructor(props: Props) {
    super(props);

    this.state = {
      appState: props.appState ? props.appState : AppState.currentState
    }

  }

  componentDidMount(): void {

  }

  componentWillUnmount(): void {

  }

  shouldComponentUpdate(nextProps: Readonly<Props>, nextState: Readonly<State>, nextContext: any): boolean {
    return true;
  }

  render(){
    return (
      <NavigationContainer ref={navigationRef}>
        <StackNavigator/>
      </NavigationContainer>
    );
  }


}

export default App;
