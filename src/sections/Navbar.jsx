import React, { useState, useEffect } from 'react'
import LogotypeSmall from '../assets/vectors/small-logotype.svg'

export default function Navbar() {
    const [isMenuOpen, setIsMenuOpen] = useState(false)

    const toggleMenu = () => {
        setIsMenuOpen((prev) => !prev)
    }

    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 50) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Cleanup do listener quando o componente for desmontado
        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <>
            {isMenuOpen && <div className="menu-overlay" onClick={toggleMenu}></div>}
            <div className={`container-navbar ${isScrolled ? "scrolled" : ""}`}>
                <button className="menu-toggle" onClick={toggleMenu}>
                    ☰
                </button>
                <img src={LogotypeSmall} alt="Logo" className="logo" />
                <div className={`links-navbar ${isMenuOpen ? "open" : ""}`}>
                    <a href="#context">Contexto</a>
                    <a href="#researchers">Pesquisadores</a>
                    <a href="#lines">Linhas de Pesquisa</a>
                    <a href="#projects">Projetos</a>
                    <a href="#publications">Publicações</a>
                    <a href="#symposium">Simpósio</a>
                </div>
            </div>
        </>
    )
}
