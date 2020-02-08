import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { StackNavigator } from './Navigation';

function App() {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}

export default App;
