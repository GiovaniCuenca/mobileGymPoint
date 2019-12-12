import React from 'react'
import { View, Image, TextInput } from 'react-native'
import { Button } from '../../../../components/Button'
import { styles } from './Login.style'
import { contentWrapper } from '../../../../styles/reusable'
import { CustomStatusBar } from '../../../../components/CustomStatusBar'
import { Actions } from 'react-native-router-flux'

const Login = () => {
    return (
        <>
            <CustomStatusBar />
            <View style={styles.content}>
                <View style={contentWrapper}>
                    <Image style={styles.logoLogin} source={require('../../../../assets/images/logo.png')} />
                    <TextInput style={styles.inputID} placeholder="Informe seu ID de cadastro" keyboardType="numeric" ></TextInput>
                    <Button
                        onPress={() => Actions.popTo('homeCheckin')}
                        text="Entrar no sistema"
                    />
                </View>
            </View>
        </>
    )
}

export { Login }