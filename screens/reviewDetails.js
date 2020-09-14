import React from 'react'
import { View, Text, Image, StyleSheet, ImageBackground } from 'react-native';
import Card from '../shared/card';
import { Images } from '../shared/heartRating';
import { globalStyles, bgStyles } from '../styles/global';

export default function ReviewDetails({ route }) {

   return(
      <ImageBackground source={require('../assets/game_bg.png')} style={bgStyles.bgImage}>
         <View style={globalStyles.content}>
            <Card>
               <Text style={globalStyles.titleText}>{ route.params.title }</Text>
               <Text style={globalStyles.titleText}>{ route.params.det }</Text>
               <View style={styles.revRating}>
                  <Text>GameZone Rating : </Text>
                  <Image source={Images.ratings[route.params.rating]}/>
               </View>
            </Card>
         </View>
      </ImageBackground>
   );
};

const styles = StyleSheet.create({
   revRating: {
      flexDirection: 'row',
      borderTopWidth: 1,
      borderColor: '#ddd',
      paddingTop: 10,
      marginTop: 10,
      justifyContent: 'center',
      alignContent: 'center',
   }
})
