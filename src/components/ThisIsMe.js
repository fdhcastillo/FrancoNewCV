import React from 'react'
import {NavbarContainer} from '../styled-components/NavbarCss';
import { Welcome } from './Welcome'
import { AboutMe } from './AboutMe';


export const ThisIsMe = () => {
    return (
        <>  
            <NavbarContainer>
                <Welcome></Welcome>
                <AboutMe></AboutMe>
            </NavbarContainer>
        </>
    )
}
