import { useState, useContext } from 'react';
import { FaSun, FaMoon, FaBars } from 'react-icons/fa';
import { ThemeContext } from './context/themeContext';

const Navbar = ({ projectsRef, infoRef, skillRef, contactRef, homeRef }) => {
  const { isDarkMode, changeTheme } = useContext(ThemeContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleTheme = () => {
    changeTheme();
  };

  const handleScroll = (ref) => {
    window.scrollTo({
      top: ref.offsetTop,
      left: 0,
      behavior: 'smooth',
    });
  };

  return (
    <header>
      <nav className=' fixed top-0 left-0 w-full bg-emerald-400 text-white shadow-lg px-8 md:px-16 lg:px-24 w-full z-10'>
        <div className='container py-2 flex justify-between items-center'>
          <div className='text-2xl font-bold'>
            <a href="#" onClick={() => handleScroll(homeRef.current)} className='hover:text-gray-400'>
              Avinash Panchal
            </a>
          </div>

          {/* Desktop Links */}
          <div className='hidden md:flex space-x-6'>
            <a href="#about" onClick={() => handleScroll(infoRef.current)} className='hover:text-gray-400 mt-1'>
              About Me
            </a>
            <a href="#skills" onClick={() => handleScroll(skillRef.current)} className='hover:text-gray-400 mt-1'>
              Skills
            </a>
            <a href="#project" onClick={() => handleScroll(projectsRef.current)} className='hover:text-gray-400 mt-1'>
              Projects
            </a>
            <a href="#contact" onClick={() => handleScroll(contactRef.current)} className='hover:text-gray-400 mt-1'>
              Contact
            </a>
            <button
              className="flex items-center bg-gradient-to-r text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
              onClick={handleTheme}
            >
              {isDarkMode ? <FaSun className="w-5 h-5 mr-2" /> : <FaMoon className="w-5 h-5 mr-2" />}
            </button>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className='md:hidden'>
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-white focus:outline-none">
              <FaBars className="w-6 h-6" />
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className='md:hidden'>
            <div className='flex flex-col space-y-4 p-4 bg-emerald-400'>
              <a href="#about" onClick={() => { setIsMenuOpen(false); handleScroll(infoRef.current); }} className='hover:text-gray-400'>
                About Me
              </a>
              <a href="#skills" onClick={() => { setIsMenuOpen(false); handleScroll(skillRef.current); }} className='hover:text-gray-400'>
                Skills
              </a>
              <a href="#project" onClick={() => { setIsMenuOpen(false); handleScroll(projectsRef.current); }} className='hover:text-gray-400'>
                Projects
              </a>
              <a href="#contact" onClick={() => { setIsMenuOpen(false); handleScroll(contactRef.current); }} className='hover:text-gray-400'>
                Contact
              </a>
              <button
                className="flex items-center bg-gradient-to-r text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                onClick={handleTheme}
              >
                {isDarkMode ? <FaSun className="w-5 h-5 mr-2" /> : <FaMoon className="w-5 h-5 mr-2" />}
              </button>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Navbar;
