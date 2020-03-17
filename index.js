/**
 * @format
 */

import {AppRegistry} from 'react-native';
import App from './src/App';
import {name as appName} from './app.json';
import 'react-native-gesture-handler';

import firebase from "react-native-firebase";

AppRegistry.registerComponent(appName, () => App);
// New task registration
AppRegistry.registerHeadlessTask('RNFirebaseBackgroundMessage', () => async (message) => {
  // handle your message
  console.log('RNFirebaseBackgroundMessage', message)

  return Promise.resolve();
});
