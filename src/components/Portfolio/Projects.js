import React from 'react'
import styled from 'styled-components'

import { ProjectGridContainer} from '../../styled-components/ProjectsCss'
import { CardProject } from '../CardProject'



export const Projects = () => {
  return (
    <>
      <ProjectGridContainer id="projects">
        <h1>Projects</h1>
        <CardProject ></CardProject>
      </ProjectGridContainer>
    </>
  )
}
