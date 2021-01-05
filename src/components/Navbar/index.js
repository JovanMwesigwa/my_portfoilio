import React from 'react';
import Sidebar from '../../contents/sidebar';
import { FaBars, FaTimes } from 'react-icons/fa'
import { NavbarContainer, NavbarLogo, LogoText, NavbarMenu, NavLink, Hamburger } from './Navbar.elements'

function Navbar() {

    const [ clickedNav, setClickedNav ] = React.useState(false);

    const toggle = () => {
        setClickedNav(!clickedNav);
    }
    return (
        <NavbarContainer>
            <NavbarLogo>
                <LogoText>
                    JOVAN
                </LogoText>
                <Hamburger onClick={toggle}>

                    {
                        clickedNav ? <FaTimes /> : <FaBars />  
                    }
                    
                </Hamburger>
            </NavbarLogo>
            <NavbarMenu>
                <NavLink to="/about">About</NavLink>
                <NavLink to="/projects">Projects</NavLink>
                <NavLink to="/">Resume</NavLink>
            </NavbarMenu>
            <Sidebar toggleClick={toggle} isClicked={clickedNav}/>
        </NavbarContainer>
    )
}

export default Navbar;
