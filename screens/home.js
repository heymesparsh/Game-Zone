import React, { useState } from 'react'
import { View, Text, ImageBackground, StyleSheet, Modal, Keyboard, TouchableWithoutFeedback } from 'react-native'
import { bgStyles, globalStyles } from '../styles/global'
import { TouchableOpacity, FlatList } from 'react-native-gesture-handler'
import Card from '../shared/card'
import { MaterialIcons } from '@expo/vector-icons'
import ReviewForm from './reviewForm'

export default function Home({ navigation }) {

   const [ModalOpen, setModalOpen] = useState(false);
   
   const [Review, setReview] = useState([
      { title: 'window films', det: 'very impressive, and attractive', rating: '5', key: '1'},
      { title: 'T-shirt buy online', det: 'not fitting well, wants to get it replaced', rating: '2', key: '2'},
      { title: 'my backpack', det: 'very impressive, and attractive', rating: '4', key: '3'}
   ]);
   const addReview = (review) => {
      review.key = Math.random().toString();
      setReview((currentReviews) => {
         return [ review, ...currentReviews ]
      });
      setModalOpen(false);
   }

   return (
      <ImageBackground source={require('../assets/game_bg.png')} style={bgStyles.bgImage}>
         <View style={globalStyles.content}>
            
            <Modal visible={ModalOpen} animationType='slide'>
               <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                  <View style={styles.modal}>
                     <MaterialIcons 
                        name='close'
                        size={20}
                        color='#fff'
                        onPress={() => setModalOpen(false)}
                        style={styles.icon}
                     />
                     <ReviewForm addReview={addReview}/>
                  </View>
               </TouchableWithoutFeedback>
            </Modal>

            <MaterialIcons 
               name='add'
               size={29}
               color='#fff'
               onPress={() => setModalOpen(true)}
               style={styles.icon}
            />

            <FlatList 
               data={Review}
               renderItem={({ item }) => (
                  <TouchableOpacity onPress={() => navigation.navigate('ReviewDetails', item)}>
                     <Card>
                        <Text style={globalStyles.titleText}>{ item.title }</Text>
                     </Card>
                  </TouchableOpacity>
               )}
            />
         </View>
      </ImageBackground>
   )
}
const styles = StyleSheet.create({
   icon: {
      backgroundColor: 'coral',
      alignSelf: 'center',
      padding: 8,
      borderRadius: 30,
      marginBottom: 10,
      marginTop: 8,
   },
   modal: {
      flex: 1,
   }
})