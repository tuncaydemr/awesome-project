import { StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import Button from '../../components/Button/Button'
import SocialLogin from '../LoginScreen/SocialLogin'

const SignUpScreen = ({ goBack }) => {
  return (
	<View style={[styles.contentContainer, {width: '100%'}]}>
		<Text style={styles.signUpText}>Create Account</Text>

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
			<TextInput
				placeholder='Confirm Password'
				style={styles.inputField}
				inputMode='text'
				secureTextEntry={true}
			/>
		</View>
		<Button label={'Sign Up'}/>
		<Button
			onPress={goBack}
			style={{ backgroundColor: 'white' }}
			label={'Already have an account'}
			variant='secondary'
		/>
		<SocialLogin />
	</View>
  )
}

export default SignUpScreen

const styles = StyleSheet.create({
    contentContainer: {
        justifyContent: 'center',
        alignItems: 'center',
        flex: 1,
    },
    signUpText: {
        fontSize: 34,
        color: '#176FF2',
        fontWeight: 'bold',
    },
	inputArea: {
        marginTop: 40,
        width: '100%',
        alignItems: 'center',
        gap: 15,
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
})
