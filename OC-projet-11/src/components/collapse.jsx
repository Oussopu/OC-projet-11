import React, { useState } from 'react';
import "../assets/styles/collapse.scss";
import logo from '../assets/images/arrow.svg';

function Collapse({ title, content }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleCollapse = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="collapse">
      <div className="collapse-header">
        <h1>{title}</h1>
        <button className="collapse-button" onClick={toggleCollapse}>
          <img
            src={logo}
            alt="Toggle"
            className={isOpen ? 'arrow-down' : 'arrow-up'}
          />
        </button>
      </div>
      {isOpen && (
        <div className="collapse-content">
          {content.map((item, index) => (
            <p key={index}>{item}</p>
          ))}
        </div>
      )}
    </div>
  );
}

export default Collapse;
