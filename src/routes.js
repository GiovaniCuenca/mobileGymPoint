import React from 'react'
import { Router, Stack } from 'react-native-router-flux'

const Routes = () => {
    return (
        <Router>
            <Stack key='root' hideNavBar>
                {require("./modules/core")}
                {require("./modules/home")}
                {require("./modules/checkins")}
            </Stack>
        </Router>
    )
}

export { Routes }