import React from 'react'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Button, Typography } from '@material-ui/core';
import { StyledButton } from './IconsSkills';


export const IconsTools = () => {
  return (
    <div style={{textAlign: 'center'}}>
        <h3 style={{display: 'block',marginTop:'40px'}}>
          <ArrowForwardIosIcon fontSize="small" />   
            Tools
        </h3>
        <StyledButton
          size="large"
          color="primary"
          style={{outline:'none',margin: '8px'}}
          >
          <i className="devicon-github-original colored" style={{fontSize:'50px'}}></i>
          <h6 style={{fontSize:'20px',textTransform: 'none'}}>Github</h6>
        </StyledButton>
        <StyledButton
          size="large"
          color="primary"
          style={{outline:'none',margin: '8px'}}
          >
          <i className="devicon-git-plain colored" style={{fontSize:'50px'}}></i>
          <h6 style={{fontSize:'20px',textTransform: 'none'}}>Git</h6>
        </StyledButton>
        <StyledButton
          size="large"
          color="primary"
          style={{outline:'none',margin: '8px'}}
          >
          <i className="devicon-linux-plain colored" style={{fontSize:'50px'}}></i>
          <h6 variant="h4" style={{fontSize:'20px',textTransform: 'none'}}>Linux</h6>
        </StyledButton>
        <StyledButton
          size="large"
          color="primary"
          style={{outline:'none',margin: '8px'}}
          >
          <i className="devicon-ubuntu-plain colored" style={{fontSize:'50px'}}></i>
          <h6 variant="h4" style={{fontSize:'20px',textTransform: 'none'}}>Ubuntu</h6>
        </StyledButton>
        <StyledButton
          size="large"
          color="primary"
          style={{outline:'none',margin: '8px'}}
          >
          <i className="devicon-visualstudio-plain colored" style={{fontSize:'50px'}}></i>
          <h6 variant="h4" style={{fontSize:'20px',textTransform: 'none'}}>Visual Studio Code</h6>
        </StyledButton>
        <StyledButton
          size="large"
          color="primary"
          style={{outline:'none',margin: '8px'}}
          >
          <i className="devicon-devicon-plain colored" style={{fontSize:'50px'}}></i>
          <h6 variant="h4" style={{fontSize:'20px',textTransform: 'none'}}>Terminal</h6>
        </StyledButton>
        <StyledButton
          size="large"
          color="primary"
          style={{outline:'none',margin: '8px'}}
          >
          <i className="devicon-npm-original-wordmark colored" style={{fontSize:'50px'}}></i>
        </StyledButton>
      </div>
  )
}
