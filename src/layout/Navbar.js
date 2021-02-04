import { NavLink } from 'react-router-dom'

import logo from '../assets/img/logo_abr.jpg'
import './navbar.css'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <img className="logo" src={logo} alt="logo ABR" />
        </li>
        <NavLink activeClassName="selected" exact to="/">
          <li>
            <h2>Accueil</h2>
          </li>
        </NavLink>
        <NavLink activeClassName="selected" to="/contact">
          <li>
            <h2>Contact</h2>
          </li>
        </NavLink>
        <NavLink activeClassName="selected" to="/palmares">
          <li>
            <h2>Palmares</h2>
          </li>
        </NavLink>
        <NavLink activeClassName="selected" to="/team">
          <li>
            <h2>Team</h2>
          </li>
        </NavLink>
        <NavLink activeClassName="selected" to="/partenaires">
          <li>
            <h2>Partenaires</h2>
          </li>
        </NavLink>
      </ul>
    </nav>
  )
}
