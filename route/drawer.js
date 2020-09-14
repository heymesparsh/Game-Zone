import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';
import HomeStack from './homeStack';
import AboutStack from './aboutStack';

const drawer = createDrawerNavigator();

export default function RootDrawerNavigator() {
   return (
      <NavigationContainer>
         <drawer.Navigator>
            <drawer.Screen name='Home' component={ HomeStack } />
            <drawer.Screen name='About' component={ AboutStack } />
         </drawer.Navigator>
      </NavigationContainer>
   )
}