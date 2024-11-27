import Carousel from "./components/Carousel"
import HeroSection from "./components/HeroSection"
import Partners from "./components/Partners"
import NavbarArea from "./shared/Navbar"


function App() {


  return (
    <>
    <div>
    <NavbarArea/>
    <HeroSection/>
   <div className="xl:mt-36 mt-16">
    <Partners/>
   {/* <Carousel/> */}
   </div>
    </div>
   </>
    
  )
}

export default App
