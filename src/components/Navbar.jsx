import React from 'react'
import LogotypeSmall from '../assets/vectors/small-logotype.svg'

export default function Navbar() {
    return (
        <div className="container-navbar">
            <img src={LogotypeSmall} alt="" />
            <div className="links-navbar">
                <a href="#">Contexto</a>
                <a href="#">Pesquisadores</a>
                <a href="#">Linhas de Pesquisa</a>
                <a href="#">Projetos</a>
                <a href="#">Publicações</a>
                <a href="#">Simpósio</a>
            </div>
        </div>
    )
}
