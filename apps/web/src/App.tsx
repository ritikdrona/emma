import { Route, Routes } from 'react-router-dom'

import Login from './features/auth/pages/Login'
import Home from './pages/Home'
import './App.scss'
import Crux from './features/crux/pages/Crux'
import Navbar from './shared/layouts/Navbar'

const App = () => {
    return (
        <div className="bg-amber-50 min-h-screen">
            <Navbar />
            <div className="pt-44">
                <Routes>
                    <Route path="/" element={<Login />} />
                    <Route path="home" element={<Home />} />
                    <Route path="crux" element={<Crux />} />
                </Routes>
            </div>
        </div>
    )
}

export default App
