import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { styles } from './HomeCheckins.style.'
import { contentWrapper } from '../../../../styles/reusable'
import { CustomStatusBar } from '../../../../components/CustomStatusBar'
import { Header } from '../../../../components/Header'
import { BottomNav } from '../../../../components/BottomNav'

const HomeCheckins = () => {

    const checkinList = [
        {
            id: 1,
        },
        {
            id: 2,
        },
        {
            id: 3,
        },
        {
            id: 4,
        },
        {
            id: 5,
        },
        {
            id: 6,
        },
        {
            id: 7,
        },
    ]

    return (
        <>
            <CustomStatusBar />

            <Header />

            <View style={styles.content}>
                <View style={contentWrapper}>
                    <Text>Checkins</Text>
                    <FlatList
                        renderItem={({ item }) => }
                    />
                </View>
            </View>

            <BottomNav />
        </>
    )
}

export { HomeCheckins }