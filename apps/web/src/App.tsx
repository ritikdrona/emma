import { Outlet, Route, Routes, useNavigate } from 'react-router-dom'
import Login from './features/auth/pages/Login'
import Home from './pages/Home'
import './App.scss'
import Crux from './features/crux/pages/Crux'
import Navbar from './shared/layouts/Navbar'
import { useContext, useEffect } from 'react'
import { AuthContext } from './features/auth/contexts/AuthContext'

const App = () => {
    const { isLoggedIn } = useContext(AuthContext)
    const navigate = useNavigate()

    useEffect(() => {
        if (isLoggedIn) {
            navigate('home')
        } else {
            navigate('')
        }
    }, [isLoggedIn])

    return (
        <div className="bg-amber-50 min-h-screen">
            {isLoggedIn ? (
                <>
                    <Navbar />
                    <div className="pt-24"></div>
                </>
            ) : null}

            <main>
                <Outlet />
            </main>

            {/* <Routes>
                <Route path="/" element={<Login />} />
                <Route path="home" element={<Home />} />
                <Route path="crux" element={<Crux />} />
            </Routes> */}
        </div>
    )
}

export default App
