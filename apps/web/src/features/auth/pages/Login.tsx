const Login = () => {
    return (
        <div className="flex justify-center content-center w-screen h-screen px-20">
            <div className="rounded bg-slate-800 min-w-min h-max text-white p-10 mt-32">
                <div className="text-xl text-center mb-4">Login</div>
                <form>
                    <div className="pt-3">
                        <label className="" htmlFor="username">
                            Username
                        </label>
                        <input
                            className="w-full h-8 bg-amber-100 border-rose-600 rounded-sm mt-1"
                            type="text"
                            name="username"
                        />
                    </div>
                    <div className="pt-3">
                        <label className="" htmlFor="password">
                            Password
                        </label>
                        <input
                            className="w-full h-8 bg-amber-100 border-rose-600 rounded-sm mt-1"
                            type="text"
                            name="password"
                        />
                    </div>

                    <button className="w-full bg-rose-600 py-1 my-4 rounded border-white">
                        Submit
                        <i className="fa-solid fa-arrow-right ml-3 text-sm"></i>
                    </button>
                </form>

                <div className="text-sm font-extralight text-center mt-6">
                    @Copyright Ritik Drona
                </div>
            </div>
        </div>
    )
}

export default Login
