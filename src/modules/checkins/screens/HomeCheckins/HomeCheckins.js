import React from 'react'
import { View, Text, FlatList } from 'react-native'
import { styles } from './HomeCheckins.style.'
import { contentWrapper } from '../../../../styles/reusable'
import { CustomStatusBar, BottomNav, Header, Button } from '../../../../components'
import { ListCheckin } from '../../components'

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
        {
            id: 8,
        },
        {
            id: 9,
        },
        {
            id: 10,
        },
        {
            id: 11,
        },
        {
            id: 12,
        },
        {
            id: 13,
        },
        {
            id: 14,
        },
    ]

    return (
        <>
            <CustomStatusBar />

            <Header />

            <View style={styles.content}>
                <View style={contentWrapper}>

                    <Button text="Novo check-in" onPress={() => {}} />

                    <FlatList
                        style={{ marginVertical: 20, paddingRight: 10 }}
                        data={checkinList}
                        keyExtractor={item => item.id}
                        renderItem={({ item }) => <ListCheckin id={item.id} /> }
                    />
                </View>
            </View>

            <BottomNav />
        </>
    )
}

export { HomeCheckins }