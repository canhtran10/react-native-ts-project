import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {StackNavigator} from './Navigation';

export interface Props {

}

const App: React.FC<Props> = (props) => {
  return (
    <NavigationContainer>
      <StackNavigator/>
    </NavigationContainer>
  );
}

export default App;
