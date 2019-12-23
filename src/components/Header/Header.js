import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { styles } from './Header.style'
import { colors } from '../../styles'
import Icon from 'react-native-vector-icons/Feather'

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <View></View>
            <TouchableOpacity>
                <Image style={styles.logoHeader} source={require('../../assets/images/logoHeader.png')} />
            </TouchableOpacity>
            <TouchableOpacity>
                <Icon name="log-out" size={20} color={colors.redNegative} />
            </TouchableOpacity>
        </View>
    )
}

export { Header }