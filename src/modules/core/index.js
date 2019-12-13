import React from 'react'
import { Scene, Stack } from 'react-native-router-flux'
import { Home, Login } from './screens'

module.exports = (
    <Stack key="core" hideNavBar>
        <Scene key="login" component={Login} title="Login" />
        <Scene key="home" component={Home} title="Home" />
    </Stack>
);