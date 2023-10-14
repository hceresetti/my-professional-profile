import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import PersonalDataScreen from './screens/PersonalDataScreen';

import './styles/styles';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="PersonalData" component={PersonalDataScreen} />
        {}
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
