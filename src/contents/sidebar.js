import React from 'react';
import { NavbarMenuSidebar, NavLink } from '../components/Navbar/Navbar.elements'

function Sidebar({toggleClick, isClicked}) {
    return (
        <>
            <NavbarMenuSidebar onClick={toggleClick} isClicked={isClicked} >
                <NavLink to="/about">About</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/">Resume</NavLink>
            </NavbarMenuSidebar>
        </>
    )
}

export default Sidebar