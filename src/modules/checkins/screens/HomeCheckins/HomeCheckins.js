import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './HomeCheckins.style.'
import { contentWrapper } from '../../../../styles/reusable'
import { CustomStatusBar } from '../../../../components/CustomStatusBar'
import { Header } from '../../../../components/Header'
import { BottomNav } from '../../../../components/BottomNav'

const HomeCheckins = () => {
    return (
        <>
            <CustomStatusBar />

            <Header />

            <View style={styles.content}>
                <View style={contentWrapper}>
                    <Text>Checkins</Text>
                </View>
            </View>

            <BottomNav />
        </>
    )
}

export { HomeCheckins }