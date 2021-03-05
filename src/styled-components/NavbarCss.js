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
