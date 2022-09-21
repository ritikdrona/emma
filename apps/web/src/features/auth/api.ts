import config from '../../config'
import { usePost } from '../../lib/hooks/usePost'
import { LoginResponse } from './types/LoginResponse'

const API_URL = config.API_URL + 'auth/'

export const usePostAuthenticate = async (
    username: string,
    password: string
): Promise<LoginResponse> => {
    const body = { username, password }
    let response = await usePost(API_URL + 'authenticate', body)
    return response
}
