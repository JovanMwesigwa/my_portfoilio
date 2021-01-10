import styled from 'styled-components';
import { Link } from 'react-router-dom'

export const HeroContainer = styled.div`
    width: 100%;
    height: 98vh;
    background: #0D0D0D;
    display: flex;
    align-items: center;
    justify-content: center;
    position: relative;
    z-index: 1;

    :before{
        content: '';
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        right: 0;
        background: rgba(0,0,0,0.5);
        z-index: 2;
    }
`

export const HeroBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #0D0D0D;
`;

export const HeroContent = styled.div`
    z-index: 3;
    position: absolute;
    max-width: 1200px;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const HeroHeader = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;
    letter-spacing: 2px;

    @media screen and (max-width: 768px){
        font-size: 40px; 
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`

export const HeroSubHeader = styled.h3`
    color: #fff;
    font-size: 35px;
    text-align: center;
    letter-spacing: 2px;
    font-weight: normal;

    @media screen and (max-width: 768px){
        font-size: 30px; 
    }

    @media screen and (max-width: 480px){
        font-size: 22px;
    }
`
export const HeroSubText = styled.p`
    color: #fff;
    margin-top: 18px;
    font-size: 24px;
    text-align: center;
    max-width: 600px;
    letter-spacing: 1px;

    @media screen and (max-width: 768px){
        font-size: 20px; 
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`;

export const IconLink = styled.a`
    color: #fff;
    font-size: 34px;

    :hover{
        cursor: pointer;
        color: gray;
    }
`;

export const HeroIconsContainer = styled.div`
    width: 50%;
    padding-top: 20px;
    
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    
    

`;