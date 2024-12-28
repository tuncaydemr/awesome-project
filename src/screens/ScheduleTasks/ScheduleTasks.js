import { StyleSheet, Text, View } from 'react-native'
import React, { useCallback, useState } from 'react'
import BackButton from '../../components/BackButton/BackButton'
import Search from '../../components/Search/Search'
import { useNavigation } from '@react-navigation/native'
import Button from '../../components/Button/Button'
import DatePickerModal from '../../components/DatePicker/DatePickerModal'
import DayOfMonthList from '../../components/DayOfMonthList/DayOfMonthList'

const ScheduleTasks = () => {
    const { navigate } = useNavigation()
    const [currentDate, setCurrentDate] = useState(new Date())
    const [isModalVisible, setIsModalVisible] = useState(false)

    const getMonth = useCallback(() => {
        const options = {year: 'numeric', month: 'short'}

        return currentDate.toLocaleDateString('en-us', options)
    }, [currentDate])

    return (
        <View style={styles.container}>
            <View style={styles.homeField}>
                <BackButton onPress={() => navigate('HomeScreen')} />
                <Search />
            </View>
            <View style={styles.homeField}>
                <Button onPress={() => setIsModalVisible(true)} style={styles.dateButton}>
                    <Text style={styles.dateText}>{getMonth()}</Text>
                </Button>
                <Button label={'Add Task +'} style={{width: 120}}></Button>
            </View>
            <View>
                <DatePickerModal
                    isVisible={isModalVisible}
                    selectedDate={currentDate}
                    onClose={() => setIsModalVisible(false)}
                    handleDateChange={(date) => {
                        setCurrentDate(date)
                        setIsModalVisible(false)
                    }}
                />
            </View>
            {/* <View style={{flex: 1}}> */}
                <DayOfMonthList date={currentDate} />
            {/* </View> */}
        </View>
    )
}

export default ScheduleTasks

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    homeField: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10
    },
    dateText: {
        fontSize: 24,
        fontWeight: 'bold'
    },
    dateButton: {
        backgroundColor: 'transparent',
        width: 110
    }
})
