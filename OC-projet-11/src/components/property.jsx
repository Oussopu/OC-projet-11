import React from 'react'
import '../assets/styles/property.scss'
import Carousel from '../components/carousel.jsx'
import Collapse from '../components/collapse.jsx'
import StarRating from '../components/star-rating.jsx'

function Property({ property }) {
  return (
    <div className="property-container">
      <Carousel images={property.pictures} />
      <div className="property-info">
        <div className="property-info-location">
          <h1>{property.title}</h1>
          <p>{property.location}</p>
          <div className="property-tags">
            {property.tags.map((tag, index) => (
              <span key={index} className="tag">
                {tag}
              </span>
            ))}
          </div>
        </div>
        <div className="property-info-host">
          <div className="property-info-host-name">
            <h2>{property.host.name}</h2>
            <img src={property.host.picture} alt={property.host.name} />
          </div>
          <StarRating rating={property.rating} />
        </div>
      </div>
      <div className="property-adds-info">
        <Collapse title="Description" content={[property.description]} />
        <Collapse title="Équipements" content={property.equipments} />
      </div>
    </div>
  )
}

export default Property
