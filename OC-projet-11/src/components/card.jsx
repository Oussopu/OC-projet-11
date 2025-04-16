import React from 'react'
import '../assets/styles/card.css'

function Card({ property }) {
  return (
    <div className="card">
      <div className="filter-card"></div>
      <img src={property.cover} alt={property.title} />
      <h2>{property.title}</h2>
    </div>
  )
}

export default Card
