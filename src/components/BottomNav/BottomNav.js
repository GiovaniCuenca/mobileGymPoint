import React, { useState, useEffect } from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './BottomNav.style'
import { Actions } from 'react-native-router-flux'
import Icon from 'react-native-vector-icons/MaterialIcons'
import { colors } from '../../styles/colors'

const BottomNav = () => {
    const [ activeScene, setActiveScene ] = useState(null);

    useEffect(() => {
        setActiveScene(Actions.currentScene);
    }, [ Actions.currentScene ])

    return (
        <View style={styles.bottomnNavContainer}>

            <TouchableOpacity
                style={styles.bottomNavButtom}
                onPress={() => Actions.push('home')}
            >
                <Icon name="crop-square" size={25} color={activeScene == 'home' ? colors.gympoint : colors.grayInactive} />
                <Text style={activeScene == 'home' ? styles.bottomNavTextActive : styles.bottomNavTextInactive}>Home</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.bottomNavButtom}
                onPress={() => Actions.push('checkins')}
            >
                <Icon name="crop-square" size={25} color={activeScene == 'homeCheckins' ? colors.gympoint : colors.grayInactive}/>
                <Text style={activeScene == 'homeCheckins' ? styles.bottomNavTextActive : styles.bottomNavTextInactive}>Check-Ins</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.bottomNavButtom}
                onPress={() => {}}
            >
                <Icon name="crop-square" size={25} color={colors.grayInactive} />
                <Text style={styles.bottomNavText}>Pedir Ajuda</Text>
            </TouchableOpacity>

        </View>
    )
}

export { BottomNav }