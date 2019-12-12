import { StyleSheet } from 'react-native'
import { colors } from '../../styles/colors'

export const styles = StyleSheet.create({
    bottomnNavContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around',

        paddingVertical: 20,

        backgroundColor: colors.white,
        borderTopWidth: 1,
        borderColor: colors.grayBorder,
    },
})