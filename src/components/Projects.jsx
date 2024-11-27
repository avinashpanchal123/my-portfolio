import { useContext } from "react";
import SnakesAndLadders from "/assets/snake-ladders-game.png";
import MoneyControl from '/assets/money-control.png';
import Wordle from "/assets/Wordle.png";
import { ThemeContext } from "./context/themeContext";

const projects = [
  {
    id: 1,
    name: "Money Control",
    technologies: "React-Node-Express-MySQL",
    image: MoneyControl,
    github: "https://github.com/avinashpanchal123/money-control",
    deployed: "https://money-control-kohl.vercel.app/", 
    description: "Money Control is a personal finance management tool that helps users track their income and expenses across various categories."
  },
  {
    id: 2,
    name: "Snakes-Ladders-Game",
    technologies: "Express-EJS-NodeJs",
    image: SnakesAndLadders,
    github: "https://github.com/avinashpanchal123/snakes-and-ladders.git",
    deployed: "https://snakes-and-ladders-zbrz.onrender.com/", 
    description: "A classic board game where two players take turns rolling a die to navigate from start to finish, encountering snakes and ladders along the way."
  },
  {
    id: 3,
    name: "Wordle Game",
    technologies: "HTML-CSS-JS-React",
    image: Wordle,
    github: "https://github.com/avinashpanchal123/Wordle",
    deployed: "https://wordle-game-two-omega.vercel.app/", 
    description: "A fun and interactive Wordle-inspired game built using React. Players guess a hidden five-letter word within a limited number of attempts. "
  }
];

const Projects = () => {
  const { isDarkMode } = useContext(ThemeContext);

  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} py-20`} id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-8`}>
          {projects.map((project, index) => (
            <div
              key={project.id}
              className={`${isDarkMode ? 'bg-gray-600 text-white' : 'bg-gray-200 text-black'} 
                p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 
                hover:scale-105 ${projects.length % 2 !== 0 && index === projects.length - 1 ? 'md:col-span-2' : ''}`}
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-contain"
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-base mb-4">
                {project.description}
              </p>
              <p className="text-gray-400 mb-4">
                <strong>Technologies Used:</strong> {project.technologies}
              </p>
              <div className="flex space-x-4">
                <a
                  href={project.github}
                  className="bg-emerald-400 text-white px-4 py-2 rounded-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </a>
                <a
                  href={project.deployed}
                  className="bg-emerald-400 text-white px-4 py-2 rounded-md"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Project
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
