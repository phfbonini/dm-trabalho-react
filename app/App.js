import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Home from './src/pages/Home';
import Detalhes from './src/pages/Detalhes';
import Agentes from './src/pages/Agentes'; 
import Login from './src/pages/Login';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
        <Stack.Screen name="Detalhes" component={Detalhes} />
        <Stack.Screen name="Agentes" component={Agentes} /> 
      </Stack.Navigator>
    </NavigationContainer>
  );
}
