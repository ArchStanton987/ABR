import './footer.css'
import facebookLogo from '../assets/icons/facebook-logo.svg'
import twitchLogo from '../assets/icons/twitch-logo.svg'
import instaLogo from '../assets/icons/insta-logo.svg'
import linkedinLogo from '../assets/icons/linkedin-logo.svg'

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
        <li>
          <img src={instaLogo} alt="instagram" />
        </li>
      </ul>
      <div className="author">
        <a href="https://www.linkedin.com/in/pierre-moulin-3a2b77193/" target="blank">
          <p>Site développé par</p>
        </a>
        <a href="https://www.linkedin.com/in/pierre-moulin-3a2b77193/" target="blank">
          <img src={linkedinLogo} alt="linkedin" />
        </a>
      </div>
    </footer>
  )
}
