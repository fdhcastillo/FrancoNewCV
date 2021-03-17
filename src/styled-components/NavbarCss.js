import styled from "styled-components";

import { 
  Link
} from 'react-router-dom'
// Estilos de mi navbar
export const NavbarContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  min-width: 375px;
`


export const NavbarCss = styled.nav`
  display: flex;
  justify-content:space-between;
  align-items:center;
  padding: 0 30px;
  max-width: 100%;
  @media screen and (max-width: 828px ){
    flex-flow: column wrap;
    margin-left: 30px;
  }
`;

export const NavbarLogo = styled.h1`
  display: inline;
`;

export const NavbarItems = styled.li`
  display:flex;
  align-items:center;
`;

export const NavbarLink = styled(Link)`
  margin-right: 20px;
  font-size: 20px;
  color: #272727;
`;
