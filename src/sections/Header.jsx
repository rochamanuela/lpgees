import React from 'react'
import HeaderImage from '../assets/vectors/header-image.svg'
import { IoMdArrowDown } from 'react-icons/io';

export default function Header() {
    return (
        <div className="container-header">
            <div className="texts">
                <h1><span style={{ color: '#3C61CB' }}>Laboratório</span> de Política e Gestão da <span style={{ color: '#EF832B' }}>Educação Especial</span></h1>
                <p className="subtitle">Formação contínua, pesquisa e desenvolvimento de soluções para promover uma educação mais inclusiva e acessível.</p>
                <div style={{display: 'flex', gap: 10}}>
                    <a href="https://forms.gle/2CZSUriqQuvvtui59" className="btn-more">
                        <p>Venha participar</p>
                    </a>
                    <a href="#context" className="btn-more">
                        <p>Saiba mais</p>
                        <IoMdArrowDown size={20} />
                    </a>
                </div>
            </div>
            <img src={HeaderImage} alt="" />
        </div>
    )
}
