import { Link } from 'react-router-dom'
import './Menu.css'

function Menu() {
  return (
    <nav className="menu">
      <Link to="/" className="menu__link">Home</Link>
      <Link to="/sobre" className="menu__link">Sobre</Link>
      <Link to="/contato" className="menu__link">Contato</Link>
    </nav>
  )
}

export default Menu