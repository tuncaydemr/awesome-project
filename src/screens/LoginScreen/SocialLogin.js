import { Image, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import GoogleImg from '../../assets/img/google.png'
import FbImg from '../../assets/img/facebook.png'
import AppleImg from '../../../src/assets/img/apple.png'
import Button from '../../components/Button/Button'

const SocialLogin = () => {
  return (
    <View style={{ marginTop: 40 }}>
        <Text style={{ alignSelf: 'center' }}>Or continue with</Text>
        <View style={styles.socialMediaArea}>
            <Button style={styles.socialMedia}>
                <Image source={GoogleImg} />
            </Button>
            <Button style={styles.socialMedia}>
                <Image source={FbImg} />
            </Button>
            <Button style={styles.socialMedia}>
                <Image source={AppleImg} />
            </Button>
        </View>
    </View>
  )
}

export default SocialLogin

const styles = StyleSheet.create({
    socialMediaArea: {
        flexDirection: 'row',
        gap: 4,
    },
    socialMedia: {
        width: 60,
        backgroundColor: '#ECECEC',
    }
})
