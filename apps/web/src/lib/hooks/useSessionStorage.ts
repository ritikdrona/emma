import { useEffect, useState } from 'react'

export const useSessionStorage = (defaultValue: any, key: string) => {
    const existingSessionStorageValue = sessionStorage.getItem(key)
    let initialValue = null

    if (existingSessionStorageValue === null) {
        initialValue = defaultValue
        sessionStorage.setItem(key, JSON.stringify(defaultValue))
    } else {
        initialValue = JSON.parse(sessionStorage.getItem(key) as string)
    }

    const [state, setState] = useState<string>(initialValue)

    useEffect(() => {
        sessionStorage.setItem(key, defaultValue)
    }, [state])

    return [state, setState]
}
