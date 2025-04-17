import React from 'react'
import '../assets/styles/star-rating.scss'
import star from '../assets/images/star.svg'
import starFilled from '../assets/images/star-filled.svg'

function StarRating({ rating }) {
  const stars = []
  for (let i = 0; i < 5; i++) {
    stars.push(
      <span key={i} className="star">
        <img
          src={i < rating ? starFilled : star}
          alt={i < rating ? 'Filled star' : 'Empty star'}
        />
      </span>
    )
  }
  return <div className="star-rating">{stars}</div>
}

export default StarRating
