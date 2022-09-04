import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import constants from './constants'
import { AuthContextProvider } from './features/auth/contexts/AuthContext'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AuthContextProvider>
            <BrowserRouter basename={constants.BASE_URL}>
                <App />
            </BrowserRouter>
        </AuthContextProvider>
    </React.StrictMode>
)
