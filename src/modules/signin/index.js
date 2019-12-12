import React from 'react'
import { Scene, Stack } from 'react-native-router-flux'
import { Login } from './screens/Login'

module.exports = (
    <Stack key="signin" hideNavBar>
        <Scene key="login" component={Login} title="Login" />
    </Stack>
);