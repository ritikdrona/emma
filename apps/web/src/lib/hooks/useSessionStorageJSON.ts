import { useEffect, useState } from 'react'

export const useSessionStorageJSON = <T>(defaultValue: any, key: string) => {
    const existingSessionStorageValue = sessionStorage.getItem(key)
    let initialValue = null

    if (existingSessionStorageValue === null) {
        initialValue = defaultValue
        sessionStorage.setItem(key, JSON.stringify(defaultValue))
    } else {
        initialValue = JSON.parse(sessionStorage.getItem(key) as string)
        // initialValue = sessionStorage.getItem(key) as string
    }

    const [state, setState] = useState<T>(initialValue)

    useEffect(() => {
        sessionStorage.setItem(key, JSON.stringify(state))
    }, [state])

    return { state, setState }
}
