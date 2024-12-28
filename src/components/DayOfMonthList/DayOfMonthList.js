import { FlatList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'

const DayOfMonthList = ({date}) => {
    const [days, setDays] = useState()
    const [selectedDate, setSelectedDate] = useState(date)

    const generateDays = useMemo(() => {
        const date = selectedDate
        const year = date.getFullYear()
        const month = date.getMonth()

        const daysInMonth = new Date(year, month + 1,0).getDate()
        const daysArray = []

        for (let i = 1; i <= daysInMonth; i++) {
            const date = new Date(year, month, i)
            daysArray.push({
                date,
                day: date.toLocaleString('en-us', {weekday: 'short'}),
                fullDate: date?.toLocaleDateString()
            })
        }

        setDays(daysArray)

    }, [selectedDate])

    useEffect(() => {
        setSelectedDate(date)
    }, [date])

    const DateItemView = ({day, date, fullDate}) => {
        const isSelected = date?.toDateString() === selectedDate?.toDateString()

        return (
            <TouchableOpacity
                onPress={() => setSelectedDate(date)}
                style={[styles.dayItem, isSelected && styles.selectedDayItem]}
            >
                <Text style={[isSelected && styles.selectedDate]}>{day}</Text>
                <Text style={[styles.dateText, isSelected && styles.selectedDate]}>{date?.getDate()}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <View style={styles.container}>
            <FlatList
                data={days}
                horizontal
                keyExtractor={(item, index) => index.toString()}
                renderItem={({item}) => (<DateItemView {...item} />)}
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default DayOfMonthList

const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10
    },
    dayItem: {
        padding: 10,
        width: 50,
        alignItems: 'center',
        gap: 5,
        marginVertical: 10,
        height: 70,
        borderRadius: 15
    },
    dateText: {
        fontSize: 16,
        fontWeight: 'bold'
    },
    selectedDate: {
        color: 'white'
    },
    selectedDayItem: {
        backgroundColor: '#176ff2'
    }
})
