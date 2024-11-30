import React from 'react'
import { CiMail } from "react-icons/ci";
import LogotypeLPGEES from '../assets/vectors/large-logotype.svg'
import LogotypeIFSP from '../assets/vectors/ifsp-logotype.svg'

export default function Footer() {
    return (
        <div className="footer-container">
            <footer>
                <div className="first-child">
                    <img src={LogotypeLPGEES} alt="" />
                    <p>Laboratório de Política e Gestão da Educação Especial</p>
                </div>
                <div className="middle-child">
                    <p>Contate-nos através do email</p>
                    <a href="mailto:lpgees@ifsp.edu.br"><CiMail size={24}/>lpgees@ifsp.edu.br</a>
                </div>
                <img src={LogotypeIFSP} alt="" />
            </footer>
        </div>
    )
}
