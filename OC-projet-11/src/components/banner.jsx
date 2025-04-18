import React from 'react'
import '../assets/styles/banner.css'
import '../assets/media-styles/bannerMedia.scss'

function Banner({ imageSrc, altText, title }) {
  return (
    <div className="banner">
      <div className="filter-banner"></div>
      <img src={imageSrc} alt={altText} />
      {title && <h1>{title}</h1>}
    </div>
  )
}

export default Banner
