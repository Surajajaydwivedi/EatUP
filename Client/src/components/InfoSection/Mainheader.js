import React from 'react'
import { animateScroll as scroll } from "react-scroll";
import { Header,HeaderContainer,HeaderLogo} from './InfoElements';
const Mainheader = () => {
    return (
        <Header>
            <HeaderContainer>
                <HeaderLogo to='/'>
                    EatUp
                </HeaderLogo>
            </HeaderContainer>
        </Header>
    )
}

export default Mainheader
