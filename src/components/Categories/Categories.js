import { ScrollView, StyleSheet, Text, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'

const data = [
    {id: 1, label: 'My Tasks'},
    {id: 2, label: 'In-progress'},
    {id: 3, label: 'Completed'},
]

const Categories = () => {
    const [selectedCategory, setSelectedCategory] = useState([])

    const onSelect = (id) => {
        if(selectedCategory.includes(id)) {
            setSelectedCategory(selectedCategory ?.filter((item) => item !== id))
        } else {
            setSelectedCategory([...selectedCategory, id])
        }
    }

    const Chip = ({label, id}) => {
        return (
            <TouchableOpacity onPress={() => onSelect(id)} style={[
                styles.chip,
                selectedCategory.includes(id) ? {backgroundColor: '#176FF2'} : {}
            ]}>
                <Text style={selectedCategory.includes(id) ? {color: 'white'} : {}}>{label}</Text>
            </TouchableOpacity>
        )
    }

    return (
        <ScrollView horizontal contentContainerStyle={styles.listContainer} showsHorizontalScrollIndicator={false}>
            {data.map((item, index) => <Chip {...item} key={index} />)}
        </ScrollView>
    )
}

export default Categories

const styles = StyleSheet.create({
    listContainer: {
        gap: 16,
        paddingLeft: 20,
        marginTop: 20,
        flexDirection: 'row'
    },
    chip: {
        backgroundColor: '#F1F4FF',
        borderRadius: 16,
        alignItems: 'center',
        height: 40,
        justifyContent: 'center',
        padding: 10
    }
})
