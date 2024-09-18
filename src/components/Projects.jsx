import {useContext} from "react";
import SnakesAndLadders from "/assets/snake-ladders-game.png";
import MoneyControl from '/assets/money-control.png'
import PorterCLone from "/assets/porter-clone.png";
import { ThemeContext } from "./context/themeContext";

// import bookMSImage from "../assets/admin-dashboard.png";

const projects = [
  {
    id: 1,
    name: "Snakes-Ladders-Game",
    technologies: "HTML-CSS-Javascipt",
    image: SnakesAndLadders,
    github: "https://github.com/avinashpanchal123/snakes-and-ladders.git",
  },
  {
    id: 2,
    name: "Porter App Clone",
    technologies: "HTML-CSS-JS-Node-Express-MongoDB",
    image: PorterCLone,
    github: "https://github.com/avinashpanchal123/porterClone_Backend",
  },
  {
    id: 3,
    name: "Money Control",
    technologies: "React-Node-Express-MySQL",
    image: MoneyControl,
    github: "https://github.com/avinashpanchal123/money-control",
  },
];

const Projects = () => {
  const { isDarkMode, changeTheme } = useContext(ThemeContext);
  //<div key={project.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg
  //transform transition-transform duration-300 hover:scale-105">
  return (
    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} py-20`} id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div key={project.id} className={`${isDarkMode ? 'bg-gray-800 text-white' : 'bg-gray-200 text-black'} p-6 rounded-lg hover:shadow-lg 
            transform transition-transform duration-300 hover:scale-105`}>
              <img src={project.image} alt={project.name} className="rounded-lg mb-4 
              w-full h-48 object-cover" />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a href={project.github} className="bg-emerald-400 text-white px-4 py-2 rounded-md" target="_blank" 
              rel="noopener noreferrer">GitHub</a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
