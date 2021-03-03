import React from 'react'
import { AboutMe } from './components/AboutMe';
import { Hobbies } from './components/Hobbies';
import { Navbar } from './components/Navbar';
import { Skills } from './components/Portfolio/Skills';
import { Welcome } from './components/Welcome'

export const MainScreen = () => {
    return (
        <>
            <Navbar></Navbar>
            <Welcome></Welcome>
            <AboutMe></AboutMe>
            <Hobbies></Hobbies>
            <Skills />
        </>
    )
}
