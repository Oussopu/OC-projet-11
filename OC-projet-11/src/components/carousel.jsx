import React, { useState } from 'react'
import '../assets/styles/carousel.scss'
import '../assets/media-styles/carouselMedia.scss'
import leftArrow from '../assets/images/left-arrow.svg'
import rightArrow from '../assets/images/right-arrow.svg'

function Carousel({ images }) {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % images.length)
  }

  const prevSlide = () => {
    setCurrentIndex((currentIndex - 1 + images.length) % images.length)
  }

  return (
    <div className="carousel">
      {images.length > 1 && (
        <button className="carousel-button left" onClick={prevSlide}>
          <img src={leftArrow} alt="Previous" />
        </button>
      )}
      <img
        src={images[currentIndex]}
        alt="Logement"
        className="carousel-image"
      />
      {images.length > 1 && (
        <button className="carousel-button right" onClick={nextSlide}>
          <img src={rightArrow} alt="Next" />
        </button>
      )}
      {images.length > 1 && (
        <div className="carousel-counter">
          {currentIndex + 1}/{images.length}
        </div>
      )}
    </div>
  )
}

export default Carousel
