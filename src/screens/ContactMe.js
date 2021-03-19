import React from 'react'
import { Footer } from '../components/Footer'
import { ContactGridContainer, ContactMeCard, MessageImg, SocialContactMe, WomanContactMe } from '../styled-components/ContactMeCss'
import { LinksItem } from '../styled-components/FooterCss'

import LinkedInIcon from '@material-ui/icons/LinkedIn';
import GitHubIcon from '@material-ui/icons/GitHub';
import FacebookIcon from '@material-ui/icons/Facebook';
import EmailIcon from '@material-ui/icons/Email';
import { ContactForm } from '../components/ContactForm';
import { Navbar } from '../components/Navbar';


export const ContactMe = () => {
  return (
    <>
      <Navbar></Navbar>
      <ContactGridContainer>
        <SocialContactMe>
          <h1 style={{marginBottom:'40px', textAlign: 'center'}}>ContactMe</h1>
          <ContactMeCard elevation={3} style={{backgroundColor: '#ffe082',color:'black',borderRadius:'30px'}}>
            <h6 style={{margin: '20px 5px'}}> <EmailIcon></EmailIcon> YOU CAN CONTACT ME VIA ...</h6>
            <LinksItem>
              <LinkedInIcon fontSize="large" /> 
              <a href="https://www.linkedin.com/in/franco-david-hermoza-castillo-0155a0193/" target="_blank" style={{color:'#000000'}}>
                Linkedin
              </a> 
            </LinksItem>
            <hr style={{width: '80%',borderColor:'black'}} />
            <LinksItem>
              <FacebookIcon fontSize="large" style={{marginRight:'5px'}} />
              <a href="https://www.facebook.com/francodavid.hermozacastillo/" target="_blank" style={{color:'#000000'}} >Facebook</a>
            </LinksItem>
            <hr style={{width: '80%',borderColor:'black'}} />
            <LinksItem> 
              <GitHubIcon fontSize="large" style={{marginRight:'5px'}} />
              <a href="https://github.com/fdhcastillo" target="_blank" style={{color:'#000000',textDecoration:'none'}}>
                Github &nbsp;
              </a>
            </LinksItem>
            <LinksItem style={{textAlign: 'center'}}>
              <i className="nes-octocat animate"></i>
            </LinksItem>
          </ContactMeCard>
        </SocialContactMe>
        <div>
          <WomanContactMe></WomanContactMe>
        </div>
        <ContactForm></ContactForm>
          <section className="message-list">
            <section className="message -left">
              <div className="nes-balloon from-left is-dark">
                <p>Thank you so much for visiting my Portfolio, I hope to see you soon</p>
              </div>
              <i className="nes-kirby"></i>
            </section>
          </section>
      </ContactGridContainer>
      <Footer></Footer>
    </>
  )
}
