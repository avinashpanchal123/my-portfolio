import { useState } from 'react'
import Navbar from './components/Navbar';
import ProfileSummary from './components/ProfileSummary'
import About from './components/About';
import SkillsRotator from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact';

function App() {
  
  return (
    <>
    <Navbar />
    <ProfileSummary />  
    <About />
    <SkillsRotator/>
    <Projects />
    <Contact/>
    </>
  )
}

export default App
