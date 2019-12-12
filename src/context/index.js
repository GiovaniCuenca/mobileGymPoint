import React from 'react'
import { AuthProvider } from './authentication.context'

const AppProvider = ({ children }) => {
    return (
        <AuthProvider>
            {children}
        </AuthProvider>
    )
}

export { AppProvider }