import React from 'react'
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';

import {
	 WelcomeGrid,
	 ResumeGrid,
	 SocialButton,
	 SocialIcon, 
	 ImageWelcome 
	} from './../styled-components/WelcomeCss';
	
export const Welcome = () => {

		const goLinkedin = () => {
		const urlLinkedin = 'https://www.linkedin.com/in/franco-david-hermoza-castillo-0155a0193/?fbclid=IwAR2ZNkG0cq6NrH-sMC_xL-uOUlCLd9LoTnkcBd-r8yOkqEPMLQGBf8-LfaU';
		window.open(urlLinkedin, "_blank")
	}
		const goGithub = () => {
		const urlLinkedin = 'https://github.com/fdhcastillo';
		window.open(urlLinkedin, "_blank")
	}

	return (
		<>
			<WelcomeGrid>
				<ImageWelcome></ImageWelcome>
				<ResumeGrid>
					<span>Hello world!</span>
					<h2 className="nes-text is-primary">I'm Franco Hermoza</h2>
					<h5>FrontEnd Developer</h5>
					<h5>specialized in <span className="nes-text is-warning">Javascript</span></h5>
					<h5> & <span className="nes-text is-primary"> React </span></h5>
					<SocialButton>
						<SocialIcon style={{border: 'none', outline:'none'}} onClick={goLinkedin}>
							<LinkedInIcon  fontSize="large" />
						</SocialIcon>
						<SocialIcon style={{border: 'none', outline:'none'}} onClick={goGithub}>
							<GitHubIcon fontSize="large" />
						</SocialIcon>
					</SocialButton>
				</ResumeGrid>
			</WelcomeGrid>
		</>
	)   
}
