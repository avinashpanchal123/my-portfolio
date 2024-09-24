import React, { useEffect, useState, useContext } from 'react'
import ProfileImage from '/assets/profile.png';
import { ThemeContext } from './context/themeContext';
import Typewriter from "typewriter-effect";
import { FaLinkedin, FaGithub } from "react-icons/fa";

import ResumeButton from "./ResumeButton"

const ProfileSummary = () => {
  const [name, setName] = useState('Avinash Panchal');
  const { isDarkMode, changeTheme } = useContext(ThemeContext);

  return (
    <div className={`${isDarkMode ? 'bg-gray-900  py-20 text-white' : 'bg-white text-black'} h-screen flex flex-col items-center justify-center`} id="ProfileSummary">
      <img
        src={ProfileImage}
        alt="Profile"
        className={`mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
          transition-transform duration-300 hover:scale-105
          ${!isDarkMode ? 'border-2 border-gray-200' : ''}`}
      />
      <h1 className='text-4xl font-bold'>
        Hello! &#128075; I'm {name},

        <Typewriter
          options={{
            loop: true,
            autoStart: true,
            delay: 50,
            deleteSpeed: 30,
            strings: [
              "a Problem Solver",
              "a Tech Enthusiast",
              "a Creative Developer",
              "an Innovator",
              "a Software Engineer",
              "a Coder"
            ],
            cursor: "|",
            wrapperClassName: "typewriter-text",
          }}
        />

      </h1>
      <p className={`mt-4 text-lg ${isDarkMode ? 'text-gray-300' : 'text-gray-600'} `}>
        Specializing in building and maintaining robust, and scalable web applications with expertise in both frontend and backend technologies.
      </p>
      <div className="flex justify-center mt-20 space-x-6 md:space-x-8 lg:space-x-10">
        <a
          href="https://www.linkedin.com/in/avinash-panchal/"
          target="_blank"
          rel="noreferrer"
          className="transition-transform transform hover:scale-110"
        >
          <FaLinkedin className="text-blue-600" fontSize={"30px"} md={{ fontSize: "35px" }} lg={{ fontSize: "40px" }} />
        </a>
        <a
          href="https://github.com/avinashpanchal123/"
          target="_blank"
          rel="noreferrer"
          className="transition-transform transform hover:scale-110"
        >
          <FaGithub fontSize={"30px"} md={{ fontSize: "35px" }} lg={{ fontSize: "40px" }} />
        </a>
      </div>

      <div className='flex justify-center mt-20 space-x-4'>


        <div className="text-center">
          <a
            href="/assets/Avinash-Panchal-Resume.pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-emerald-400 text-white px-4 py-2 rounded-md"
            onClick={(e) => {
              e.preventDefault();
              const newTab = window.open('/assets/Avinash-Panchal-Resume.pdf', '_blank');
              setTimeout(() => {
                const tempLink = document.createElement('a');
                tempLink.href = '/assets/Avinash-Panchal-Resume.pdf';
                tempLink.download = 'Avinash-Panchal-Resume.pdf'; 
                tempLink.click();
              }, 1000); 
            }}
          >
            Download Resume
          </a>



        </div>
      </div>


    </div>
  )
}

export default ProfileSummary;
