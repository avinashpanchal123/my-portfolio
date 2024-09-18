import {useContext} from 'react';
import { ThemeContext } from './context/themeContext';
import './Skills3D.css'; // Import the CSS file for 3D styling
import { FaReact, FaNodeJs, FaDatabase, FaPython } from 'react-icons/fa'; // Import icons from react-icons
import { SiExpress, SiMysql } from 'react-icons/si'; // Import specific icons for Express.js and MySQL

const skills = [
  { name: 'Node.js', icon: <FaNodeJs className="text-6xl" />, color: 'bg-green-500' },
  { name: 'React.js', icon: <FaReact className="text-6xl" />, color: 'bg-blue-500' },
  { name: 'Express.js', icon: <SiExpress className="text-6xl" />, color: 'bg-gray-600' },
  { name: 'MySQL', icon: <SiMysql className="text-6xl" />, color: 'bg-blue-700' },
  { name: 'SQL', icon: <FaDatabase className="text-6xl" />, color: 'bg-blue-800' },
  { name: 'Python', icon: <FaPython className="text-6xl" />, color: 'bg-yellow-500' },
];

const Skills3D = () => {
  const { isDarkMode, changeTheme } = useContext(ThemeContext);

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} py-20`}id="skills">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mt-20 mb-20">My Skills</h2>
        <div className="flex flex-col md:flex-row mt-10 mb-20 items-center gap-8">
          <div className="flex-1 flex justify-center items-center">
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
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div className="skill-item flex items-center gap-2" key={index}>
                  <div className={`${skill.color} p-2 rounded-full`}>
                    {skill.icon}
                  </div>
                  <span className="text-lg font-semibold">{skill.name}</span>
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
