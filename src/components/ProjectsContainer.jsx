import React from 'react'
import meuHabito from '../img/meuhabito.png'

import {
    DiHtml5,
    DiCss3,
    DiJsBadge,
    DiNodejsSmall,
    DiMysql,
    DiReact,
    DiDart
} from 'react-icons/di'

import { RiFlutterFill } from 'react-icons/ri'

import '../styles/components/projectscontainer.sass'

const projects = [
    {
        nome: 'meuHábito',
        logo: meuHabito,
        tech: [<RiFlutterFill />, <DiDart />, <DiMysql />],
        link: 'https://github.com/AthilaMatheusBorges/meu_habito'
    }
    // {
    //     nome: 'meuHabito',
    //     logo: meuHabito,
    //     decription: ''
    // },
    // {
    //     nome: 'meuHabito',
    //     logo: meuHabito,
    //     decription: ''
    // }
]

const ProjectsContainer = () => {
    return (
        <section className="projects-container">
            <h2>Projetos</h2>
            <div className="project-cards">
                {projects.map(project => (
                    <a className="project-card" id="card" key={project.nome} href={project.link} target='_blank'>
                            <img
                                src={project.logo}
                                alt=""
                                className="logo-card"
                            />
                        <div className="desfoque"></div>
                        <div className="info-project">
                            <h3>{project.nome}</h3>
                            <div className="icons">
                                {project.tech.map(logo => (
                                    <div>{logo}</div>
                                ))}
                            </div>
                        </div>
                        <h4>Clique para ver mais...</h4>
                    </a>
                ))}
            </div>
        </section>
    )
}

export default ProjectsContainer
