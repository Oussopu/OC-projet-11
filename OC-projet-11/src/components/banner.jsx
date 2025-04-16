import React from 'react';
import '../assets/styles/banner.css';

function Banner({ imageSrc, altText, title }) {
  return (
    <div className="banner">
      <div className="filter-banner"></div>
      <img src={imageSrc} alt={altText} />
      {title && <h2>{title}</h2>}
    </div>
  );
}

export default Banner;
