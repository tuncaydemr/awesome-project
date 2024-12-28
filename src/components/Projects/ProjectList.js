import { FlatList, Image, ImageBackground, SectionList, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useMemo, useState } from 'react'
import { projects } from '../../data/projects'
import CardImg from '../../assets/img/card.png'
import moment from 'moment'
import TaskImg from '../../assets/img/calendar.png'

const ProjectList = () => {
    const [selectedCard, setSelectedCard] = useState('')
    const [tasksList, setTasksList] = useState([])

    const taskGroup = useMemo(() => {
        const tasks = projects?.find((project) => project.id === selectedCard)?.tasks

        const group = {}
        tasks?.map((task) => {
            const existingItem = task?.status

            group[existingItem] = group[existingItem] ? [...group[existingItem], task] : [task]
        })

        const groupArray = Object?.keys(group).map((key) => {
            return {
                label: key,
                data: group[key]
            }
        })

        return groupArray

    }, [selectedCard])

    const Card = ({id, label, name, image, startDate}) => {
        return (
            <TouchableOpacity onPress={() => setSelectedCard(id)} style={styles.card}>
                <ImageBackground style={[
                    styles.imageBackground,
                    selectedCard === id ? styles.selectedCard : styles.notSelectedCard]}
                    resizeMode='stretch'
                    source={CardImg}
                >
                    <View style={styles.cardContent}>
                        <View>
                            {image && (
                                <Image source={image} style={{height: 28, width: 28}} />
                            )}
                            <Text style={[styles.text, {fontSize: 14}]}>{label}</Text>
                        </View>
                        <Text style={[styles.text, {fontSize: 28}]}>{name}</Text>
                        <Text style={[styles.text, {fontSize: 14}]}>{moment(startDate).format('DD-MM-YYYY')}</Text>
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
    }

    const TaskView = ({name, startDate}) => {
        return (
            <View style={styles.taskViewArea}>
                <View style={styles.taskViewImageArea}>
                    <Image source={TaskImg} style={{width: 40, height: 40}} />
                </View>
                <View style={styles.taskViewTextArea}>
                    <Text style={styles.taskViewText}>{name}</Text>
                    <Text>{moment(startDate).startOf('day').fromNow()}</Text>
                </View>
            </View>
        )
    }

    return (
        <View style={{flex: 1, marginTop: 20}}>
            <FlatList
                horizontal
                data={projects}
                keyExtractor={(item) => item.id}
                renderItem={({item}) => <Card {...item} />}
                style={styles.flatlist}
                contentContainerStyle={{gap: 10}}
                showsHorizontalScrollIndicator={false}
            />
            {selectedCard &&
            <SectionList
                style={{padding: 20}}
                scrollEnabled={false}
                sections={taskGroup}
                keyExtractor={(item, index) => item + index}
                renderItem={({item}) => <TaskView {...item} />}
                renderSectionHeader={({section:{label}}) => (
                    <Text style={{fontSize: 18, fontWeight: 'bold'}}>{label}</Text>
                )}
            />}
        </View>
    )
}

export default ProjectList

const styles = StyleSheet.create({
    flatlist: {
        padding: 15,
    },
    card: {
        width: 260,
        height: 180,
    },
    imageBackground: {
        height: '100%',
    },
    text: {
        color: 'white',
        fontWeight: 'bold'
    },
    cardContent: {
        justifyContent: 'space-around',
        height: '95%',
        paddingLeft: 10
    },
    selectedCard: {
        opacity: 1
    },
    notSelectedCard: {
        opacity: 0.7
    },
    taskViewArea: {
        flex: 1,
        flexDirection: 'row',
        padding: 20,
    },
    taskViewImageArea: {
        backgroundColor: '#176FF2',
        width: 60,
        height: 60,
        borderRadius: 16,
        justifyContent: 'center',
        alignItems: 'center'
    },
    taskViewTextArea: {
        paddingHorizontal: 10,
        justifyContent: 'center'
    },
    taskViewText: {
        fontSize: 16,
        fontWeight: 'bold'
    }
})
