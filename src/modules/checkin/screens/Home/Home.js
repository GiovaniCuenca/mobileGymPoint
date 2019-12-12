import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './Home.style'
import { contentWrapper } from '../../../../styles/reusable'
import { CustomStatusBar } from '../../../../components/CustomStatusBar'

const Home = () => {
    return (
        <>
            <CustomStatusBar />
            <View style={styles.content}>
                <View style={contentWrapper}>
                    <Text>Hello Checkin</Text>
                </View>
            </View>
        </>
    )
}

export { Home }