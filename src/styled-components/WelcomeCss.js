import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';
import manImg from '../assets/images/image.jpg';

export const WelcomeGrid = styled.div`
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	grid-gap: 20px;
	@media screen and (max-width: 828px ){
		display: grid;
    grid-template-columns: 1fr;
		justify-content: center;
		align-items: center;
		text-align: center;
  }
`;

export const ResumeGrid = styled.div`
	display:flex;
	flex-flow: column wrap;
	justify-content: center;
`;

export const ImageWelcome = styled.img.attrs({
  src: `${manImg}`
})`
max-width: 100%;
height: 80vh;
display:block;
margin:auto;
`;

export const SocialButton = styled.div`
	display:flex;
	flex-flow: row wrap;
	margin: 10px;
	@media screen and (max-width: 828px ){
		display: flex;
		justify-content: center;
		align-items: center;
		text-align: center;
  }
`;

export const SocialIcon = styled(IconButton)`
	margin: 20px;
`;

