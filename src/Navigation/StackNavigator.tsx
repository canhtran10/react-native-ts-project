import {createStackNavigator} from "@react-navigation/stack";
import * as React from "react";
import {HomeScreen, NewMessage, Article, Setting} from '../Container'

const Stack = createStackNavigator();

export function StackNavigator() {
  return (<Stack.Navigator>
    <Stack.Screen name="Home" component={HomeScreen} options={
      {title: 'Home screen now'}
    }/>
    <Stack.Screen name="NewMessage" component={NewMessage}/>
    <Stack.Screen name="Article" component={Article}/>
    <Stack.Screen name="Setting" component={Setting}/>
  </Stack.Navigator>)
}
