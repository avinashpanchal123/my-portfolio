import { useState } from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';

const Navbar = () => {
    const [isDarkMode, setIsDarkMode] = useState(false)
    return <>
        <header>
            <nav className='bg-black text-white px-8 md:px-16 lg:px-24 fixed top-0 w-full z-10'>
                <div className='container py-2 flex justify-center md:justify-between items-center'>
                    <div className='text-2xl font-bold hidden md:inline'><a href="#" className='hover:text-gray-400'>Avinash</a></div>
                    <div className='space-x-6'>
                        {/* <a href="#" className='hover:text-gray-400'>Home</a> */}
                        <a href="#about" className='hover:text-gray-400'>About Me</a>
                        <a href="#skills" className='hover:text-gray-400'>Skills</a>
                        <a href="#project" className='hover:text-gray-400'>Projects</a>
                        <a href="#contact" className='hover:text-gray-400'>Contact</a>
                    </div>
                    <button
                        className="flex items-center bg-gradient-to-r text-white hidden md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
                        onClick={()=>{
                            setIsDarkMode(!isDarkMode)
                        }}
                    >
                        {isDarkMode ? (
                            <FaSun className="w-5 h-5 mr-2" />
                        ) : (
                            <FaMoon className="w-5 h-5 mr-2" />
                        )}
                    </button>
                </div>
            </nav>
        </header>
    </>
}

export default Navbar;