import { styled } from '@material-ui/core';
import React from 'react'
import { Footer } from './components/Footer';
import { Hobbies } from './components/Hobbies';
import { ThisIsMe } from './components/ThisIsMe';
import { Projects } from './components/Portfolio/Projects';
import { Skills } from './components/Portfolio/Skills';
import { Navbar } from './components/Navbar';


export const MainScreen = () => {
    return (
        <>  
            <Navbar></Navbar>
            <ThisIsMe></ThisIsMe>
            <Hobbies></Hobbies>
            <Skills />
            <Projects></Projects>
            <Footer></Footer>
        </>
    )
}
