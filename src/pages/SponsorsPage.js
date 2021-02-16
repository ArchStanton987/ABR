import './sponsorsPage.css'
import sponsorImg1 from '../assets/img/sponsor1.webp'
import sponsorImg2 from '../assets/img/sponsor2.webp'
import sponsorImg3 from '../assets/img/sponsor3.webp'
import sponsorImg4 from '../assets/img/sponsor4.webp'
import sponsorImg5 from '../assets/img/sponsor5.webp'
import sponsorImg6 from '../assets/img/sponsor6.webp'

export default function SponsorsPage() {
  return (
    <>
      <div className="sponsors-section">
        <div className="sponsors-container">
          <a href="http://www.opcinformatique.fr/" target="blank">
            <img className="sponsor-img" src={sponsorImg1} alt="O'PC Informatique" />
          </a>
        </div>
        <div className="sponsors-container">
          <a href="https://racingelectronics.com/" target="blank">
            <img className="sponsor-img" src={sponsorImg2} alt="RacingElectronics" />
          </a>
        </div>
        <div className="sponsors-container">
          <a href="https://www.driverxperience.fr/" target="blank">
            <img className="sponsor-img" src={sponsorImg3} alt="DriverXperience" />
          </a>
        </div>
        <div className="sponsors-container">
          <a href="https://www.motorsinside.com/" target="blank">
            <img className="sponsor-img" src={sponsorImg4} alt="Motors Inside" />
          </a>
        </div>
        <div className="sponsors-container">
          <a href="https://loquiz.com/" target="blank">
            <img className="sponsor-img" src={sponsorImg5} alt="Loquiz" />
          </a>
        </div>
        <div className="sponsors-container">
            <img className="sponsor-img" src={sponsorImg6} alt="Loquiz" />
        </div>
      </div>
    </>
  )
}
