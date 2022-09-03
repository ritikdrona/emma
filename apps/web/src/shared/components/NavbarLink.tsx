import React from 'react'
import { NavLink } from 'react-router-dom'

const NavbarLink = ({ text, to }: { text: string; to: string }) => {
    return (
        <li className="text-lg px-8">
            <NavLink to={to}>{text}</NavLink>
        </li>
    )
}

export default NavbarLink
