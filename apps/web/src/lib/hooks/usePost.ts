import { useFetch } from './useFetch'

export const usePost = async (url: string, body: any, headers?: any) => {
    return await useFetch(url, { method: 'POST', body, headers })
}
