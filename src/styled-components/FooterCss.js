import styled from 'styled-components';
import ImgFooterSocial from '../assets/images/Social.png'


export const GridContainerFooter = styled.div`
  display: grid;
  grid-template-columns: minmax(350px, 1fr);
`

export const GridItemsFooter = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  justify-content: center;
  background-color: #242d68;
  gap: 30px;
  color: white;
  @media screen and (max-width: 1320px ){
		display: grid;
    font-size: 15px;
    grid-template-columns:  minmax(350px, 1fr);
		justify-content: center;
		align-items: center;
		text-align: center;
    min-width: fit-content;
  }
`

export const QuickLinks = styled.ul`
  display: flex;
  flex-flow: column nowrap;
  `

export const LinksItem = styled.a`
  display:'block';
  margin-bottom: 10px;
  color: white;
`

export const ImageFooter = styled.img.attrs({
  src: `${ImgFooterSocial}`
})`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
  transition-duration: 500ms;
  &:hover {
    transform: scale(0.9);
    transition-duration: 500ms;
  }
  @media screen and (max-width: 1320px ){
		display:none;
  }
`;