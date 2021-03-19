//MATERIAL UI COMPONENTS
import Pdf from '../documentPdf/frontendcv.pdf';
import { Typography } from '@material-ui/core';
import CloudDownloadRoundedIcon from '@material-ui/icons/CloudDownloadRounded';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import Button from '@material-ui/core/Button';
// STYLED COMPONENTS 
import React from 'react'
import { 
  GridContainer, 
  GridAboutMeDescription, 
  Description, 
  GridFondoUp, 
  FondoImgUp,
  GridFondoDown,
  FondoImgDown,
} from '../styled-components/AboutMeCss'

import {ImageAboutme} from './../styled-components/AboutMeCss'
export const AboutMe = () => {
  return (
    <>
      <GridFondoUp id="aboutme">
        <FondoImgUp></FondoImgUp>
      </GridFondoUp>
      <GridContainer className="grid-container-aboutme">
        <GridAboutMeDescription>
          <Description>     
            <Typography variant="h2" component="h2">
            <ArrowForwardIosIcon fontSize="small" />   
              About me
            </Typography>
            <Typography variant="subtitle1" style={{ marginBottom: '30px'}}>MAIN INFORMATION ABOUT ME AND WHAT I 
            LOVE TO DO</Typography>
            <Typography variant="h6">I am a developer working on the frontEnd side (React), 
              I also have knowledge in backend.  I am passionate about technology and also psychology, 
              I love to read books about self development or how the mind works in daily life, at the same time 
              I investigate all kind of tools that relate to my professional career.
            </Typography>
            <a href={Pdf} without rel="noopener noreferrer" target="_blank" style={{textDecoration:'none'}}>
                <button
                  style={{ outline: 'none', marginTop: '20px', fontSize: '19px', borderRadius: '10px', color: '#252e6b', textTransform: 'none', height: '50px'}}
                > 
                  <Typography variant="h6"><CloudDownloadRoundedIcon fontSize="large" style={{marginRight:'10px'}} />Download my CV</Typography>
                </button>
            </a>   
          </Description>
        </GridAboutMeDescription>
        <ImageAboutme className="img-aboutme"></ImageAboutme>
      </GridContainer>
      <GridFondoDown>
        <FondoImgDown></FondoImgDown>
      </GridFondoDown>
    </>
  )
}
