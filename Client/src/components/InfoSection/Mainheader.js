import React, { useState } from "react";
import Mainfooter from "./Mainfooter";
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
import { Button } from "../ButtonElement";
import Icon1 from "../../images/svg-4.svg";
import Icon2 from "../../images/svg-5.svg";
import Icon3 from "../../images/svg-6.svg";
import { animateScroll as scroll } from "react-scroll";
import Video from "../../video/video.mp4";

import { useEffect } from "react";
import { FaBars } from "react-icons/fa";

function App() {
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
    <Nav scrollNav={scrollNav}>
      <NavbarContainer>
        <NavLogo to="/" onClick={toggleHome}>
          EatUp
        </NavLogo>
          <FaBars />
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
  );
}


export default App;