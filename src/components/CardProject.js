import React, {useState,useEffect} from 'react'
import styled from 'styled-components'

import {ProjectsData} from '../dataProjects/projectsData'
import {CardProjectGrid} from '../styled-components/ProjectsCss'
//components material UI
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { Box, Paper } from '@material-ui/core';
import CodeIcon from '@material-ui/icons/Code';




const MiniCardProject = styled(Box)`
  min-width: 20px;
  align-self: end;
  &:hover{
    background-color: #ffe082;
    -webkit-transform: rotate(360deg) scale(0.8);
    -moz-transform: rotate(360deg) scale(0.8);
    -o-transform: rotate(360deg) scale(0.8);
    -ms-transform: rotate(360deg) scale(0.8);
    transform: rotate(360deg) scale(0.8);
    transition: 1s ease-in-out;
  }
  @media screen and (max-width: 366px ){
		.mini-card {
      min-width: 100px;
    }
  }
`

export const CardProject = () => {
  const [projects, setProjects] = useState([])
  useEffect(() => {
    setProjects(ProjectsData);
  }, [])
  return (
    <>
      <CardProjectGrid>
        {
          projects.map(project => {
            return (
                  <MiniCardProject
                    border={4}
                    borderBottom={4}
                    borderTop={4}
                    borderLeft={4}
                    borderRight={4}
                    borderColor="primary.main"
                    borderRadius={16}
                    className="mini-card" 
                    key={project.id}
                    >
                        <CardContent>
                          <h3>
                            {project.name}
                          </h3>
                          <CodeIcon />
                          <Typography variant="body2" gutterBottom>
                            {project.description}
                            <br />
                            <h3>Tecnologies</h3>
                            {project.tecnologies}
                          </Typography>
                          <CodeIcon />
                          <br />
                        </CardContent>
                        <div style={{display:'flex',justifyContent: 'space-between', padding:'5px'}}>
                          <i className="devicon-github-original-wordmark colored" style={{fontSize: '4rem'}} />
                          <a href={project.gitUrl} target="_blank">{project.name} Github </a>
                        </div>
                  </MiniCardProject>
              )
          })
        }
      </CardProjectGrid>
    </>
  );
}
