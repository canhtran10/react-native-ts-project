import { createDrawerNavigator } from '@react-navigation/drawer';
import {HomeScreen, NewMessage, Article, Setting} from "../Container";

const DrawerNavigator = createDrawerNavigator();

export function MyDrawer() {
  return (
    <DrawerNavigator.Navigator>
      <DrawerNavigator.Screen name="Home" component={HomeScreen} />
      <DrawerNavigator.Screen name="NewMessage" component={NewMessage} />
      <DrawerNavigator.Screen name="Article" component={Article} />
      <DrawerNavigator.Screen name="Setting" component={Setting} />
    </DrawerNavigator.Navigator>
  );
}
