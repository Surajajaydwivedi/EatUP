import React from 'react'
import { FooterContainer,FooterWrap, FooterLinkTitle, FooterLinkSubtitle, FooterLinksContainer,FooterLinkItems, FooterLink, FooterCopyRight } from './InfoElements'
const Mainfooter = () => {
    return (
        <FooterContainer>
        <FooterWrap>
            <FooterLinkTitle to="/">
            EatUp
            </FooterLinkTitle>
            <FooterLinkSubtitle>
            Get tools that grow your business
            </FooterLinkSubtitle>
            <FooterLinksContainer>
            <FooterLinkItems>
                <FooterLink to="/termsandconditions">Terms &#38; Conditions</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
                <FooterLink to="/privacypolicy">Privacy Policy</FooterLink>
            </FooterLinkItems>

            <FooterLinkItems>
                <FooterLink to="/contactus">Conatct Us</FooterLink>
            </FooterLinkItems>
            </FooterLinksContainer>
            <FooterCopyRight>
            {" "}
            &copy; EatUp {new Date().getFullYear()}
            &nbsp;All rights reserved.
            </FooterCopyRight>
        </FooterWrap>
        </FooterContainer>
            
        
    )
}

export default Mainfooter
