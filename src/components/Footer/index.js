import React from 'react';
import { FooterContainer, IconsContainer, Logo,TextItem,LowerTextItem, FooterMenu,FooterItems,  IconLink, SocialIcons } from './Footer.elements';
import { FaFacebook, FaTwitter, FaPhone, FaGithub, FaRegCopyright } from 'react-icons/fa';

function Footer() {
    return (
        <>
            <FooterContainer>
                <FooterMenu>
                    <FooterItems></FooterItems>
                    <FooterItems></FooterItems>
                    <FooterItems></FooterItems>
                </FooterMenu>
                <IconsContainer>
                    <TextItem>Get in touch </TextItem>
                    <Logo>Jovan Mwesigwa Balambirwa</Logo>
                    <SocialIcons>
                        <IconLink href="/facebook"><FaFacebook /></IconLink>
                        <IconLink href="/twitter"><FaTwitter /></IconLink>
                        <IconLink href="/email"><FaPhone /></IconLink>
                        <IconLink href="/github"><FaGithub /></IconLink>
                    </SocialIcons>
                </IconsContainer>
                    <LowerTextItem>This project source code is available on my github.  <FaRegCopyright />  {new Date().getFullYear()}</LowerTextItem>
            </FooterContainer>
        </>
    )
}

export default Footer;
