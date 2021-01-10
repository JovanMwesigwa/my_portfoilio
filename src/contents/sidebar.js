import React from 'react';
import { NavbarMenuSidebar, NavLink } from '../components/Navbar/Navbar.elements'

function Sidebar({toggleClick, isClicked}) {
    return (
        <>
            <NavbarMenuSidebar onClick={toggleClick} isClicked={isClicked} >
                <NavLink to="about" onClick={toggleClick}>About</NavLink>
                <NavLink to="projects" onClick={toggleClick}>Projects</NavLink>
                <NavLink to="/" onClick={toggleClick}>Resume</NavLink>
            </NavbarMenuSidebar>
        </>
    )
}

export default Sidebar