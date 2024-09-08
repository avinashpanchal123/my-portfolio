import React from 'react'
import ProfileImage from '../assets/profile.png'
import ResumeButton from "./ResumeButton"

const ProfileSummary = () => {
 

  return (
    <div className='bg-black mt-8 text-white text-center py-16' id="ProfileSummary">
        <img src={ProfileImage} alt="" 
        className='mx-auto mb-8 w-48 h-48 rounded-full object-cover transform 
        transition-transform duration-300 hover:scale-105'/>
        <h1 className='text-4xl font-bold'>
            I'm {" "}
            <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500'>Avinash Panchal</span>
            , Full-Stack Developer
        </h1>
        <p className='mt-4 text-lg text-gray-300'>
            {/* I specialize in building modern and responsive web applications. */}
            Specializing in building and maintaining robust, responsive, and scalable web applications with expertise in both frontend and backend technologies.
        </p>
        <div className='mt-8 space-x-4'>
            <button
            className='bg-gradient-to-r from-green-400 to-blue-500 text-white
            transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>Contact With Me</button>
            {/* */}
            <ResumeButton />
        </div>

    </div>
  )
}

export default ProfileSummary;