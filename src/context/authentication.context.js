import React from 'react'

const AuthContext = React.createContext();

function AuthProvider(props) {
    const login = () => {};
    const logout = () => {};

    return (
        <AuthContext.Provider value={{ login, logout }} {...props}/>
    )
}

function useAuth() {
    const context = React.useContext(AuthContext);

    if (context === undefined)
        throw new Error('Atentication Failed');

        return context;
}

export { AuthProvider, useAuth }