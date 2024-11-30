import React, { useState } from 'react'
import './Carousel.css'

const CarouselItem = ({ title, category, image }) => {
    return (
        <div className="carousel-item">
            <img src={image} alt={title} className="carousel-image" />
            <div className="carousel-content">
                <span className="carousel-category">{category}</span>
                <h2 className="carousel-title">{title}</h2>
            </div>
        </div>
    )
}

export default function Carousel ({ items }) {
    const [currentIndex, setCurrentIndex] = useState(0)

    const handleDotClick = (index) => {
        setCurrentIndex(index)
    }

    return (
        <div className="carousel">
            <CarouselItem
                title={items[currentIndex].title}
                category={items[currentIndex].category}
                image={items[currentIndex].image}
            />
            <div className="carousel-dots">
                {items.map((_, index) => (
                    <button
                        key={index}
                        className={`dot ${index === currentIndex ? "active" : ""}`}
                        onClick={() => handleDotClick(index)}
                    ></button>
                ))}
            </div>
        </div>
    )
}
