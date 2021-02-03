import '../layout.css'
import banner from '../assets/img/banner.png'

export default function Banner() {
  return (
    <div className="banner-container">
      <img id="banner" src={banner} alt="banière"></img>
    </div>
  )
}
