import React from 'react';
import { StyleSheet, View } from 'react-native';

export default function Card(props) {
   return (
      <View style={styles.card}>
         <View style={styles.cardContent}>
            { props.children }
         </View>
      </View>
   )
}

const styles = StyleSheet.create({
   card: {
      borderRadius: 8,
      marginVertical: 15,
      elevation: 3,
      shadowOffset: { width: 1, height: 1},
      shadowOpacity: 0.3,
      shadowRadius: 2,
      backgroundColor: '#fff',
   },
   cardContent: {
      marginHorizontal: 18,
      marginVertical: 8,
   }
})