import { Button, Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';

const GridSkills = styled.div`
  display: grid;
  grid-template-columns: 700px 1fr;
  gap: 4px;
  margin: 135px 200px 0;
  @media screen and (max-width: 828px ){
		display: grid;
    grid-template-columns: 1fr;
		justify-content: center;
		align-items: center;
		text-align: center;
  }
`

export const Skills = () => {
  return (
    <GridSkills>
      <div>
        <h1>Portfolio</h1>
        <Typography variant=".subtitle" style={{display: 'block',marginTop:'40px'}}>
          <ArrowForwardIosIcon fontSize="small" />   
            Lenguages and Frameworks
        </Typography>
        <Button
          size="large"
          style={{outline:'none'}}
          >
          <i className="devicon-html5-plain colored" style={{fontSize:'50px'}}></i>
          <Typography variant="h4" style={{fontSize:'20px',textTransform: 'none'}}>Html5</Typography>
        </Button>
        <Button
          size="large"
          style={{outline:'none'}}
          >
          <i className="devicon-css3-plain colored" style={{fontSize:'50px'}}></i>
            <Typography variant="h4" style={{fontSize:'20px',textTransform: 'none'}}>CSS</Typography>
        </Button>
        <Button
          size="large"
          style={{outline:'none'}}
          >
          <i className="devicon-javascript-plain colored" style={{fontSize:'50px'}}></i>
            <Typography variant="h4" style={{fontSize:'20px',textTransform: 'none'}}>JavaScript</Typography>
        </Button>
        <Button
          size="large"
          style={{outline:'none'}}
          >
          <i className="devicon-react-original colored" style={{fontSize:'50px'}}></i>
            <Typography variant="h4" style={{fontSize:'20px',textTransform: 'none'}}>React</Typography>
        </Button>
        <Button
          size="large"
          style={{outline:'none'}}
          >
          <i className="devicon-nodejs-plain colored" style={{fontSize:'50px'}}></i>
            <Typography variant="h4" style={{fontSize:'20px',textTransform: 'none'}}>NodeJs</Typography>
        </Button>
        <Button
          size="large"
          style={{outline:'none'}}
          >
          <i className="devicon-redux-original colored" style={{fontSize:'50px'}}></i>
            <Typography variant="h4" style={{fontSize:'20px',textTransform: 'none'}}>Redux</Typography>
        </Button>
        <Button
          size="large"
          style={{outline:'none'}}
          >
          <i className="devicon-materialui-plain colored" style={{fontSize:'50px'}}></i>
            <Typography variant="h4" style={{fontSize:'20px',textTransform: 'none'}}>MaterialUI</Typography>
        </Button>
        <Button
          size="large"
          style={{outline:'none'}}
          >
          <i className="devicon-mongodb-plain colored" style={{fontSize:'50px'}}></i>
            <Typography variant="h4" style={{fontSize:'20px',textTransform: 'none'}}>MongoDB</Typography>
        </Button>
        <Button
          size="large"
          style={{outline:'none'}}
          >
          <i className="devicon-bootstrap-plain colored" style={{fontSize:'50px'}}></i>
            <Typography variant="h4" style={{fontSize:'20px',textTransform: 'none'}}>Bootstrap</Typography>
        </Button>
      </div>
      <div>
        <h1>HOla</h1>
      </div>
    </GridSkills>
  )
}
