import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Button from '../../components/Button/Button'
import HamburgerIcon from '../../assets/img/hamburger.png'
import ProfileIcon from '../../assets/img/profile.png'
import Categories from '../../components/Categories/Categories'
import ProjectList from '../../components/Projects/ProjectList'
import { useNavigation } from '@react-navigation/native'

const HomeScreen = () => {
    const { navigate } = useNavigation()

    return (
        <ScrollView style={styles.container}>
            <View style={styles.homeField}>
                <Button style={styles.menuButton}>
                    <Image source={HamburgerIcon} style={styles.menuIcon} />
                </Button>
                <Button style={styles.menuButton}>
                    <Image source={ProfileIcon} style={styles.menuIcon} />
                </Button>
            </View>
            <View style={{padding: 15}}>
                <Text style={styles.headerTitle}>Hello Pradeep!</Text>
                <Text>Have a nice day.</Text>
            </View>
            <View>
                <Categories />
            </View>
            <ProjectList />
        </ScrollView>
    )
}

export default HomeScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    homeField: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    menuButton: {
        backgroundColor: 'transparent',
        width: 40,
        margin: 10,
    },
    menuIcon: {
        width: 32,
        height: 32,
        resizeMode: 'contain'
    },
    headerTitle: {
        fontSize: 24,
        fontWeight: 'bold',
    },
})
