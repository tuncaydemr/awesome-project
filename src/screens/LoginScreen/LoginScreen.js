import { StyleSheet, Text, TextInput, TouchableOpacity, View, ScrollView } from 'react-native'
import React, { useState } from 'react'
import Button from '../../components/Button/Button'
import SignUpScreen from '../SignUpScreen/SignUpScreen'
import SocialLogin from './SocialLogin'
import { useNavigation } from '@react-navigation/native'

const LoginScreen = () => {
   const [isSignup, setIsSignup] = useState(false)
   const { navigate } = useNavigation()

   return (
      <ScrollView style={styles.loginView} contentContainerStyle={styles.contentContainer}>
         {!isSignup && <View style={[styles.contentContainer, { width: '100%' }]}>
            <Text style={styles.loginText}>Login Here</Text>
            <Text>Welcome Back!</Text>

            <View style={styles.inputArea}>
               <TextInput
                  placeholder='Email'
                  style={styles.inputField}
                  inputMode='text'
                  keyboardType='email-address'
                  autoCapitalize='none'
               />
               <TextInput
                  placeholder='Password'
                  style={styles.inputField}
                  inputMode='text'
                  secureTextEntry={true}
               />
            </View>
            <View style={styles.forgotPasswordArea}>
               <TouchableOpacity style={styles.forgotPassword}>
                  <Text style={styles.forgotPassText}>Forgot your password?</Text>
               </TouchableOpacity>
            </View>
            <Button onPress={() => navigate('Home')} label={'Sign In'} />
            <Button
               onPress={() => setIsSignup(true)}
               label={'Create New Account'}
               style={{ backgroundColor: 'white' }}
               variant='secondary'
            />
            <SocialLogin />
         </View>}
         {isSignup && <SignUpScreen goBack={() => setIsSignup(false)} />}
      </ScrollView>
   )
}

export default LoginScreen

const styles = StyleSheet.create({
   loginView: {
      flex: 1,
      backgroundColor: 'white',
   },
   contentContainer: {
      justifyContent: 'center',
      alignItems: 'center',
      flex: 1,
   },
   loginText: {
      fontSize: 34,
      color: '#176FF2',
      fontWeight: 'bold',
   },
   inputArea: {
      marginTop: 40,
      width: '100%',
      alignItems: 'center',
      gap: 25,
   },
   inputField: {
      borderWidth: 1,
      backgroundColor: '#F1F4FF',
      width: '80%',
      height: 48,
      padding: 10,
      borderColor: '#176FF2',
      borderRadius: 10,
   },
   forgotPasswordArea: {
      width: '100%',
      alignItems: 'flex-end',
   },
   forgotPassword: {
      paddingHorizontal: 40,
      paddingVertical: 10,
   },
   forgotPassText: {
      color: '#176FF2',
   },
})
