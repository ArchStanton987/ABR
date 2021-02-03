import pic1 from '../assets/img/ABR1.png'
import pic2 from '../assets/img/ABR2.png'
import pic3 from '../assets/img/ABR3.png'
import './imagesContainer.css'

export default function ImagesContainer() {
  return <div className='images-container'>
    <img className='formulaImg' src={pic1} alt='forfait simple'/>
    <img className='formulaImg' src={pic2} alt='forfait cup'/>
    <img className='formulaImg' src={pic3} alt='forfait championnat'/>
  </div>
}