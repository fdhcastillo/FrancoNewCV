import React from 'react'
import {NavbarCss, NavbarLogo,NavbarItems,NavbarLink,NavbarContainer} from '../styled-components/NavbarCss';
import { Welcome } from './Welcome'
import { AboutMe } from './AboutMe';


export const ThisIsMe = () => {
    return (
        <>  
            <NavbarContainer>
                {/* <NavbarCss>
                    <NavbarLogo className="nes-text">FrancoDev</NavbarLogo>
                    <div className="nes-badge is-splited">
                        <span className="is-dark">Front</span>
                        <span className="is-primary">End</span>
                    </div>
                    <NavbarItems>
                        <NavbarLink className="nes-text is-success">Home</NavbarLink>
                        <NavbarLink className="nes-text is-warning">ContactMe</NavbarLink>
                    </NavbarItems>
                </NavbarCss> */}
                <Welcome></Welcome>
                <AboutMe></AboutMe>
            </NavbarContainer>
        </>
    )
}
