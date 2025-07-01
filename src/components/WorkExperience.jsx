import {useContext} from 'react';
import { ThemeContext } from './context/themeContext';

const ExperienceItem = ({ title, company, duration, description }) => (
    <div className="bg-black text-white shadow-md rounded-lg p-6 mb-4 border border-gray-200">
        <h3 className="text-xl font-semibold text-white-800">{title}</h3>
        <p className="text-white-600">{company}</p>
        <p className="text-white-500 text-sm mb-4">{duration}</p>
        <p className="text-white-700">{description}</p>
    </div>
);

const WorkExperience = () => {
    const { isDarkMode, changeTheme } = useContext(ThemeContext);

    const experiences = [
        {
            title: 'Senior Software Engineer',
            company: 'Nexsales Software Pvt. Ltd.',
            duration: 'Dec 2024 - Present',
            description: [
                "Leading the design and architecture of a data-building platform used to create targeted campaigns for clients.",
                "Defined scalable database schemas, system workflows, and integration strategies to support evolving business requirements.",
                "Oversaw system-level design decisions including performance optimization and modular service patterns.",
                "Managed a team of developers by assigning tasks, reviewing code, and ensuring timely delivery of features.",
                "Actively participating in product planning and feature scoping"
            ]
        },
        {
            title: 'Software Engineer',
            company: 'Cointab Software Pvt. Ltd.',
            duration: 'May 2022 - Aug 2024',
            description: [
                "Implemented an automated Git rollback feature to minimize downtime and ensure stability.",
                "Developed a version control system for tracking changes in a reconciliation system.",
                "Designed a real-time monitoring tool for system performance analysis and optimization.",
                "Engineered a solution for locale-based number formatting, enhancing user experience.",
                "Guided new team members and resolved technical issues efficiently.",
                "Proposed and implemented improvements to enhance project performance."
            ]
        },
    ];

    return (
        <section className="container mx-auto px-4">
            <h2 className="text-3xl font-bold text-white-900 mb-6">Professional Experience</h2>
            {experiences.map((exp, index) => (
                < div key={index}>
                    <div className={`${isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-black'} shadow-md rounded-lg p-6 mb-4 border border-gray-200`}>
                        <h3 className="text-xl font-semibold text-white-800">{exp.title}</h3>
                        <p className="text-white-600">{exp.company}</p>
                        <p className="text-white-500 text-sm mb-4">{exp.duration}</p>
                        <ul className="list-disc pl-5">
                            {exp.description.map((pt, i) => {
                                return <li key={i}>{pt}</li>
                            })}
                        </ul>
                    </div>
                </div>
                // <ExperienceItem
                //   key={index}
                //   title={exp.title}
                //   company={exp.company}
                //   duration={exp.duration}
                //   description={exp.description}
                // />
            ))}
        </section>
    );
};

const Education = () => (
    <section className="bg-black container mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold text-white-900 mb-6">Education</h2>
        <div className="shadow-md rounded-lg p-6 mb-4 border border-gray-200">
            <h3 className="text-xl font-semibold text-white-800">BSc in Data Science and Application</h3>
            <p className="text-white-600">Currently pursuing at [IITM]</p>
        </div>
    </section>
);

const Resume = () => {
    return (
        <div className="max-w-4xl mx-auto">
            <WorkExperience />
            {/* <Education /> */}
        </div>
    );
};

export default Resume;
