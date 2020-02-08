import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import * as React from "react";

import {HomeScreen, NewMessage, Article, Setting} from '../Container'

const Tab = createBottomTabNavigator();

export function MyTabs() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="HomeTab" component={HomeScreen} options={
        {
          tabBarIcon: ({ color }) => <Icon name="home" size={30} color={color} />
        }
      } />
      <Tab.Screen name="NewMessageTab" component={NewMessage} options={
        {
          tabBarIcon: ({ color }) => <Icon name="edit" size={30} color={color} />
        }
      } />
      <Tab.Screen name="ArticleTab" component={Article} options={
        {
          tabBarIcon: ({ color }) => <Icon name="inbox" size={30} color={color} />
        }
      } />
      <Tab.Screen name="SettingTab" component={Setting} options={
        {
          tabBarIcon: ({ color }) => <Icon name="fire" size={30} color={color} />
        }
      } />
    </Tab.Navigator>
  );
}
