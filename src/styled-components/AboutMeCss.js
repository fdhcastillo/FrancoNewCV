import styled from 'styled-components';
import AboutmeImg from './../assets/images/Aboutme.png'
import AboutmeFondo from './../assets/images/fondoArriba.png'
import FondoDown from './../assets/images/fondoDown.png'



export const GridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 30px;
  background-color: #242d68;
  @media screen and (max-width: 828px ){
		display: grid;
    grid-template-columns: 1fr;
		justify-content: center;
		align-items: center;
		text-align: center;
  }
  @media screen and (min-width: 1933px ){
		height: 100vh;
    .img-aboutme{
      margin-bottom: auto;
      margin-top: auto;
      max-width: 100%;
    }
  }
`;

export const GridAboutMeDescription = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: start;
  margin: 0 40px;
`;

export const Description = styled.div`
  color: #cdcdcd;

`
export const ImageAboutme = styled.img.attrs({
  src: `${AboutmeImg}`
})`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
`;
 

export const GridFondoUp = styled.div`
  display:grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  @media screen and (min-width: 1933px ){
		display: none;
  }
`


export const FondoImgUp = styled.img.attrs({
  src: `${AboutmeFondo}`
})`
display: absolute;
left: 0;
max-width: 100%;
`;
 

export const GridFondoDown = styled.div`
  display:grid;
  grid-template-columns: 1fr;
  grid-template-rows: 1fr;
  @media screen and (min-width: 1933px ){
		display: none;
  }
`


export const FondoImgDown = styled.img.attrs({
  src: `${FondoDown}`
})`
max-width: 100%;
`;
 