import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const NavbarContainer = styled.div`
    position: sticky;
    height: 80px;
    width: 100%;
    background: #0D0D0D;
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 999;
`;

export const NavbarItems = styled.div``;

export const NavbarLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 65px;
    padding-right: 65px;
    max-width: 90%;
`;

export const LogoText = styled.h1`
    color: #CAD5E2;
    font-size: 1.5rem;
`;

export const NavbarMenu = styled.div`
    /* background: #fff; */
    padding-right: 65px;
    width: 500px;
    max-width: 500px;
    display: flex;
    justify-content: space-around;

    
    @media screen and (max-width: 790px){
        display: none;
    }

    &:hover{
        cursor: pointer;
    }
`;

export const NavbarMenuSidebar = styled.div`
    /* background: #fff; */
    display: none;

    
    @media screen and (max-width: 790px){
        display: flex;
        position: absolute;
        top: 80px;
        flex-direction: column;
        background: black;
        width: 100%;
        height: 90vh;
        align-items: center;
        justify-content: space-evenly;
        left: ${({isClicked}) => ( isClicked ? "0" : "-100%" )};
        transition: 0.3s all ease-in-out;
    }

    &:hover{
        cursor: pointer;
    }
`;

export const NavLink = styled(Link)`
     color: #CAD5E2;
     font-size: 1.5rem;
     text-decoration: none;

     &:hover{
         color: #00D84A;
     }
`

export const Hamburger = styled.div`
    display: none;

    @media screen and (max-width: 790px){
        display: flex;
        color: #fff;
        font-size: 1.5rem;
        position: absolute;
        right: 45px;
    }

    

    &:hover{
        cursor: pointer;
    }
`;
