import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from './pages/home.jsx'
import About from './pages/about.jsx'
import Error from './pages/404.jsx'
import Property from './pages/property.jsx'
import Header from './components/header.jsx'
import Footer from './components/footer.jsx'
import './assets/styles/main.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/property" element={<Property />} />
        <Route path="/*" element={<Error />} />
      </Routes>
      <Footer />
    </Router>
  </StrictMode>
)
