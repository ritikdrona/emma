import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import constants from './constants'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter basename={constants.BASE_URL}>
            <App />
        </BrowserRouter>
    </React.StrictMode>
)
