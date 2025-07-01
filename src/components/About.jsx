import {useContext} from "react";
import Resume from "./WorkExperience";
import { ThemeContext } from './context/themeContext';
const About = () => {
  const { isDarkMode, changeTheme } = useContext(ThemeContext);

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'}`} id="about">
      <div className="container mx-auto px-8  py-20 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
         
          <div className="flex-1">
            <p className="text-lg mb-8">
            Enthusiastic and self-motivated Software Engineer with over 3 years of experience in developing and
            implementing software solutions. Proficient in multiple programming languages and platforms, with a
            strong understanding of software development lifecycle. Seeking a challenging position where I can utilize
            my technical expertise to drive impactful results and contribute to the success of a dynamic team.
            </p>
             <Resume/>
            <div className="mt-12 flex justify-center text-center">
{/*                 <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                        3+
                    </h3>
                    <p>Years Experience</p>
                </div> */}
               
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
