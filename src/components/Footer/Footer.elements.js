import styled from 'styled-components';

export const FooterContainer = styled.div`
    width: 100%;
    height: 235px;
    padding-left: 64px;
    padding-right: 64px;
    padding-bottom: 18px;
    background: #0D0D0D;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

`;

export const FooterMenu = styled.div`
    width: 100%;
    height: 100%;
    /* padding: 24px;
    margin: 24px; */
    display: flex;
`;

export const FooterItems = styled.div`
    width: 100%;
    /* background: #fff; */
    padding: 24px;
    margin: 24px;
`;

export const IconsContainer = styled.div`
    display: flex;
    /* align-items: baseline; */
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 468px){
        flex-direction: column;
    }

    @media screen and (max-width: 768px){
        flex-direction: column;
    }
`;

export const Logo = styled.h3`
    color: #fff;
    font-size: 18px;
    font-weight: normal;

    @media screen and (max-width: 468px){
        font-size: 15px;
    }

    @media screen and (max-width: 768px){
        font-size: 15px;
    }
`;

export const SocialIcons = styled.div`
    align-items: center;
    justify-content: center;

    @media screen and (max-width: 468px){
        margin: 8px;
    }

    @media screen and (max-width: 768px){
        margin: 8px;
    }

`;

export const TextItem = styled.h3`
    color: #fff;
    font-size: 18px;
    font-weight: normal;
    padding-right: 8px;

    @media screen and (max-width: 468px){
        font-size: 15px;
        padding: 8px;
    }

    @media screen and (max-width: 768px){
        font-size: 15px;
        padding: 8px;
    }
`;

export const LowerTextItem = styled.p`
    color: #fff;
    text-align: center;
    padding-top: 8px;
    font-size: 15px;

    @media screen and (max-width: 468px){
        font-size: 10px;
    }

    @media screen and (max-width: 768px){
        font-size: 10px;
    }
`;

export const IconLink = styled.a`
    color: #fff;
    font-size: 18px;
    padding-left: 20px;

    @media screen and (max-width: 468px){
        font-size: 15px;
        padding: 8px;
    }

    @media screen and (max-width: 768px){
        font-size: 15px;
        padding: 8px;
    }
`;