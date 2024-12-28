import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../Button/Button'
import ArrowImg from '../../assets/img/arrow.png'

const BackButton = ({onPress}) => {
    return (
        <Button onPress={onPress} style={styles.button}>
            <Image source={ArrowImg} style={styles.buttonImg} />
        </Button>
    )
}

export default BackButton

const styles = StyleSheet.create({
    button: {
        backgroundColor: 'transparent',
        width: 32,
        height: 32,
    },
    buttonImg: {
        width: 24,
        height: 24,
    }
})
