import { Modal, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import DatePicker from 'react-native-date-picker'

const DatePickerModal = ({isVisible, onClose, selectedDate, handleDateChange}) => {
    return (
        <View style={styles.modalContainer}>
            <DatePicker
                date={selectedDate}
                open={isVisible}
                modal
                mode='date'
                onCancel={onClose}
                onConfirm={(date) => {
                    handleDateChange(date)
                    onClose()
                }}
            />
        </View>
    )
}

export default DatePickerModal

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    }
})
