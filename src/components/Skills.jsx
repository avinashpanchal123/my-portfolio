import React from 'react';
import './Skills3D.css'; // Import the CSS file for 3D styling
import { FaReact, FaNodeJs, FaDatabase, FaPython } from 'react-icons/fa'; // Import icons from react-icons
import { SiExpress, SiMysql } from 'react-icons/si'; // Import specific icons for Express.js and MySQL

const skills = [
  { name: 'React.js', icon: <FaReact className="text-6xl" />, color: 'bg-blue-500' },
  { name: 'Express.js', icon: <SiExpress className="text-6xl" />, color: 'bg-gray-600' },
  { name: 'Node.js', icon: <FaNodeJs className="text-6xl" />, color: 'bg-green-500' },
  { name: 'MySQL', icon: <SiMysql className="text-6xl" />, color: 'bg-blue-700' },
  { name: 'Python', icon: <FaPython className="text-6xl" />, color: 'bg-yellow-500' },
  { name: 'SQL', icon: <FaDatabase className="text-6xl" />, color: 'bg-blue-800' },
];

const Skills3D = () => {
  return (

    <div className="bg-black text-white py-20" id="skills">
    <div className="container mx-auto px-8 md:px-16 lg:px-24">
      <h2 className="text-4xl font-bold text-center">My Skills</h2>
      <div className='bg-black flex justify-center items-center h-screen'>
      <div className='relative w-64 h-64'>
        <div className='cube'>
          {skills.map((skill, index) => (
            <div className={`face face-${index} ${skill.color} flex items-center justify-center`} key={index}>
              <div className='text-center'>
                {skill.icon}
                <span className='block text-lg font-semibold text-white mt-2'>{skill.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
    </div>
  </div>
   
  );
};

export default Skills3D;
