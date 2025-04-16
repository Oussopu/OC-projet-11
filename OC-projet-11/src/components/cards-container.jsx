import React from 'react'
import '../assets/styles/cards-container.css'
import Card from './Card'

function CardsContainer({ properties }) {
  return (
    <div className="cards-container">
      {properties.map((property) => (
        <Card key={property.id} property={property} />
      ))}
    </div>
  )
}

export default CardsContainer
