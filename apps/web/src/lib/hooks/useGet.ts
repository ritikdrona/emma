import { useContext } from 'react'
import { AuthContext } from '../../features/auth/contexts/AuthContext'
import { useFetch } from './useFetch'
import { useFetchV2 } from './useFetchV2'

export const useGet = <T>(url: string) => {
    // let { token } = useContext(AuthContext)

    // return await useFetch(url, { method: 'GET' })
    return useFetchV2<T>(url, { method: 'GET' })
}
