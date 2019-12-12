import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { styles } from './Button.style'

const Button = ({ text, onPress, ...props }) => {
    return (
        <View>
            <TouchableOpacity
                style={styles.buttonArea}
                onPress={() => onPress()}
                {...props}
            >
                <Text style={styles.buttonText}>{text}</Text>
            </TouchableOpacity>
        </View>
    )
}

export { Button }