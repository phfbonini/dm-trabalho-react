import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/pages/Home';
import Detalhes from './src/pages/Detalhes';
import PaginaExtra from './src/pages/PaginaExtra';
import DetalhesAgente from './src/pages/DetalhesAgente';
import Login from './src/pages/Login';

const Stack = createNativeStackNavigator();
const Tab = createBottomTabNavigator();

const HomeStack = () => (
  <Stack.Navigator>
  <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Home" component={Home} />
    <Stack.Screen name="Detalhes" component={Detalhes} />
  </Stack.Navigator>
);

const ExtraStack = () => (
  <Stack.Navigator>
  <Stack.Screen name="Login" component={Login} />
    <Stack.Screen name="Pagina Extra" component={PaginaExtra} />
    <Stack.Screen name="DetalhesAgente" component={DetalhesAgente} />
  </Stack.Navigator>
);

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen name="Home" component={HomeStack} />
        <Tab.Screen name="Página Extra" component={ExtraStack} />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
