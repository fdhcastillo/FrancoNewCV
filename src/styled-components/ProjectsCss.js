import styled from 'styled-components'

export const ProjectGridContainer = styled.div`
  display: grid;
  margin: 135px 200px 300px;
  justify-content: center;
  align-items: center;
  text-align: center;
  gap: 50px;
`

export const CardProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: 1fr;
  text-align: center;
  gap: 30px;
  @media screen and (max-width: 1320px ){
		display: grid;
    grid-template-columns: 1fr;
		justify-content: center;
		align-items: center;
		text-align: center;
    max-width: 530px;
    gap: 30px;
  }
`
