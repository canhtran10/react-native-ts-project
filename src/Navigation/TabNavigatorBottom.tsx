import {createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import Icon from "react-native-vector-icons/FontAwesome";
import * as React from "react";

import {Article, Home, NewMessage, Setting} from '../Container'

const Tab = createBottomTabNavigator();

export interface Props {

}

export const TabNavigatorBottom: React.FC<Props> = (props) => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="HomeTab" component={Home} options={
                {
                    title: 'Home',
                    tabBarIcon: ({color}) => <Icon name="home" size={30} color={color}/>
                }
            }/>
            <Tab.Screen name="NewMessageTab" component={NewMessage} options={
                {
                    title: 'New Message',
                    tabBarIcon: ({color}) => <Icon name="edit" size={30} color={color}/>
                }
            }/>
            <Tab.Screen name="ArticleTab" component={Article} options={
                {
                    title: 'Article',
                    tabBarIcon: ({color}) => <Icon name="inbox" size={30} color={color}/>
                }
            }/>
            <Tab.Screen name="SettingTab" component={Setting} options={
                {
                    title: 'Settings',
                    tabBarIcon: ({color}) => <Icon name="cog" size={30} color={color}/>
                }
            }/>
        </Tab.Navigator>
    );
};
