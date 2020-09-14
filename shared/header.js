import React from 'react';
import { Text, View, StyleSheet, Image } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons'

export default function Header({ navigation, title }) {

   const openMenu = () => {
      navigation.openDrawer()
   }

   return (
      <View style={styles.header}>
         <MaterialIcons onPress={openMenu} name='menu' style={styles.icon} size={26}/>
         <View style={styles.headTitle}>
            <Image source={require('../assets/heart_logo.png')} style={styles.logo}/>
            <Text style={styles.title}>{title}</Text>
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   header: {
      width: '100%',
      height: '100%',
      flexDirection: 'row',
      alignItems: 'center',
      justifyContent: 'center',
   },
   title: {
      letterSpacing: 1,
      fontSize: 22,
      fontWeight: 'bold',
      color: 'white',
   },
   icon: {
      color: 'white',
      position: 'absolute',
      left: 0,
   },
   headTitle: {
      flexDirection: 'row',
   },
   logo: {
      width: 26,
      height: 26,
      marginHorizontal: 10,
   }
})