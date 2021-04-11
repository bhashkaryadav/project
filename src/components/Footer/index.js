import React  from 'react'
import { FaFacebook } from 'react-icons/fa'
import {
    FooterContainer,
    FooterWrap,
    FooterLinksContainer,
    FooterLinksWrapper,
    FooterLinkItems,
    FooterLinkTitle, 
    FooterLink,SocialMediaWrap,SocialMedia,SocialLogo,SocialIcons,SocialIconsLink} from './FooterElements'

const Footer = () => {

    return (
        <FooterContainer id="about">
            <FooterWrap>
                <FooterLinksContainer>
                    <FooterLinksWrapper>
                        <FooterLinkItems>
                            <FooterLinkTitle>Contact Us</FooterLinkTitle>
                            <FooterLink to="/signin">How It Works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                        <FooterLinkItems>
                            <FooterLinkTitle>About Us</FooterLinkTitle>
                            <FooterLink to="/signin">How It Works</FooterLink>
                            <FooterLink to="/signin">Testimonials</FooterLink>
                            <FooterLink to="/signin">Careers</FooterLink>
                            <FooterLink to="/signin">Investors</FooterLink>
                            <FooterLink to="/signin">Terms of Service</FooterLink>
                        </FooterLinkItems>
                    </FooterLinksWrapper>
                    <FooterLinksWrapper>
                     
                      
                    </FooterLinksWrapper>
                </FooterLinksContainer>
               <SocialMedia>
                   <SocialMediaWrap>
                       <SocialLogo to='/'>
                           Stock Analytics
                       </SocialLogo>
                       <SocialIcons>
                           <SocialIconsLink href="https://stock-market-analysis-cse445.herokuapp.com/" target= "_blank" aria-label="Facebook">
                                <FaFacebook />
                           </SocialIconsLink>
                       </SocialIcons>
                   </SocialMediaWrap>
               </SocialMedia>
            </FooterWrap>
        </FooterContainer>
    )
}

export default Footer
