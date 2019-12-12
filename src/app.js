import React from 'react'
import { Routes } from './routes'
import { AppProvider } from './context'

const App = () => {
    return (
        <AppProvider>
            <Routes />
        </AppProvider>
    )
}

export { App }