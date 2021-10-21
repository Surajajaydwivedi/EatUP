import React, { useState } from "react";
import SearchBar from "./SearchBar.js";
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
  SidebarMenu
} from "./InfoElements";
import { Button } from "./ButtonElement";
import Icon1 from "../../images/svg-4.svg";
import Icon2 from "../../images/svg-5.svg";
import Icon3 from "../../images/svg-6.svg";
import { animateScroll as scroll } from "react-scroll";
import Video from "../../video/video.mp4";

import { useEffect } from "react";
import { FaBars } from "react-icons/fa";

/*Navbar ka js */
const Navbar = ({ toggle }) => {
  const [scrollNav, setScrollNav] = useState(false);
  const changeNav = () => {
    if (window.scrollY >= 80) {
      setScrollNav(true);
    } else {
      setScrollNav(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", changeNav);
  }, []);

  const toggleHome = () => {
    scroll.scrollToTop();
  };

  return (
    <>
      <Nav scrollNav={scrollNav}>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>
            EatUp
          </NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                About
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                Discover
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                activeClass="active"
              >
                Services
              </NavLinks>
            </NavItem>
            <NavItem>
              <NavBtnLinksignup to="/signup">Sign Up</NavBtnLinksignup>
            </NavItem>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to="/signin">Sign In</NavBtnLink>
          </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  );
};

/*Sidebar ka js */
const Sidebar = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <Icon onClick={toggle}>
        <CloseIcon />
      </Icon>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="about" onClick={toggle}>
            About
          </SidebarLink>
          <SidebarLink to="discover" onClick={toggle}>
            Discover
          </SidebarLink>
          <SidebarLink to="services" onClick={toggle}>
            Services
          </SidebarLink>
          <SidebarLinksignup to="/signup">Sign Up</SidebarLinksignup>
        </SidebarMenu>
        <SideBtnWrap>
          <SidebarRoute to="/signin">Sign In</SidebarRoute>
        </SideBtnWrap>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

/*video section*/
const Banner = () => {
  const [hover, setHover] = useState(false);
  const onHover = () => {
    setHover(!hover);
  };
  return (
    <BannerContainer>
      <BannerBg>
        <VideoBg autoPlay loop muted src={Video} type="video/mp4" />
      </BannerBg>
      <BannerContent>
        <BannerH1>ASDFGHJK</BannerH1>
        <BannerP>1234567</BannerP>
        <SearchBar/>
      </BannerContent>
    </BannerContainer>
  );
};

/*InfoSection ka js*/
const InfoSection = ({
  lightBg,
  id,
  imgStart,
  topLine,
  lightText,
  darkText,
  buttonLabel,
  headline,
  description,
  img,
  alt,
  primary,
  dark,
  dark2
}) => {
  return (
    <>
      <InfoContainer lightBg={lightBg} id={id}>
        <InfoWrapper>
          <InfoRow imgStart={imgStart}>
            <Column1>
              <TextWrapper>
                <TopLine>{topLine}</TopLine>
                <Heading lightText={lightText}>{headline}</Heading>
                <Subtitle darkText={darkText}> {description} </Subtitle>
                <BtnWrap>
                  <Button
                    to="/signup"
                    smooth={true}
                    duration={500}
                    spy={true}
                    exact="true"
                    offset={-80}
                    primary={primary ? 1 : 0}
                    dark={dark ? 1 : 0}
                    dark2={dark2 ? 1 : 0}
                  >
                    {buttonLabel}
                  </Button>
                </BtnWrap>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={alt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

/*Services Section ka js */
const Services = () => {
  return (
    <ServicesContainer id="services">
      <ServicesH1>Our Services</ServicesH1>
      <ServicesWrapper>
        <ServicesCard>
          <ServicesIcon src={Icon1} />
          <ServicesH2>Card 1 Ka Title</ServicesH2>
          <ServicesP>
            Card 1 Ka Paragraph asdfghjkl asdfghjkl asdfghjkl asdfghjkl
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon2} />
          <ServicesH2>Card 2 Ka Title</ServicesH2>
          <ServicesP>
            Card 2 Ka Paragraph asdfghjkl asdfghjkl asdfghjkl asdfghjkl
          </ServicesP>
        </ServicesCard>
        <ServicesCard>
          <ServicesIcon src={Icon3} />
          <ServicesH2>Card 3 Ka Title</ServicesH2>
          <ServicesP>
            Card 3 Ka Paragraph asdfghjkl asdfghjkl asdfghjkl asdfghjkl
          </ServicesP>
        </ServicesCard>
      </ServicesWrapper>
    </ServicesContainer>
  );
};

/*Footer section ka js*/
const Footer = () => {
  const toggleHome = () => {
    scroll.scrollToTop();
  };
  return (
    <FooterContainer>
      <FooterWrap>
        <FooterLinkTitle to="/" onClick={toggleHome}>
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
  );
};

export { Navbar, Sidebar, Banner, InfoSection, Services, Footer };
