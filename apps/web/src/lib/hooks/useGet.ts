import { useFetch } from './useFetch'

export const useGet = async (url: string) => {
    return await useFetch(url, { method: 'GET' })
}
