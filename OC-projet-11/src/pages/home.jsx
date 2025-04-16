import React from 'react'
import Banner from '../components/banner.jsx'
import CardsContainer from '../components/cards-container.jsx'
import properties from '../services/api.js'
import bannerImage from '../assets/images/banner-home.png'

function Home() {
  return (
    <div>
      <Banner
        imageSrc={bannerImage}
        altText="image d'un décor de montagne"
        title="Chez vous, partout et ailleurs"
      />
      <CardsContainer properties={properties} />
    </div>
  )
}

export default Home
