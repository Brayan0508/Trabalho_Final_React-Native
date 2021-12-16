import React from 'react';
import { StyleSheet, Text, View, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import Routes from './src/routes';
import Login from './src/pages/Login';
import Home from './src/pages/Home';
import Detalhe from './src/pages/Detalhe';
import Carrinho from './src/pages/Carrinho';
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import CarrinhoProvider from './src/context/carrinho';
import { useCarrinho } from './src/context/carrinho';

const Stack = createNativeStackNavigator()
const Tab = createBottomTabNavigator()
export default function App() {
  return (
    <CarrinhoProvider>
      <NavigationContainer >
        <StatusBar backgroundColor="#583479" />
        <Stack.Navigator
          screenOptions={{
            headerStyle: {
              backgroundColor: '#583479',
            },
            headerTintColor: "white"
          }}
        >
          <Stack.Screen name="Login" component={Login} />
          <Stack.Screen name="Home" component={Home} options={{ headerShown: false }} />
          <Stack.Screen name="Detalhe" component={Detalhe}options={{ headerShown: false }} />
          <Stack.Screen name="Carrinho" component={Carrinho}options={{ headerShown: false }}  />
         
        </Stack.Navigator>          
      </NavigationContainer>
    </CarrinhoProvider>

  );
}


