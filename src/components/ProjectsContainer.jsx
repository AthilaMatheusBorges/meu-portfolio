import React from 'react'
import meuHabito from '../img/meuHabito.png'

import '../styles/components/projectscontainer.sass'

const projects = [
    {
        nome: 'meuHabito',
        logo: meuHabito,
        decription: 'Flutter'
    },
    {
        nome: 'meuHabito',
        logo: meuHabito,
        decription: ''
    },
    {
        nome: 'meuHabito',
        logo: meuHabito,
        decription:
            ''
    }
]

const ProjectsContainer = () => {
    return (
        <section className="projects-container">
            <h2>Projetos</h2>
            <div className="project-cards">
                {projects.map(project => (
                    <div className="project-card" id="card" key={project.nome}>
                        <div className="logo">
                            <img
                                src={project.logo}
                                alt=""
                                className="logo-card"
                            />
                        </div>
                        <div className="info-container">
                            <h3>{project.nome}</h3>
                            <p id="description-card">{project.decription}</p>
                            <a href="" className="btn">
                                Repositório
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default ProjectsContainer
