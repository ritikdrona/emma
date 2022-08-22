import { Route, Routes } from 'react-router-dom'

import Login from './features/auth/pages/Login'
import Home from './pages/Home'
import './App.scss'

const App = () => {
    return (
        <div>
            Hello
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="home" element={<Home />} />
            </Routes>
        </div>
    )
}

export default App
