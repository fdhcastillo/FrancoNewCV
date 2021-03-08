import ManProgrammingImg from '../assets/images/Skills.png'
import ComputerToolImg from '../assets/images/Tools.png'
import styled from 'styled-components'

// SKILLS GRID
export const GridSkills = styled.div`
  display: grid;
  grid-template-columns: 700px 300px;
  gap: 4px;
  margin: 135px 200px 0;
  @media screen and (max-width: 1320px ){
		display: grid;
    grid-template-columns: 1fr;
		justify-content: center;
		align-items: center;
		text-align: center;
  }
  @media screen and (min-width: 1933px ){
    display: grid;
    grid-template-columns: 1fr;
		justify-content: center;
		align-items: center;
		text-align: center;
  }
  .image-container {
    margin-top: auto;
    margin-bottom: auto;
    max-width: 100%;
  }
`

export const ImageSkill = styled.img.attrs({
  src: `${ManProgrammingImg}`
})`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
`;

// TOOLS GRID
export const GridTools = styled.div`
  display: grid;
  grid-template-columns: 700px 300px ;
  gap: 4px;
  margin: 135px 200px 0;
  @media screen and (max-width: 1320px ){
		display: grid;
    grid-template-columns: 1fr;
		justify-content: center;
		align-items: center;
		text-align: center;
  }
  @media screen and (min-width: 1933px ){
    display: grid;
    grid-template-columns: 1fr;
		justify-content: center;
		align-items: center;
		text-align: center;
  }
  .image-container-tool {
    margin-top: auto;
    margin-bottom: auto;
    max-width: 100%;
  }
`

export const ImageTool = styled.img.attrs({
  src: `${ComputerToolImg}`
})`
  margin-left: auto;
  margin-right: auto;
  max-width: 100%;
`;

