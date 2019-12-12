import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './Home.style'
import { contentWrapper } from '../../../../styles/reusable'
import { CustomStatusBar } from '../../../../components/CustomStatusBar'
import { Header } from '../../../../components/Header'
import { BottomNav } from '../../../../components/BottomNav'

const Home = () => {
    return (
        <>
            <CustomStatusBar />

            <Header />

            <View style={styles.content}>
                <View style={contentWrapper}>
                    <Text>Você está na Home fera!</Text>
                </View>
            </View>

            <BottomNav />
        </>
    )
}

export { Home }