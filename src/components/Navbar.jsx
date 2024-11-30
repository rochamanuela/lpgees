import React, { useState } from 'react'
import LogotypeSmall from '../assets/vectors/small-logotype.svg'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev)
    }

    return (
        <div className="container-navbar">
            <button className="menu-toggle" onClick={toggleMenu}>
                ☰
            </button>
            <img src={LogotypeSmall} alt="Logo" className="logo" />
            <div className={`links-navbar ${isMenuOpen ? "open" : ""}`}>
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
