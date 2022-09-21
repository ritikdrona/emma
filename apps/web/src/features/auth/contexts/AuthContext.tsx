import { createContext, ReactNode, useState } from 'react'
import { useSessionStorage } from '../../../lib/hooks/useSessionStorage'
import { useSessionStorageJSON } from '../../../lib/hooks/useSessionStorageJSON'
import { User } from '../types/User'

interface AuthContextType {
    user: User | null
    token: string | null
    isLoggedIn: boolean
    login: (user: User, token: string) => void
    logout: () => void
}

export const AuthContext = createContext<AuthContextType>({
    user: null,
    token: null,
    isLoggedIn: false,
    login: (user: User, token: string) => {},
    logout: () => {}
})

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const { state: isLoggedIn, setState: setIsLoggedIn } =
        useSessionStorageJSON<boolean>(false, 'isLoggedIn')
    const { state: user, setState: setUser } =
        useSessionStorageJSON<User | null>(null, 'user')
    const { state: token, setState: setToken } = useSessionStorage(
        null,
        'token'
    )

    const login = (user: User, token: string) => {
        setIsLoggedIn(true)
        setUser(user)
        setToken(token)
    }

    const logout = () => {
        setIsLoggedIn(false)
        setUser(null)
        setToken(null)
    }

    const contextValue = {
        user,
        token,
        isLoggedIn,
        login,
        logout
    }

    return (
        <AuthContext.Provider value={contextValue}>
            {children}
        </AuthContext.Provider>
    )
}
