import styled from 'styled-components';

export const BodyContainer = styled.div`
    padding: 34px;
    width: 100%;
    background: ${({ dark }) => (dark ? "#0D0D0D" : "#fff")};
    height: 90vh;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: ${({flexed}) => (flexed ? 'row-reverse' : 'row')};

    @media screen and (max-width: 400px){
        flex-direction: column;  
        height: 900px;   
        
    }

    @media screen and (max-width: 468px){
        flex-direction: column;  
        height: 900px;   
        
    }

    @media screen and (max-width: 768px){
        flex-direction: column;
        justify-content: space-evenly;
        height: 900px;
    }
`;

export const BodyInfo = styled.div`
    display: flex;
    flex-direction: column;
    /* flex-grow: inherit; */
    align-items: center;
    justify-content: center;
    height: 100%;
    padding: 24px;

    @media screen and (max-width: 468px){
        padding: 0;
    }

    @media screen and (max-width: 768px){
        padding: 0;
    }
`;



export const BodyHeaderText = styled.h1`
    color: ${({lightText}) => (lightText ? "#fff" : "#0D0D0D")};
    font-size: 68px;
    letter-spacing: 2px;
    text-align: center;
    font-weight: normal;

    @media screen and (max-width: 468px){
        font-size: 50px;
    }

    @media screen and (max-width: 768px){
        font-size: 45px;
    }
`

export const BodyText = styled.p`
    margin-top: 20px;
    color: ${({lightText}) => (lightText ? "#fff" : "#0D0D0D")};
    /* flex-wrap: wrap; */
    font-size: 1rem;
    letter-spacing: 1px;
    padding-right: 24px;

    @media screen and (max-width: 468px){
        font-size: 16px;
        padding-right: 0;
    }

    @media screen and (max-width: 768px){
        font-size: 15px;
        padding-right: 0;
    }
`;

export const BodyTwoText = styled.p`
    color: ${({lightText}) => (lightText ? "#fff" : "#0D0D0D")};
    font-size: 1rem;
    /* flex-wrap: wrap; */
    letter-spacing: 1px;
    padding-right: 24px;
    padding-top: 18px;

    @media screen and (max-width: 468px){
        padding-top: 18px;
        font-size: 16px;
        padding-right: 0;
        /* padding-bottom: 18px; */
    }

    @media screen and (max-width: 768px){
        padding-top: 18px;
        font-size: 15px;
        padding-right: 0;
        /* padding-bottom: 18px; */
    }
`;

export const BodyImageContainer = styled.div`
    display: flex;
    background-color: ${({ dark }) => (dark ? "#0D0D0D" : "#fff")};
    width: 2000px;
    height: 400px;
    border-radius: 14px;
    margin-top: 5rem;
    margin-bottom: 5rem;
    margin: 24px;
    padding: 34px;


    @media screen and (max-width: 468px){
        margin-top: 0;
        padding-top: 0;
        width: 100%;
        height: 100%;
    }

    @media screen and (max-width: 768px){
        margin-top: 0;
        padding-top: 0;
        width: 100%;
        height: 100%;

    }
`;

export const BodyImage = styled.img`
    width: 100%;
    height: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;
    border-radius: 15px;
    -o-object-fit: contain;
    object-fit: contain;
`;