import Header from './Layout/Header'
import Banner from './Layout/Banner'
import Main from './Layout/Main'
import Footer from './Layout/Footer'
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
