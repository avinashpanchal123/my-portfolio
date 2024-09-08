import React from "react";
import Resume from "./WorkExperience";

const About = () => {
  return (
    <div className="bg-black text-white py-20" id="about">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">About Me</h2>
        <div className="flex flex-col md:flex-row items-center md:space-x-12">
          {/* <img
            src={AboutImage}
            alt=""
            className="w-72 h-80 rounded object-cover mb-8 md:mb-0"
          /> */}
          <div className="flex-1">
            <p className="text-lg mb-8">
            Enthusiastic and self-motivated Software Engineer With over 2 years of experience in developing and
            implementing software solutions. Proficient in multiple programming languages and platforms, with a
            strong understanding of software development lifecycle. Seeking a challenging position where I can utilize
            my technical expertise to drive impactful results and contribute to the success of a dynamic team.
            </p>
             <Resume/>
            <div className="mt-12 flex justify-center text-center">
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                        2+
                    </h3>
                    <p>Years Experience</p>
                </div>
                {/* <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                        50+
                    </h3>
                    <p>Projects Completed</p>
                </div>
                <div>
                    <h3 className="text-2xl font-bold text-transparent bg-clip-text 
                bg-gradient-to-r from-green-400 to-blue-500">
                        10+
                    </h3>
                    <p>Happy Clients</p>
                </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
