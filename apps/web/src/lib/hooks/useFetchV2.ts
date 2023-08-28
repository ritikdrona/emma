import { useContext, useEffect, useState } from 'react'
import config from '../../config'
import { AuthContext } from '../../features/auth/contexts/AuthContext'

export const useFetchV2 = <T>(url: string, init: RequestInit | undefined) => {
    const { token, logout } = useContext(AuthContext)

    const [data, setData] = useState<T | null>(null)
    const [loading, setLoading] = useState(false)
    // const [errors, setError] = useState(null)

    useEffect(() => {
        const apiCall = async () => {
            setLoading(true)
            const response = await fetch(url, {
                ...init,
                headers: {
                    ...config.DEFAULT_HEADERS,
                    // authentication: `Bearer ${token}`,
                    ...init?.headers
                }
            })

            if (response.status === 401) {
                logout()
            }

            const rawData = await response.json()
            setLoading(false)
            setData(rawData as T)
        }
        apiCall()
    }, [url])

    return { data, loading }
}
