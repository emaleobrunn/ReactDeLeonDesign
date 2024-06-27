import React from 'react';/*
import './Projects.css';*/
import project1 from '../assets/fedevalverde.png';
import project2 from '../assets/leofer.png';
import project3 from '../assets/islamUFC.png';
import project4 from '../assets/islam3.png';

const projects = [
    { img: project1, title: 'Proyecto 1', description: 'Descripción del Proyecto 1' },
    { img: project2, title: 'Proyecto 2', description: 'Descripción del Proyecto 2' },
    { img: project3, title: 'Proyecto 3', description: 'Descripción del Proyecto 3' },
    { img: project4, title: 'Proyecto 4', description: 'Descripción del Proyecto 4' },
];

const Projects = () => {
    return (
        <section id="projects">
            <h2>Proyectos</h2>
            <div className="project-grid">
                {projects.map((project, index) => (
                    <div className="project-card" key={index}>
                        <img src={project.img} alt={project.title} />
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Projects;