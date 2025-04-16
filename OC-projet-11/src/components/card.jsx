import React from 'react';
import '../assets/styles/card.css';

function Card({ property }) {
  return (
    <div className="card">
      <div className="filter-card"></div>
      <img src={property.cover} alt={property.title} />
      <h3>{property.title}</h3>
    </div>
  );
}

export default Card;
