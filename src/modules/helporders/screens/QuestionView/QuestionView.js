import React from 'react'
import { View, Text } from 'react-native'
import { styles } from './HomeHelpOrder.style'
import { contentWrapper } from '../../../../styles/reusable'
import { CustomStatusBar, BottomNav, Header, Button } from '../../../../components'

const QuestionView = () => {

    return (
        <>
            <CustomStatusBar />

            <Header />

            <View style={styles.content}>
                <View style={contentWrapper}>



                </View>
            </View>

            <BottomNav />
        </>
    )
}

export { QuestionView }