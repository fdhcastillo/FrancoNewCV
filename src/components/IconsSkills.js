import React from 'react'
import styled from 'styled-components'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { Button } from '@material-ui/core';

export const StyledButton = styled(Button)`
   &:hover {
    transform: scale(1.3);
    color: #141414;
  }
`

export const IconsSkills = () => {
  return (
    <div style={{textAlign: 'center'}}>
        <h3 style={{display: 'block',marginTop:'40px'}}>
          <ArrowForwardIosIcon fontSize="small" />   
            Lenguages and Frameworks
        </h3>
        <StyledButton
          size="large"
          color="primary"
          style={{outline:'none', margin: '8px'}}
          >
          <i className="devicon-html5-plain colored" style={{fontSize:'50px'}}></i>
          <h6 style={{fontSize:'20px',textTransform: 'none'}}>Html5</h6>
        </StyledButton>
        <StyledButton
          size="large"
          color="primary"
          style={{outline:'none', margin: '8px'}}
          >
          <i className="devicon-css3-plain colored" style={{fontSize:'50px'}}></i>
            <h6 style={{fontSize:'20px',textTransform: 'none'}}>CSS</h6>
        </StyledButton>
        <StyledButton
          size="large"
          color="primary"
          style={{outline:'none', margin: '8px'}}
          >
          <i className="devicon-javascript-plain colored" style={{fontSize:'50px'}}></i>
            <h6 style={{fontSize:'20px',textTransform: 'none'}}>JavaScript</h6>
        </StyledButton>
        <StyledButton
          size="large"
          color="primary"
          style={{outline:'none', margin: '8px'}}
          >
          <i className="devicon-react-original colored" style={{fontSize:'50px'}}></i>
            <h6 style={{fontSize:'20px',textTransform: 'none'}}>React</h6>
        </StyledButton>
        <StyledButton
          size="large"
          color="primary"
          style={{outline:'none', margin: '8px'}}
          >
          <i className="devicon-nodejs-plain colored" style={{fontSize:'50px'}}></i>
            <h6 style={{fontSize:'20px',textTransform: 'none'}}>NodeJs</h6>
        </StyledButton>
        <StyledButton
          size="large"
          color="primary"
          style={{outline:'none', margin: '8px'}}
          >
          <i className="devicon-redux-original colored" style={{fontSize:'50px'}}></i>
            <h6 style={{fontSize:'20px',textTransform: 'none'}}>Redux</h6>
        </StyledButton>
        <StyledButton
          size="large"
          color="primary"
          style={{outline:'none', margin: '8px'}}
          >
          <i className="devicon-materialui-plain colored" style={{fontSize:'50px'}}></i>
            <h6 style={{fontSize:'20px',textTransform: 'none'}}>MaterialUI</h6>
        </StyledButton>
        <StyledButton
          size="large"
          color="primary"
          style={{outline:'none', margin: '8px'}}
          >
          <i className="devicon-mongodb-plain colored" style={{fontSize:'50px'}}></i>
            <h6 style={{fontSize:'20px',textTransform: 'none'}}>MongoDB</h6>
        </StyledButton>
        <StyledButton
          size="large"
          color="primary"
          style={{outline:'none', margin: '8px'}}
          >
          <i className="devicon-bootstrap-plain colored" style={{fontSize:'50px'}}></i>
            <h6 style={{fontSize:'20px',textTransform: 'none'}}>Bootstrap</h6>
        </StyledButton>
        <StyledButton
          size="large"
          color="primary"
          style={{outline:'none', margin: '8px'}}
          >
          <i className="devicon-sass-original colored" style={{fontSize:'50px'}}></i>
        </StyledButton>
      </div>
  )
}
