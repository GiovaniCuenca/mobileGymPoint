import React from 'react'
import { View, Image, TouchableOpacity } from 'react-native'
import { styles } from './Header.style'

const Header = () => {
    return (
        <View style={styles.headerContainer}>
            <TouchableOpacity>
                <Image style={styles.logoHeader} source={require('../../assets/images/logoHeader.png')} />
            </TouchableOpacity>
        </View>
    )
}

export { Header }