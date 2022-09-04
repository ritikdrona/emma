import { createContext, ReactNode, useState } from 'react'

export const AuthContext = createContext<any>({})

export const AuthContextProvider = ({ children }: { children: ReactNode }) => {
    const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false)
    const [user, setUser] = useState<{} | null>(null)
    const [token, setToken] = useState<string | null>(null)

    const login = (user: {}, token: string) => {
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
