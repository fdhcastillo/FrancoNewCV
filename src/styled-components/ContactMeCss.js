import styled from 'styled-components'
import Paper from '@material-ui/core/Paper';

import WomanSocial from '../assets/images/WomanSocial.png'
import MessageImage  from "../assets/images/MessageImage.png";

export const ContactGridContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr );
  gap: 140px;
  margin: 100px 200px 150px;
  @media screen and (max-width: 1304px ){
    display: grid;
    grid-template-columns: 1fr;
    align-items: center;
    justify-content: center;
    gap: 50px;
  }
`

export const ContactMeCard = styled(Paper)`
  display: flex;
  justify-content: center;
  align-items:center;
  color:black;
  flex-flow: column wrap;
  min-height: 350px;
  min-width: 260px;
`

export const WomanContactMe = styled.img.attrs({
  src: `${WomanSocial}`
})`
max-width: 100%;
padding-right: auto;
padding-left: auto;
transition-duration: 500ms;
  &:hover {
    transform: scale(1.1);
    transition-duration: 500ms;
  }
`;
 
export const MessageImg = styled.img.attrs({
  src: `${MessageImage}`
})`
max-width: 100%;
`;
 

export const SocialContactMe = styled.div`
  @media screen and (max-width: 493px ){
    min-width: 200px;
  }

`