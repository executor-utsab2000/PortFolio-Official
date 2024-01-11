import React from 'react'
import Landing from './Components/Landing'
import About from './Components/About'
import Education from './Components/Education'
import Project from './Components/Project'
import Hobbies from './Components/Hobbies'
import Socials from './Components/Socials'
import Contact from './Components/Contact'
import {BrowserRouter  , Routes, Route} from 'react-router-dom' ;

const CombinedMainPg = () => {
  return (
    <>
        <Landing/>
        <About/>
        <Education/>
        <Project/>
        <Hobbies/>
        <Socials/>
        <Contact/>
    </>
  )
}

export default CombinedMainPg
