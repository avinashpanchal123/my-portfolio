import { useState, useEffect, useContext } from 'react'
import Navbar from './components/Navbar';
import ProfileSummary from './components/ProfileSummary'
import About from './components/About';
import SkillsRotator from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact';
import { ThemeContextProvider, ThemeContext } from './components/context/themeContext';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const changeTheme = () => {
    setIsDarkMode((prevMode) => !prevMode);
  };

  useEffect(()=>{
    let html = document.querySelector('html');
    html.classList.remove("light", "dark");
    let themeMode = !!isDarkMode ? 'dark' : "light";
    html.classList.add(themeMode)
  }, [isDarkMode])

  return (
    <>
    <ThemeContextProvider value={{ isDarkMode, changeTheme }}>
      <div>
        <Navbar />
        <ProfileSummary />
        <About />
        <SkillsRotator />
        <Projects />
        <Contact />
      </div>
      </ThemeContextProvider>
    </>
  )
}

export default App
