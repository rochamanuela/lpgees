import React from 'react'
import { MdOutlineOpenInNew } from "react-icons/md";
import IconDescription from '../../assets/vectors/icon-description.svg'
import './PublicationCard.css'

export default function PublicationCard({ title, link }) {
    return (
        <div className="publication-card-container">
            <div className="icon">
                <img src={IconDescription} alt="" />
            </div>
            <div className="texts">
                <p>{title}</p>
                <a href={`${link}`} style={{color: '#D06712'}}><MdOutlineOpenInNew size={20}/> Ir para o site</a>
            </div>
        </div>
    )
}
