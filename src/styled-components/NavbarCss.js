import styled from "styled-components";

// Estilos de mi navbar
export const NavbarCss = styled.nav`
  display: flex;
  justify-content:space-between;
  align-items:center;
  padding: 0 20px;
  @media screen and (max-width: 828px ){
    flex-direction: column;
  }
`;

export const NavbarLogo = styled.h1`
  position: relative;
  left: 20px;
`;

export const NavbarItems = styled.li`
  display:flex;
  align-items:center;
`;

export const NavbarLink = styled.a`
  margin-right: 20px;
  font-size: 20px;
`;

export const Cat = styled.div`
@media screen and (max-width: 1270px ){
    display: none;
  }
`

export const MessageCat = styled.div`
  position: fixed;
  width: 100px; 
  height: 18px; 
  left: 1065px;
@media screen and (min-width: 1552px ){
    left: 1280px;
  }

`