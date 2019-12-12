import React from 'react'
import { Scene, Stack } from 'react-native-router-flux'
import { Login } from './screens/Login'
import { Home } from './screens/Home'

module.exports = (
    <Stack key="core" hideNavBar>
        <Scene key="login" component={Login} title="Login" />
        <Scene key="home" component={Home} title="Home" />
    </Stack>
);