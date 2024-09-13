import React, { useEffect, useState } from 'react'
import ProfileImage from '../assets/profile.png'

import ResumeButton from "./ResumeButton"

const ProfileSummary = () => {
  const [name, setName] = useState('Avinash Panchal');


  return (
    <div className='bg-black mt-8 text-white text-center py-16' id="ProfileSummary">
      <img src={ProfileImage} alt=""
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
      <h1 className='text-4xl font-bold'>
        I'm {name}, Software Engineer
      </h1>
      <p className='mt-4 text-lg text-gray-300'>
        {/* I specialize in building modern and responsive web applications. */}
        Specializing in building and maintaining robust, and scalable web applications with expertise in both frontend and backend technologies.
      </p>
      <div className='flex justify-center mt-20 space-x-4'>
        <div className="text-center">
          <a
            href="./../assets/Avinash_Panchal_Resume.pdf"
            download
            target="_blank"
            rel="noreferrer"
            className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Contact Me
          </a>
        </div>

        <div className="text-center">
        {/* <Button bg={"#06d6a0"} size={{base:"sm",sm:"sm",md:"md"}} mt={"20px"}>
            <a href="/Bhavesh_Jain_Resume.pdf" target="_blank" download rel="noreferrer">
              Resume
            </a>
          </Button> */}
          <a
            href="/../assets/Avinash_Panchal_Resume.pdf"
            download
            target="_blank"
            rel="noreferrer"
           className="bg-blue-500 text-white px-4 py-2 rounded-md">
            Download Resume
          </a>
        </div>
      </div>


    </div>
  )
}

export default ProfileSummary;