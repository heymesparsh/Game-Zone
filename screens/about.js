import React from 'react'
import { View, StyleSheet, Text, ImageBackground } from 'react-native'
import { bgStyles } from '../styles/global'

export default function About() {
   return(
      <ImageBackground source={require('../assets/game_bg.png')} style={bgStyles.bgImage}>
         <View style={styles.content}>
            <Text>About Screen</Text>
         </View>
      </ImageBackground>
   )
}

const styles = StyleSheet.create({
   content: {
      padding: 30,
   }
})