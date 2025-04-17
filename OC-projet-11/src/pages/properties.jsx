import React from 'react'
import { useParams } from 'react-router-dom'
import properties from '../services/api.js'
import Property from '../components/property.jsx'

function Properties() {
  const { id } = useParams()
  const property = properties.find((p) => p.id === id)

  return (
    <div>
      <Property property={property} />
    </div>
  )
}

export default Properties
