import { NavLink } from 'react-router-dom'
import './Menu.css'

function Menu() {
  return (
    <nav className="menu">
      <NavLink to="/" className="menu__link">Home</NavLink>
      <NavLink to="/sobre" className="menu__link">Sobre</NavLink>
      <NavLink to="/contato" className="menu__link">Contato</NavLink>
    </nav>
  )
}

export default Menu