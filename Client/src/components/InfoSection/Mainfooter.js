import React, { useState } from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  Column1,
  Column2,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  BtnWrap,
  Img,
  ImgWrap,
  ServicesContainer,
  ServicesCard,
  ServicesH1,
  ServicesH2,
  ServicesIcon,
  ServicesP,
  ServicesWrapper,
  FooterContainer,
  FooterWrap,
  FooterLinksContainer,
  FooterCopyRight,
  FooterLink,
  FooterLinkItems,
  FooterLinkSubtitle,
  FooterLinkTitle,
  Nav,
  NavbarContainer,
  NavLogo,
  MobileIcon,
  NavItem,
  NavMenu,
  NavLinks,
  NavBtn,
  NavBtnLinksignup,
  NavBtnLink,
  VideoBg,
  BannerContainer,
  BannerBg,
  BannerContent,
  BannerBtnWrapper,
  BannerH1,
  BannerP,
  Search,
  ArrowRight,
  CloseIcon,
  Icon,
  SidebarContainer,
  SideBtnWrap,
  SidebarLink,
  SidebarLinksignup,
  SidebarWrapper,
  SidebarRoute,
  SidebarMenu,
} from "./InfoElements";

import Icon1 from "../../images/svg-4.svg";
import Icon2 from "../../images/svg-5.svg";
import Icon3 from "../../images/svg-6.svg";
import { animateScroll as scroll } from "react-scroll";
import Video from "../../video/video.mp4";

import { useEffect } from "react";
import { FaBars } from "react-icons/fa";

function app() {
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkTitle to="/">EatUp</FooterLinkTitle>
        <FooterLinkSubtitle>
          Get tools that grow your business
        </FooterLinkSubtitle>
        <FooterLinksContainer>
          <FooterLinkItems>
            <FooterLink to="/termsandconditions">
              Terms &#38; Conditions
            </FooterLink>
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
  );
}


export default app;