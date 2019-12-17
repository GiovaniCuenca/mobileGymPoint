import React from 'react'
import { Scene, Stack } from 'react-native-router-flux'
import { HomeHelpOrder } from './screens'

module.exports = (
    <Stack key="helporders" hideNavBar>
        <Scene key="homeHelporders" component={HomeHelpOrder} title="HomeHelpOrder" />
    </Stack>
);