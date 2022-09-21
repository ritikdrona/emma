import { useContext, useState } from 'react'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { executeAfterDelay } from '../../../shared/util'
import { usePostAuthenticate } from '../api'
import { AuthContext } from '../contexts/AuthContext'
import { User } from '../types/User'

interface LoginFormType {
    username: string
    password: string
}

const defaultValues: LoginFormType = {
    username: '',
    password: ''
}

const LoginForm = () => {
    const { login } = useContext(AuthContext)
    const navigate = useNavigate()

    const { register, handleSubmit } = useForm<LoginFormType>({ defaultValues })

    const onSubmit = async (data: any) => {
        const { username, password } = data
        const response = await usePostAuthenticate(username, password)

        setMessage(response.message)
        if (response.success) {
            executeAfterDelay(() => {
                login(response.user as User, response.token as string)
                navigate('home')
            }, 1000)
        }
    }

    const [message, setMessage] = useState<string>('')

    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <div className="pt-3">
                <label className="" htmlFor="username">
                    Username
                </label>
                <input
                    {...register('username')}
                    className="w-full h-8 text-slate-800 bg-amber-100 rounded mt-1 px-2 py-4 border-2 border-amber-100 focus:border-rose-600 focus:outline-none"
                    type="text"
                    name="username"
                />
            </div>
            <div className="pt-3">
                <label className="" htmlFor="password">
                    Password
                </label>
                <input
                    {...register('password')}
                    className="w-full h-8 text-slate-800 bg-amber-100 rounded mt-1 px-2 py-4 border-2 border-amber-100 focus:border-rose-600 focus:outline-none"
                    type="text"
                    name="password"
                />
            </div>

            <button
                type="submit"
                className="w-full bg-rose-600 py-1 my-4 rounded border-white"
            >
                Submit
                <i className="fa-solid fa-arrow-right ml-3 text-sm"></i>
            </button>

            <div className="text-center text-sm font-thin text-red-500 ">
                {message}
            </div>
        </form>
    )
}

export default LoginForm
