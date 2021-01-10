import React from 'react'
import { BodyContainer,BodyInfo,BodyTwoText,BodyImage, BodyImageContainer, BodyHeaderText, BodyText } from './Body.elements'


// Dark, lightText

function BodyComponent({ item }) {
    return (
        <BodyContainer dark={item.dark} flexed={item.flexed} id='about'>
            <BodyInfo lightText={item.lightText}>
                <BodyHeaderText lightText={item.lightText}>{item.title}</BodyHeaderText>
                <BodyText lightText={item.lightText}>
                    {item.description1}
                </BodyText>
                <BodyTwoText lightText={item.lightText}>
                    {item.description}  
                </BodyTwoText>
            </BodyInfo>
            <BodyImageContainer >
                <BodyImage src={item.image} alt="Image" />
            </BodyImageContainer>
        </BodyContainer>
    )
}

export default BodyComponent;