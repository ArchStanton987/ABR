import './footer.css'
import facebookLogo from '../assets/icons/facebook-logo.svg'
import twitchLogo from '../assets/icons/twitch-logo.svg'
import instaLogo from '../assets/icons/insta-logo.svg'
import githubLogo from '../assets/icons/github-logo.svg'
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
        <p>Site développé par :</p>
        <img src={linkedinLogo} alt="linkedin" />
      </div>
    </footer>
  )
}
