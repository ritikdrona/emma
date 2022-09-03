import { NavLink } from 'react-router-dom'
import NavbarLink from '../components/NavbarLink'

const Navbar = () => {
    return (
        <div className="bg-amber-50 fixed flex justify-between container px-20 py-8">
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
            <div className="text-lg">Ritik Drona</div>
        </div>
    )
}

export default Navbar
