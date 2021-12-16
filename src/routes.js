import React from "react";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import Home from "./pages/Home";
import Carrinho from "./pages/Carrinho";
import {SimpleLineIcons, Feather, Fontisto, AntDesign} from '@expo/vector-icons';

const Tab = createBottomTabNavigator();

export default function Routes(){
    return (
        <Tab.Navigator
            tabBarOptions={{
                style: {
                  
                    backgroundColor: '#2F4F4F',
                    borderTopColor: 'transparent'
                }, 
                tabBarActiveTintColor: 'blue',
                tabBarInactiveTintColor: 'red',
                tabStyle:{
                    paddingBottom: 10,
                    paddingTop:5
                }
                
            }}
        >
            <Tab.Screen 
            name="Home" 
            component={Home} 
            options={{
                headerShown: false,
                tabBarIcon: ()=> (
                    <SimpleLineIcons name="home" size={24} color="black" />
                )}}
            />
            <Tab.Screen 
            name="Carrinho" 
            component={Carrinho}
            options={{
                headerShown: false,
                tabBarIcon: ()=> (
                    <AntDesign name="shoppingcart" size={24} color="black" />
                )}}/>
        </Tab.Navigator>
    )

}