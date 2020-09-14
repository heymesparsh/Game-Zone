import { StyleSheet } from 'react-native';

export const globalStyles = StyleSheet.create({
   content: {
      padding: 25,
   },
   titleText: {
      fontFamily: 'kufam-italic',
      fontSize: 22,
   },
   input: {
      borderColor: 'coral',
      borderRadius: 6,
      marginVertical: 10,
      padding: 6,
      paddingLeft: 6,
      borderBottomWidth: 1,
   },
   errorText: {
      color: 'red',
      marginLeft: 5,
   }
})

export const bgStyles = StyleSheet.create({
   bgImage: {
      flex: 1,
   }
})