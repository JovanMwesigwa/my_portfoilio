import React from 'react'
import { HeroContainer, HeroBg, VideoBg, HeroIconsContainer,IconLink, HeroContent, HeroHeader,HeroSubHeader, HeroSubText } from './Hero.elements'
import Video from '../../assets/video.mp4';
import { FaTwitter, FaFacebook, FaGithub } from 'react-icons/fa'
import { SiGmail  } from 'react-icons/si'



function Hero() {
    return (
        <>
            <HeroContainer id="hero">
                <HeroBg>
                    <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
                </HeroBg>
                <HeroContent>
                    <HeroHeader>JOVAN MWESIGWA B.</HeroHeader>
                    <HeroSubHeader>(WEB DEVELOPER)</HeroSubHeader>
                    <HeroSubText>I build software that is meant to satisfy your desires using the best technology out there.</HeroSubText>
                    <HeroIconsContainer>
                        <IconLink href="https://github.com/JovanMwesigwa"><FaGithub /></IconLink>
                        <IconLink href="/email"><SiGmail /></IconLink>
                        <IconLink href="/facebook"><FaFacebook /></IconLink>
                        <IconLink href="/twitter"><FaTwitter /></IconLink>
                    </HeroIconsContainer>
                </HeroContent>
            </HeroContainer>
        </>
    )
}

export default Hero
