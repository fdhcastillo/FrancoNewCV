//MATERIAL UI COMPONENTS
import { Typography } from '@material-ui/core'
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
            <Typography variant="subtitle1" style={{ marginBottom: '30px'}}>MAIN INFORMATION ABOUT ME AND WHAT I LOVE TO DO</Typography>
            <Typography variant="h6">I am a developer who works on the frontEnd side (React) 
              although I also have backend knowledge, 
              passionate about technology and also about psychology since 
              I love reading books about self development or how the mind works in daily life and its time,
              investigate all kinds of tools that have to do with my professional career.
            </Typography>
            <Button
              variant="contained"
              startIcon={<CloudDownloadRoundedIcon />}
              style={{ outline: 'none', marginTop: '20px', fontSize: '19px', borderRadius: '10px', color: '#252e6b', textTransform: 'none'}}
            >
              <Typography variant="h6">Dowload my CV</Typography>
            </Button>
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
