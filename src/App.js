import Header from './layout/Header'
import Banner from './layout/Banner'
import Main from './layout/Main'
import Footer from './layout/Footer'
import './layout.css'

export default function App() {
  return (
    <>
      <div className='global-layout'>
        <Header/>
        <Banner/>
        <Main/>
        <Footer/>
      </div>
    </>
  )
}
