import React from 'react'
import '../assets/styles/cards-container.css'
import '../assets/media-styles/cardsContainerMedia.scss'
import Card from '../components/card.jsx'

function CardsContainer({ properties, onCardClick }) {
  return (
    <div className="cards-container">
      {properties.map((property) => (
        <Card key={property.id} property={property} onCardClick={onCardClick} />
      ))}
    </div>
  )
}

export default CardsContainer
