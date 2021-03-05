import React from 'react'
import {NavbarCss, NavbarLogo,NavbarItems,NavbarLink} from '../styled-components/NavbarCss';

export const Navbar = () => {
    return (
        <>
            <NavbarCss>
                <NavbarLogo className="nes-text">FrancoDev</NavbarLogo>
                <div className="nes-badge is-splited">
                    <span className="is-dark">Front</span>
                    <span className="is-primary">End</span>
                </div>
                <NavbarItems>
                    <NavbarLink className="nes-text is-success">Home</NavbarLink>
                    <NavbarLink className="nes-text is-warning">ContactMe</NavbarLink>
                </NavbarItems>
            </NavbarCss>
        </>
    )
}
