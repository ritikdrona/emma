import { RouteObject } from 'react-router-dom'
import App from './App'
import Login from './features/auth/pages/Login'
import Crux from './features/crux/pages/Crux'
import Home from './pages/Home'

const routes: RouteObject[] = [
    {
        path: '/',
        element: <App />,
        children: [
            {
                path: '',
                element: <Login />
            },
            {
                path: 'home',
                element: <Home />
            },
            {
                path: 'crux',
                element: <Crux />
            }
        ]
    }
]

export default routes
