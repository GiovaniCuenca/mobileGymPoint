import React from 'react'
import { Scene, Stack } from 'react-native-router-flux'
import { HomeCheckins } from './screens/HomeCheckins'

module.exports = (
    <Stack key="checkins" hideNavBar>
        <Scene key="homecheckins" component={HomeCheckins} title="HomeCheckins" />
    </Stack>
);