import { Link, useLocation } from 'react-router-dom'
import React, { useEffect } from 'react'
import logo from '../assets/images/logo.svg'
import '../assets/styles/header.css'
import '../assets/media-styles/headerMedia.scss'

function Header() {
  const location = useLocation()

  useEffect(() => {
    const setActiveLink = () => {
      const links = document.querySelectorAll('nav a')
      links.forEach((link) => {
        if (link.getAttribute('href') === location.pathname) {
          link.classList.add('active')
        } else {
          link.classList.remove('active')
        }
      })
    }

    setActiveLink()
  }, [location])

  const handleClick = (event) => {
    const links = document.querySelectorAll('nav a')
    links.forEach((link) => link.classList.remove('active'))

    event.target.classList.add('active')
  }

  return (
    <header className="App-header">
      <img src={logo} alt="Logo du site" />
      <nav>
        <Link to="/" onClick={handleClick}>
          Accueil
        </Link>
        <Link to="/about" onClick={handleClick}>
          A Propos
        </Link>
      </nav>
    </header>
  )
}

export default Header
