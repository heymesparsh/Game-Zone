import React from 'react'
import { Formik } from 'formik'
import { Button, View, Text} from 'react-native'
import { TextInput } from 'react-native-gesture-handler'
import { globalStyles } from '../styles/global'
import * as yup from 'yup'

const reviewSchema = yup.object({
   title: yup.string().min(3).required(),
   det: yup.string().required().min(8),
   rating: yup.string().required().test(
      'is-num-1-5', 'Rating must be no. from 1-5', (val) => {
         return parseInt(val) < 6 && parseInt(val) > 0
      }
   )
})

export default function ReviewForm({ addReview }) {
   return (
      <View style={globalStyles.content}>
         <Formik
            initialValues={{title: '', det: '', rating: ''}}
            validationSchema={reviewSchema}
            onSubmit={(values, actions) => {
               addReview(values);
               //actions.resetForm();
            }}
         >
            {(props) => (
               <View>
                  <TextInput 
                     placeholder='Review Title'
                     onChangeText={props.handleChange('title')}
                     value={props.values.title}
                     style={globalStyles.input}
                     onBlur={props.handleBlur('title')}
                  />
                  <Text style={globalStyles.errorText}>{ props.touched.title && props.errors.title }</Text>
                  <TextInput 
                     placeholder='Review Body'
                     onChangeText={props.handleChange('det')}
                     value={props.values.det}
                     style={globalStyles.input}
                     multiline minHeight={60}
                     onBlur={props.handleBlur('det')}
                  />
                  <Text style={globalStyles.errorText}>{ props.touched.det && props.errors.det }</Text>
                  <TextInput 
                     placeholder='Rating (1-5)'
                     onChangeText={props.handleChange('rating')}
                     value={props.values.rating}
                     style={globalStyles.input}
                     keyboardType='numeric'
                     onBlur={props.handleBlur('rating')}
                  />
                  <Text style={{...globalStyles.errorText, marginBottom: 30}}>{ props.touched.rating && props.errors.rating }</Text>
                  
                  <Button title='add' color='coral' onPress={props.handleSubmit}/>
               </View>
            )}
         </Formik>
      </View>
      
   )
}