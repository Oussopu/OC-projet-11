import React, { useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import properties from '../services/api.js'
import Property from '../components/property.jsx'

function Properties() {
  const { id } = useParams()
  const navigate = useNavigate()
  const property = properties.find((p) => p.id === id)

  useEffect(() => {
    if (!property) {
      navigate('/*')
    }
  }, [property, navigate])

  if (!property) {
    return null
  }

  return (
    <div>
      <Property property={property} />
    </div>
  )
}

export default Properties
