import React from 'react'
import '../assets/styles/card.css'
import '../assets/media-styles/cardMedia.scss'

function Card({ property, onCardClick }) {
  const handleClick = () => {
    onCardClick(property.id)
  }

  return (
    <div className="card" onClick={handleClick}>
      <img src={property.cover} alt={property.title} />
      <h3>{property.title}</h3>
    </div>
  )
}

export default Card
