import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import About from '../screens/about';
import Header from '../shared/header';

const Stack = createStackNavigator();
const myOptions = (navigation) => {
   return {
      headerTitle: () => <Header navigation={navigation} title='About'/>,
      headerTintColor: 'white',
      headerStyle: {
         backgroundColor: 'coral',
         height: 80,
      },
   }
}

export default function AboutStack({ navigation }) {
   return(
      <Stack.Navigator>
         <Stack.Screen name='About' component={About} options={myOptions(navigation)}/>
      </Stack.Navigator>
   )
}