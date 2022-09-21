import { User } from './User'

export interface LoginResponse {
    success: boolean
    message: string
    user: User | null
    token: string | null
}
