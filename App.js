import React, { useState } from 'react';
import * as Font from 'expo-font';
import { AppLoading } from 'expo';
import RootDrawerNavigator from './route/drawer';

const loadFonts = () => {
   return(
      Font.loadAsync({
         'kufam-simple': require('./assets/Kufam-VariableFont_wght.ttf'),
         'kufam-italic': require('./assets/Kufam-Italic-VariableFont_wght.ttf')
      })
   )
}

export default function App() {

   const [FontsLoaded, setFontsLoaded] = useState(false);

   if(FontsLoaded) {
      return(
         <RootDrawerNavigator />
      );
   }
   else {
      return(
         <AppLoading 
            startAsync={loadFonts}
            onFinish={() => setFontsLoaded(true)}
         />
      )
   }
};


