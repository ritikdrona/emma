import { useContext } from 'react'
import { NavLink } from 'react-router-dom'
import { AuthContext } from '../../features/auth/contexts/AuthContext'
import NavbarLink from '../components/NavbarLink'

const Navbar = () => {
    const { logout } = useContext(AuthContext)
    return (
        <nav className="bg-amber-50 fixed flex justify-between container px-20 py-8">
            <div className="text-xl font-bold tracking-wide ">
                <NavLink to={'home'} className="brand">
                    EMMA
                </NavLink>
            </div>
            <div className="px-20">
                <ul className="flex">
                    <NavbarLink text="Home" to="home" />
                    <NavbarLink text="Crux" to="crux" />
                </ul>
            </div>
            <div className="flex content-center">
                <div className="text-lg mx-3">Ritik Drona</div>
                <div
                    onClick={logout}
                    className="border border-rose-500 px-3 rounded-full hover:bg-rose-500  transition-colors ease-in"
                >
                    <i className="fa-solid fa-right-from-bracket align-middle"></i>
                </div>
            </div>
        </nav>
    )
}

export default Navbar
