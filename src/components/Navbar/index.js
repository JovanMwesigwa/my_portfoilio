import React from 'react';
import Sidebar from '../../contents/sidebar';
import { FaBars, FaTimes } from 'react-icons/fa'
import { NavbarContainer, NavbarLogo, LogoText, NavbarMenu, NavLink, Hamburger } from './Navbar.elements'

function Navbar() {

    const [ clickedNav, setClickedNav ] = React.useState(false);

    const [ scrollNav, setScrollNav ] = React.useState(false);

    const changeNav = () => {
        if(window.scrollY >= 80){
            setScrollNav(true);
        }else{
            setScrollNav(false);
        }
    }

    React.useEffect(() => {
        window.addEventListener("scroll", changeNav);
    },[])

    const toggle = () => {
        setClickedNav(!clickedNav);
    }
    return (
        <NavbarContainer scrollNav={scrollNav}>
            <NavbarLogo>
                <LogoText to="hero">
                    JMB
                </LogoText>
                <Hamburger onClick={toggle}>

                    {
                        clickedNav ? <FaTimes /> : <FaBars />  
                    }
                    
                </Hamburger>
            </NavbarLogo>
            <NavbarMenu>
                <NavLink to="about">about</NavLink>
                <NavLink to="projects">projects</NavLink>
                <NavLink to="/">resume</NavLink>
            </NavbarMenu>
            <Sidebar toggleClick={toggle} isClicked={clickedNav}/>
        </NavbarContainer>
    )
}

export default Navbar;
