import React from 'react'
import ReactDOM from 'react-dom/client'
import {
    BrowserRouter,
    createBrowserRouter,
    RouterProvider
} from 'react-router-dom'
import App from './App'
import config from './config'
import { AuthContextProvider } from './features/auth/contexts/AuthContext'
import './index.scss'
import routes from './routes'

const router = createBrowserRouter(routes, {
    basename: config.BASE_URL
})

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <AuthContextProvider>
            {/* <BrowserRouter basename={config.BASE_URL}> */}
            <RouterProvider router={router} />
            {/* </BrowserRouter> */}
        </AuthContextProvider>
    </React.StrictMode>
)
