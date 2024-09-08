import { useState } from 'react'
import Navbar from './components/Navbar';
import ProfileSummary from './components/ProfileSummary'
import About from './components/About';
import SkillsRotator from './components/Skills'
import Projects from './components/Projects'

function App() {
  
  return (
    <>
    <Navbar />
    <ProfileSummary />  
    <About />
    <SkillsRotator/>
    <Projects />
    {/* <h1>Hello</h1> */}
    </>
  )
}

export default App
