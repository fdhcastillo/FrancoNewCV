import React from 'react'
import { Link } from 'react-router-dom';
import { FondoImgUp} from '../styled-components/AboutMeCss'
import { GridItemsFooter, QuickLinks, LinksItem, ImageFooter,GridContainerFooter, TitleFooter } from '../styled-components/FooterCss'

import AlternateEmailIcon from '@material-ui/icons/AlternateEmail';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import FavoriteIcon from '@material-ui/icons/Favorite';


export const Footer = () => {
  return (
    <>
    <GridContainerFooter>
    <FondoImgUp></FondoImgUp>
    </GridContainerFooter>
    <GridItemsFooter>
      <QuickLinks>
        <h1>Quick Links</h1>
        <LinksItem href="/#main" style={{color:'white'}}> Header </LinksItem>
        <LinksItem href="/#aboutme" style={{color:'white'}}> Aboutme </LinksItem>
        <LinksItem href="/#hobbies" style={{color:'white'}}> Hobbies </LinksItem>
        <LinksItem href="/#projects" style={{color:'white'}}> Projects </LinksItem>
        <LinksItem href="/contactme" style={{color:'white'}}> 
          <AlternateEmailIcon fontSize="large" />
          Send an Email 
        </LinksItem>
      </QuickLinks>
      <QuickLinks>
      <h1>Social Media</h1>
        <LinksItem>
          <LinkedInIcon fontSize="large" style={{marginRight:'5px'}} /> 
          <a href="https://www.linkedin.com/in/franco-david-hermoza-castillo-0155a0193/" target="_blank" style={{color:'white'}}>
            Linkedin
          </a> 
        </LinksItem>
        <LinksItem> 
          <GitHubIcon fontSize="large" style={{marginRight:'5px'}} />
          <a href="https://github.com/fdhcastillo" target="_blank" style={{color:'white'}}>
            GitHub
          </a>
        </LinksItem>
        <LinksItem>
          <FacebookIcon fontSize="large" style={{marginRight:'5px'}} />
          <a href="https://www.facebook.com/francodavid.hermozacastillo/" target="_blank" style={{color:'white'}} >Facebook</a>
        </LinksItem>
      </QuickLinks>
      <ImageFooter></ImageFooter>
    </GridItemsFooter>
    <TitleFooter style={{color: 'white'}}>  Made with <FavoriteIcon style={{color : 'red'}} /> by Franco</TitleFooter>
    </>
  )
}
