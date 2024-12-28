import { Image } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import HomeScreen from './HomeScreen'
import ScheduleTasks from '../ScheduleTasks/ScheduleTasks'

import HomeImg from '../../assets/img/home.png'
import HomeFilled from '../../assets/img/home-filled.png'
import ScheduleImg from '../../assets/img/calendar.png'



const Tab = createBottomTabNavigator()

const HomeTabNavigator = () => {
  return (
    <Tab.Navigator>
        <Tab.Screen
            name='HomeScreen'
            component={HomeScreen}
            options={{
                headerShown: false,
                tabBarIcon: ({ focused }) => (
                    <Image source={focused ? HomeFilled : HomeImg} style={{width: 28, height:28}}/>
                ),
                tabBarLabel: 'Home',
            }}
        />
        <Tab.Screen
            name='ScheduleTasks'
            component={ScheduleTasks}
            options={{
                headerShown: false,
                tabBarIcon: () => (
                    <Image source={ScheduleImg} style={{width: 24, height:24}}/>
                ),
                tabBarLabel: 'Schedule',
            }}
        />
    </Tab.Navigator>
  )
}

export default HomeTabNavigator
