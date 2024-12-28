import { StyleSheet, Text, Pressable } from 'react-native'
import React from 'react'

const Button = ({label, style, onPress, variant='primary', children}) => {
  return (
    <Pressable onPress={onPress} style={({ pressed }) => [styles.button, style, pressed ? {opacity: 0.9} : {} ]}>
        {!children &&
            <Text style={[ styles.buttonText, variant!=='primary' ? {color: 'black'} : {} ]}>{label}</Text>}
        {children}
    </Pressable>
  )
}

export default Button

const styles = StyleSheet.create({
    button: {
        backgroundColor: '#176FF2',
        width: '80%',
        alignItems: 'center',
        justifyContent: 'center',
        height: 42,
        borderRadius: 10,
        marginTop: 20,
    },
    buttonText: {
        color: 'white',
    },
})
