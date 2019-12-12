import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './BottomNav.style'
import { Actions } from 'react-native-router-flux'

const BottomNav = () => {
    return (
        <View style={styles.bottomnNavContainer}>

            <TouchableOpacity onPress={() => Actions.push('home')}>
                <Text>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => Actions.popTo('homecheckins')}>
                <Text>Check-Ins</Text>
            </TouchableOpacity>

            <TouchableOpacity onPress={() => {}}>
                <Text>Pedir Ajuda</Text>
            </TouchableOpacity>

        </View>
    )
}

export { BottomNav }