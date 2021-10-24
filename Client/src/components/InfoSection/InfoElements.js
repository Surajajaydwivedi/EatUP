import styled from 'styled-components';
import {Link as LinkR} from 'react-router-dom';
import { Link as LinkS} from 'react-scroll';
import {MdKeyboardArrowRight, MdArrowForward} from 'react-icons/md'
import {FaTimes} from 'react-icons/fa';


export const Header= styled.nav`
    background: #000;
    height: 80px;
    display: flex;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    margin-top: -80px;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;
export const HeaderContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width:100%;
    position: sticky;
    max-width:1100px;
    z-index: 1;
    padding: 0 24px;
`;
export const HeaderLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration:none;
`;

/*Navbar ka css*/
export const Nav = styled.nav`
    /*background: ${({scrollNav}) => (scrollNav ? '#000': 'transparent')};*/
    background: #000;
    height: 80px;
    display: flex;
    justify-content: center;
    font-size: 1rem;
    position: sticky;
    top: 0;
    z-index: 10;
    margin-top: -80px;

    @media screen and (max-width: 960px){
        transition: 0.8s all ease;
    }
`;
export const NavbarContainer = styled.nav`
    display: flex;
    justify-content: space-between;
    height: 80px;
    width:100%;
    position: sticky;
    max-width:1100px;
    z-index: 1;
    padding: 0 24px;
`;
export const NavLogo = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-left: 24px;
    font-weight: bold;
    text-decoration:none;
`;

export const MobileIcon = styled.div`
    display: none;
    @media screen and (max-width: 768px){
        display:block;
        position: absolute;
        top: 0;
        right: 0;
        transform: translate(-100%, 60%);
        font-size: 1.8rem;
        cursor: pointer;
        color: #fff;
    }
`;
export const NavMenu = styled.ul`
    display: flex;
    align-items: center;
    list-style: none;
    text-align:center;
    margin-right: -24px;

    @media screen and (max-width: 768px){
        display: none;
        
    }
`;

export const NavItem = styled.li`
    height: 80px;
`;

export const NavLinks = styled(LinkS)`
    color: #fff;
    display:flex;
    align-items:center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #01bf71;
        border-radius: 3px;
    }
`;

export const NavBtn = styled.nav`
    display: flex;
    align-items: center;

    @media screen and (max-width: 768px){
        display: none;
    }
`;

export const NavBtnLinksignup = styled(LinkR)`
    color: #fff;
    display:flex;
    align-items:center;
    text-decoration: none;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;

    &.active{
        border-bottom: 3px solid #01bf71;
        border-radius: 3px;
    }
`;

export const NavBtnLink = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 10px 22px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606
    }
`;
/*Sidebar ka css*/
export const SidebarContainer = styled.aside`
    position: fixed;
    z-index: 999;
    width: 100%;
    height: 100%;
    background: #0d0d0d;
    display: grid;
    align-items: center;
    top: 0;
    left: 0;
    transition: 0.3s ease-in-out;
    opacity: ${({isOpen}) => (isOpen? '100%' : '0')};
    top: ${({isOpen}) => (isOpen? '0' : '-100%')};
`;

export const CloseIcon = styled(FaTimes)`
   color: #fff;
`;

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
`; 

export const SidebarWrapper = styled.div`
    color: #fff;
`;

export const SidebarMenu = styled.ul`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(6, 80px);
    text-align: center;

    @media screen and (max-width: 480px){
        grid-template-rows: repeat(6, 80px);
    }
`;
export const SidebarLink = styled(LinkS)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`;

export const SideBtnWrap = styled.div`
    display: flex;
    justify-content:center;
`;

export const SidebarLinksignup = styled(LinkR)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    text-decoration: none;
    color: #fff;
    cursor: pointer;

    &:hover {
        color: #01bf71;
        transition: 0.2s ease-in-out;
    }
`;

export const SidebarRoute = styled(LinkR)`
    border-radius: 50px;
    background: #01bf71;
    white-space: nowrap;
    padding: 16px 64px;
    color: #010606;
    font-size: 16px;
    outline: none;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease-in-out;
    text-decoration: none;

    &:hover{
        transition: all 0.2s ease-in-out;
        background: #fff;
        color: #010606;
    }
`;


/*video banner ka css */
export const BannerContainer = styled.div`
    background: #0c0c0c;
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 30px;
    height: 800px;
    position:relative;
    z-index:  1;

    :before{
        position: absolute;
        content: " ";
        top: 0;
        left: 0;
        right: 0;
        bottom: 0;
        background: linear-gradient(to bottom, rgba(0,0,0,0) 0%, rgba(0,0,0,1) 100%);

    z-index: 2;
        
    }

`;

export const BannerBg = styled.div`
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    width: 100%;
    overflow: hidden;
`;

export const VideoBg = styled.video`
    width: 100%;
    height: 100%;
    -o-object-fit: cover;
    object-fit: cover;
    background: #232a34;

`;

export const BannerContent = styled.div`
    z-index: 3;
    max-width: 1200px;
    position: absolute;
    padding: 8px 24px;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const BannerH1 = styled.h1`
    color: #fff;
    font-size: 48px;
    text-align: center;

    @media screen and (max-width: 768px){
        font-size: 40px;
    }

    @media screen and (max-width: 480px){
        font-size: 32px;
    }
