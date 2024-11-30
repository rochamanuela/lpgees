import React from 'react'
import './LineCard.css'

export default function LineCard({ icon, text, backgroundColor }) {
    return (
        <div className="line-card-container">
            <div className="line-card-image" style={{ backgroundColor: `${backgroundColor}` }}>
                <img src={icon} alt="" />
            </div>
            <div className="line-card-text">
                <p>{text}</p>
            </div>
        </div>
    )
}
