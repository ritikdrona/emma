import LoginForm from '../forms/LoginForm'

const Login = () => {
    return (
        <div className="flex justify-center content-center w-screen h-screen px-20">
            <div className="rounded bg-slate-800 min-w-min h-max text-white p-10 mt-32">
                <div className="text-xl text-center mb-4">Login</div>
                <LoginForm />
                <div className="text-sm font-extralight text-center mt-6">
                    @Copyright Ritik Drona
                </div>
            </div>
        </div>
    )
}

export default Login
