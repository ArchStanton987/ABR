import './footer.css'
import facebookLogo from '../assets/icons/facebook-logo.svg'
import twitchLogo from '../assets/icons/twitch-logo.svg'

export default function Footer() {
  return (
    <footer>
      <ul className="social-media-list">
        <li>
          <img src={facebookLogo} alt="facebook" />
        </li>
        <li>
          <img src={twitchLogo} alt="twitch" />
        </li>
      </ul>
    </footer>
  )
}
