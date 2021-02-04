import pic1 from '../assets/img/ABR1.png'
import pic2 from '../assets/img/ABR2.png'
import pic3 from '../assets/img/ABR3.png'
import './imagesContainer.css'

export default function ImagesContainer() {
  return (
    <div className="images-container">
      <figure className="forfait-figure">
        <figcaption className="forfait-name">
          <h4>
            Forfait <br /> <strong>SIMPLE</strong>
          </h4>
          <ul>
            <li>
              <p>1 setup gratuit par mois pour les abonnés Twitch</p>
            </li>
            <li>
              <p>1 setup</p>
            </li>
            <li>
              <p><strong>9,99 €</strong></p>
            </li>
          </ul>
        </figcaption>
        <img className="forfait-img" src={pic1} alt="forfait simple"></img>
      </figure>
      <figure className="forfait-figure">
        <figcaption className="forfait-name">
          <h4>
            Forfait <br /> <strong>CUP</strong>
          </h4>
          <ul>
            <li>
              <p>3 setups</p>
            </li>
            <li>
              <p><strong>24,99 €</strong></p>
            </li>
          </ul>
        </figcaption>
        <img className="forfait-img" src={pic2} alt="forfait cup"></img>
      </figure>
      <figure className="forfait-figure">
        <figcaption className="forfait-name">
          <h4>
            Forfait <br /> <strong>CHAMPIONNAT</strong>
          </h4>
          <ul>
            <li>
              <p>6 setups</p>
            </li>
            <li>
              <p>Mise à jour gratuite</p>
            </li>
            <li>
              <p><strong>49,99 €</strong></p>
            </li>
          </ul>
        </figcaption>
        <img className="forfait-img" src={pic3} alt="forfait championnat"></img>
      </figure>
    </div>
  )
}
