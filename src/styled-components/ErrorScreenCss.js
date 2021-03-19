import styled from 'styled-components';
import CatError from '../assets/images/CatError.png'

export const ErrorGridContainer = styled.div`
  display: 'grid';
  grid-template-columns: 1fr;
  background-color: #98d8d5;
  height: 100vh;
`

export const ErrorFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`

export const ImageCatError = styled.img.attrs({
  src: `${CatError}`
})`
  max-width: 100%;
`;