`; 

export const BannerP = styled.p`
    margin-top: 24px;
    color: #fff;
    font-size: 24px;
    text-align: center;
    max-width: 600px;

    @media screen and (max-width: 768px){
        font-size: 24px;
    }

    @media screen and (max-width: 480px){
        font-size: 18px;
    }
`; 
export const BannerBtnWrapper = styled.div`
    margin-top: 32px;
    display: flex;
    flex-direction: column;
    
    text-align: center;
    

`; 


export const ArrowRight = styled(MdKeyboardArrowRight)`
    margin-left: 8px;
    font-size: 15px;
`;

export const Search = styled(MdArrowForward)`
    margin-left: 8px;
    font-size: 15px;
`;

/*Info Section ka css*/
export const InfoContainer = styled.div`
    color: #fff;
    
    background: ${({lightBg}) => (lightBg ? '#f9f9f9':'#010606')};
    @media screen and (max-width: 768px){
        padding: 100px 0;
    }
`;

export const InfoWrapper = styled.div`
    display: grid;
    z-index: 1;
    height: 860px;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;
    padding: 0 24px;
    justify-content: center;
    

`;

export const InfoRow = styled.div`
    display: grid;
    grid-gap: 30px;
    grid-auto-columns: minmax(auto, 1fr);
    align-items: center;
    grid-template-areas: ${({imgStart})=> (imgStart ? `'col2 col1'` : `'col1 col2'`)};

    @media screen and (max-width: 768px){
        grid-template-areas: ${({imgStart})=> (imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`)};
    }
`;

export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col1;
    

`;

export const Column2 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;
    grid-area: col2;

`;

export const TextWrapper = styled.div`
    max-width: 540px;
    padding-top: 0;
    padding-bottom: 60px;
    
    
`;

export const TopLine = styled.p`
    color: #01bf71;
    font-size: 16px;
    line-height: 16px;
    font-weight: 700;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 16px;
`;

export const Heading =styled.h1`
    margin-bottom: 24px;
    font-size: 48px;
    line-height: 1.1;
    font-weight: 600;
    color: ${({lightText})=> (lightText ? '#f7f8fa' : '#010606')};

    @media screen and (max-width: 480px){
        font-size: 32px
    }
`;

export const Subtitle = styled.p`
    max-width: 440px;
    margin-bottom: 35px;
    font-size: 18px;
    line-height: 24px;

    color: ${({darkText})=> (darkText ? '#010606' : '#fff')};
`;

export const BtnWrap = styled.div`
    display: flex;
    justify-content: flex-start;


`;

export const ImgWrap = styled.div`
    max-width: 555px;
    height: 100%;

`;

export const Img = styled.img`
    width: 100%;
    margin: 0 0 10px 0;
    padding-right: 0;

`;
/*Services Section ka css*/
export const ServicesContainer = styled.div`
    height: 800px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: #010606;

    @media screen and (max-width: 768px){
        height:1100px;
    }

    @media screen and (max-width: 480px){
        height: 1300px;
    }

`;
export const ServicesWrapper = styled.div`
    max-width: 1000px;
    margin: 0 auto;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    align-items: center;
    grid-gap: 16px;
    padding: 0 50px;

    @media screen and (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }

    @media screen and (max-width: 768px){
        grid-template-columns: 1fr;
        padding: 0 20px;
    }
`;

export const ServicesCard = styled.div`
    background: #fff;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    border-radius: 10px;
    max-height: 340px;
    padding: 30px;
    box-shadow:  0 1px 3px rgba(0,0,0,0.2);
    transition: all 0.2s ease-in-out;

    &:hover{
        transform: scale(1.02);
        transition: all 0.2s ease-in-out;
        cursor: pointer;
    }
`;

export const ServicesIcon = styled.img`
    height: 160px;
    width: 160px;
    margin-bottom: 10px;
`;

export const ServicesH1 = styled.h1`
    font-size: 2.5rem;
    color: #fff;
    margin-bottom: 64px;

    @media screen and (max-width :480px){
        font-size: 2rem;
    }
`;

export const ServicesH2 =styled.h2`
    font-size: 1rem;
    margin-bottom: 10px;
`;

export const ServicesP = styled.p`
    font-size: 1rem;
    text-align:center;
`;

export const FooterContainer = styled.footer`
    background-color: #101522;
`;

export const FooterWrap = styled.div`
    padding: 48px 24px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    max-width: 1100px;
    margin: 0 auto;
`;

export const FooterLinksContainer = styled.div`
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        flex-direction: column;
    }
`;

export const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 16px;
    text-align: center;
    width:140px;
    
    color: #ffffff;

    @media screen and (max-width: 420px){
        margin: 0;
        padding: 10px;
        width: 140px;
    }
`;

export const FooterLinkTitle = styled(LinkR)`
    color: #fff;
    justify-self: flex-start;
    cursor: pointer;
    font-size: 1.5rem;
    display: flex;
    align-items: center;
    margin-top: 1.5rem;
    margin-bottom: 1.5rem;
    font-weight: bold;
    text-decoration:none;
`;

export const FooterLinkSubtitle = styled.h1`
    color: #01bf71;
    font-size: 14px;
    margin-bottom: 16px;
`;

export const FooterLink = styled(LinkR)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 1.5rem;
    font-size: 14px;

    &:hover{
        color: #01bf71;
        transition: 0.3s ease-out;
    }
`;

export const FooterCopyRight = styled.small`
    color: #ffffff;
    font-size: 14px;
    margin-bottom: 16px;
`;
