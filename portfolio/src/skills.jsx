import React from 'react';
import { useContext } from 'react';
import { themeContext } from './Context/theme';

function Skills() {
    const { mode } = useContext(themeContext);

    const skillsData = {
        frontend: [
            { name: 'HTML5', level: 90 },
            { name: 'CSS3', level: 85 },
            { name: 'JavaScript', level: 80 },
            { name: 'React', level: 75 },
            { name: 'Tailwind CSS', level: 70 }
        ],
        backend: [
            { name: 'Node.js', level: 70 },
            { name: 'Express', level: 65 },
            { name: 'MongoDB', level: 60 },
            { name: 'REST APIs', level: 75 }
        ],
        tools: [
            { name: 'Git', level: 80 },
            { name: 'VS Code', level: 85 },
            { name: 'Figma', level: 60 },
            { name: 'Postman', level: 70 }
        ]
    };

    return (
        <section className="skills">
        </section>
    );
}

export default Skills;