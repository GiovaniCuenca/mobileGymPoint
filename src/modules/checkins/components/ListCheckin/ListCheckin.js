import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import styles from './ListCheckin.style'

const ListCheckin = ({ id }) => {
    return (
        <>
            <TouchableOpacity style={styles.checkinWrapper}>
                <Text style={styles.textCheckin}>Check-In #{id} </Text>
                <Text style={styles.textHour}>Hoje às 14:00</Text>
            </TouchableOpacity>
        </>
    )
}

export { ListCheckin }