import logo from '../assets/img/logo_abr.jpg'
import './navbar.css'

export default function Navbar() {
  return (
    <nav>
      <ul>
        <li>
          <img className="logo" src={logo} alt="logo ABR" />
        </li>
        <li>
          <h2>Accueil</h2>
        </li>
        <li>
          <h2>Contact</h2>
        </li>
        <li>
          <h2>Palmares</h2>
        </li>
        <li>
          <h2>Team</h2>
        </li>
        <li>
          <h2>Partenaires</h2>
        </li>
      </ul>
    </nav>
  )
}
