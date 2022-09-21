import { useContext } from 'react'
import config from '../../config'
import { AuthContext } from '../../features/auth/contexts/AuthContext'

export type RequestOptions = {
    method?: string
    body?: any
    headers?: { string: string }
}

export const useFetch = async (
    url: string,
    { method, body, headers }: RequestOptions
) => {
    // let { token } = useContext(AuthContext)
    let response = await fetch(url, {
        method,
        body: JSON.stringify(body),
        headers: {
            ...config.DEFAULT_HEADERS,
            // authentication: `Bearer ${token}`,
            ...headers
        }
    })

    let data = await response.json()
    return data
}
