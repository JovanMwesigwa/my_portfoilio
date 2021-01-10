import styled from 'styled-components';

export const ProjectsContainer = styled.div`
    height: 98vh;
    width: 100%;
    padding: 44px;
    padding-bottom: 65px;
    /* background: #0D0D0D; */
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    @media screen and (max-width: 468px){
        flex-direction: column;
        height: 1400px;
    }

    @media screen and (max-width: 768px){
        flex-direction: column;
        height: 1400px;
    }

`;

export const ProjectHeader = styled.h1`
    color: "#0D0D0D";
    font-size: 55px;
    letter-spacing: 1px;
    text-align: center;
    font-weight: normal;
    padding-bottom: 0;

    @media screen and (max-width: 468px){
        font-size: 50px;
    }

    @media screen and (max-width: 768px){
        font-size: 45px;
    }

`;

export const ProjectCardContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    

    @media screen and (max-width: 468px){
        flex-direction: column;
        height: 1400px;
    }

    @media screen and (max-width: 768px){
        flex-direction: column;
        height: 1400px;
    }
`

export const ProjectCard = styled.div`
    background: #fff;
    padding: 12px;
    height: 345px;
    width: 100%;
    margin: 34px;
    margin-top: 65px;
    border-radius: 15px;
    max-height: 400px;
    box-shadow: 0 1px 3px rgba(0,0,0.5);
    transition: all 0.3s ease-in-out;

    :hover{
        cursor: pointer;
        transform: scale(1.04);
        transition: all 0.2s ease-in-out;
    }

    @media screen and (max-width: 468px){
        /* height:400px; */
    }

    @media screen and (max-width: 768px){
        /* height:400px; */
    }
`;

export const CardImage = styled.img`
    /* -o-object-fit: cover; */
    background: rgba(0,0,0,0.3);
    object-fit: cover;
    width: 100%;
    height: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius: 15px;
`;