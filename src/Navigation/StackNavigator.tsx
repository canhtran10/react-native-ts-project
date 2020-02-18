import {createStackNavigator} from "@react-navigation/stack";
import * as React from "react";
import {Help} from '../Container';
import {TabNavigatorBottom} from "./TabNavigatorBottom";
import {View, Text} from "react-native";

const Stack = createStackNavigator();

export interface Props {

}

export const StackNavigator: React.FC<Props> = (props) => {
  return (<Stack.Navigator>
    <Stack.Screen name="TabNavigatorBottom" component={TabNavigatorBottom}
        options = {{
          header: ({ scene, previous, navigation }) => {
            // console.log('x', scene)
            const { options } = scene.descriptor;
            // @ts-ignore
            const { route } = scene.route;
            const title =
              route !== undefined && route.params !== undefined && route.params.screen !== undefined
              ? route.params.screen
              : options.headerTitle !== undefined
                ? options.headerTitle
                : options.title !== undefined
                ? options.title
                : scene.route.name;

            return (
              <View style={{backgroundColor: 'green', paddingVertical: 10, justifyContent: 'center', alignItems: 'flex-start'}}>
                <Text style={{color: 'white', fontWeight: 'bold'}}>{title}</Text>
              </View>
            );
          }
        }}
    />
    <Stack.Screen name="Help" component={Help} options={
      {title: 'Help screen now'}
    }/>
  </Stack.Navigator>)
};
