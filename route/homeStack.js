import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../screens/home';
import ReviewDetails from '../screens/reviewDetails';
import Header from '../shared/header';

const Stack = createStackNavigator();
const myOptions = (navigation) => {
   return {
      headerTitle: () => <Header navigation={navigation} title='GameZone'/>,
      headerTintColor: 'white',
      headerStyle: {
         backgroundColor: 'coral',
         height: 80,
      },
   }
}

export default function HomeStack({ navigation }) {
   return(
      <Stack.Navigator>
         <Stack.Screen name='Home' component={Home} options={myOptions(navigation)}/>
         <Stack.Screen 
            name='ReviewDetails' 
            component={ReviewDetails} 
            options={{
               title: 'Review Details',
               headerTintColor: 'white',
               headerStyle: {
                  backgroundColor: 'coral',
                  height: 80,
               },
               headerTitleStyle: {
                  letterSpacing: 1,
                  fontWeight: 'bold',
               },
            }}
         />
      </Stack.Navigator>
   )
}