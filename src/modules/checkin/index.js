import React from 'react'
import { Scene, Stack } from 'react-native-router-flux'
import { Home } from './screens/Home'

module.exports = (
    <Stack key="checkin" hideNavBar>
        <Scene key="homeCheckin" component={Home} title="Home" />
    </Stack>
);