import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../Button/Button'
import SearchImg from '../../assets/img/search.png'

const Search = () => {
    return (
        <Button style={styles.button}>
            <Image source={SearchImg} style={styles.buttonImg} />
        </Button>
    )
}

export default Search

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
