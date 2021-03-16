import React from 'react'
import { GridSkills, ImageSkill, GridTools, ImageTool} from '../../styled-components/SkillsCss'
import { IconsSkills } from '../IconsSkills'
import { IconsTools } from '../IconsTools'



export const Skills = () => {
  return (
    <>
      <GridSkills>
        <div>
          <h1>PortFolio</h1>
          <IconsSkills></IconsSkills>
        </div>
        <div className="image-container">
          <ImageSkill />
        </div>
      </GridSkills>
      <GridTools>
        <IconsTools></IconsTools>
        <div className="image-container-tool">
          <ImageTool />
        </div>
      </GridTools>
    </>
  )
}
