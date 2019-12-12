import React from 'react'
import { Router, Stack } from 'react-native-router-flux'

const Routes = () => {
    return (
        <Router>
            <Stack key='root' hideNavBar>
                {require("./modules/signin")}
                {require("./modules/checkin")}
            </Stack>
        </Router>
    )
}

export default Routes