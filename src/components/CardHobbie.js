import { Typography } from '@material-ui/core'
import React from 'react'
import styled from 'styled-components';

// const Hobbie = styled.div`
//   width: 100px;
//   `;

export const CardHobbie = ({nameHobbie}) => {
  return (
    <>
     <Typography variant=".subtitle"> {nameHobbie} </Typography>
    </>
  )
}
