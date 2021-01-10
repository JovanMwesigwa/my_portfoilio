import styled from 'styled-components';
import { Link as LinkS} from 'react-scroll';

export const NavbarContainer = styled.div`
    position: sticky;
    margin-top: -80px;
    top: 0;
    height: 80px;
    width: 100%;
    background: ${({scrollNav}) => (scrollNav ? "#0D0D0D" : "transparent")};
    /* opacity: 0.2; */
    display: flex;
    justify-content: space-between;
    align-items: center;
    z-index: 10;

    @media screen and (max-width: 768px){
        transition: 0.8s all ease;
    }
    
`;

export const NavbarItems = styled.div``;

export const NavbarLogo = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-left: 65px;
    padding-right: 65px;
    max-width: 90%;

    @media screen and (max-width: 768px){
        padding-left: 30px;
        padding-right: 30px;
    }

    @media screen and (max-width: 468px){
        padding-left: 20px;
        padding-right: 20px;
    }
`;

export const LogoText = styled(LinkS)`
    color: #fff;
    font-size: 1.5rem;
    text-decoration: none;
    font-weight: bold;

    &:hover{
        cursor: pointer;
    }
`;

export const NavbarMenu = styled.div`
    /* background: #fff; */
    padding-right: 65px;
    width: 500px;
    max-width: 500px;
    display: flex;
    justify-content: space-around;

    
    @media screen and (max-width: 768px){
        display: none;
    }

    &:hover{
        cursor: pointer;
    }
`;

export const NavbarMenuSidebar = styled.div`
    /* background: #fff; */
    display: none;

    
    @media screen and (max-width: 768px){
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

export const NavLink = styled(LinkS)`
     color: #fff;
     font-size: 1.5rem;
     text-decoration: none;
     

     &:hover{
         color: gray;
     }
`

export const Hamburger = styled.div`
    display: none;

    @media screen and (max-width: 468px){
        display: flex;
        color: #fff;
        font-size: 1.5rem;
        position: absolute;
        right: 30px;
    }

    @media screen and (max-width: 768px){
        display: flex;
        color: #fff;
        font-size: 1.5rem;
        position: absolute;
        right: 30px;
    }

    

    &:hover{
        cursor: pointer;
    }
`;

// new Date().getFullYear()