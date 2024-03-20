import React from 'react'

import ufcg from '../img/ufcg.png'
import alura from '../img/alura.png'

import '../styles/components/academycontainer.sass'

const formacoes = [
    {
        id: 'UFCG',
        periodo: '2017 - 2024',
        curso: 'Ciência da Computação',
        descricao: 'Curso de bacharelado em Ciência da Computação.',
        logo: ufcg
    },
    {
        id: 'Alura',
        periodo: '12/2022 - 06/2023',
        curso: 'Dev Full-Stack',
        descricao:
            'Bootcamp oferecido pelo Grupo Boticário em parceria com a Alura. A trilha feita tinha foco em React e Node.js.',
        logo: alura
    },
]

const AcademyContainer = () => {
    return (
        <section className="academy-container">
            <h2>Formações</h2>
            <div className="formacoes">
                {formacoes.map(curso => (
                    <div className="curso">
                        <h3 className="title">{curso.curso}</h3>

                        <div className="logo-info">
                            <img src={curso.logo} alt="" className="logo" />

                            <div className="info">
                                <h3 id="descricao">Instituição: {curso.id}</h3>
                                <h3 id="descricao">Período: {curso.periodo}</h3>
                                <h3 id="descricao">{curso.descricao}</h3>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    )
}

export default AcademyContainer
