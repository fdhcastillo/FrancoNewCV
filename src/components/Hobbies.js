import React from 'react';
import styled from 'styled-components';
import { CardHobbie } from './CardHobbie';
import MenuBookIcon from '@material-ui/icons/MenuBook';
import SportsEsportsIcon from '@material-ui/icons/SportsEsports';
import SchoolIcon from '@material-ui/icons/School';
import BrushIcon from '@material-ui/icons/Brush';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';

const GridContainerHobbies = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(2, 1fr);
  margin: 50px 200px 0;
  @media screen and (max-width: 828px ){
		display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: 1fr;
    justify-content:center;
    align-items:center;
    text-align: center;
  }
`
const CardFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  @media screen and (max-width: 828px ){
		display: flex;
    align-items: center;
    text-align: center;
    flex-direction: column;
  }
`
const FlexItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;
  transition-duration: 0.8s;
  &:hover{
    display: inline-block;
    vertical-align: middle;
    -webkit-transform: perspective(1px) translateZ(0);
    transform: perspective(1px) translateZ(0);
    -webkit-transition-duration: 1s;
    transition-duration: 1s;
    -webkit-transition-property: transform;
    transition-property: transform;
    -webkit-transform: scale(0.9);
     transform: scale(0.9);
  }
`

export const Hobbies = () => {
  return (
    <GridContainerHobbies id="hobbies">
     <h1>What I Like?</h1>
     <CardFlex>
      <FlexItem>
        <MenuBookIcon fontSize="large" color="primary" />
        <CardHobbie nameHobbie="Read Psychology Books" />
      </FlexItem>
      <FlexItem>
        <SportsEsportsIcon fontSize="large" />
        <CardHobbie nameHobbie="Play VideoGames" />
      </FlexItem>
      <FlexItem>
        <SchoolIcon fontSize="large" color="primary" />
        <CardHobbie nameHobbie="Learn && Study" />
      </FlexItem>
      <FlexItem>
        <BrushIcon fontSize="large" />
        <CardHobbie nameHobbie="Draw Pictures" />
      </FlexItem>
      <FlexItem>
        <DeveloperModeIcon fontSize="large" color="primary" />
        <CardHobbie nameHobbie="Make Code" />
      </FlexItem>
     </CardFlex> 
    </GridContainerHobbies>
  )
}
