import '../assets/styles/footer.css'
import '../assets/media-styles/footerMedia.scss'
import logo from '../assets/images/logoWhite.svg'

function Footer() {
  return (
    <footer className="App-footer">
      <img src={logo} alt="Logo du site" />
      <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  )
}

export default Footer
