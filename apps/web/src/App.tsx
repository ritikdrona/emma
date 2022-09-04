import { Route, Routes } from 'react-router-dom'
import Login from './features/auth/pages/Login'
import Home from './pages/Home'
import './App.scss'
import Crux from './features/crux/pages/Crux'
import Navbar from './shared/layouts/Navbar'
import { useContext } from 'react'
import { AuthContext } from './features/auth/contexts/AuthContext'

const App = () => {
    const { isLoggedIn } = useContext(AuthContext)
    return (
        <div className="bg-amber-50 min-h-screen">
            {isLoggedIn ? (
                <>
                    <Navbar />
                    <div className="pt-44"></div>
                </>
            ) : null}

            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="home" element={<Home />} />
                <Route path="crux" element={<Crux />} />
            </Routes>
        </div>
    )
}

export default App
