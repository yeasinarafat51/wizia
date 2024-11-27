import Carousel from "./components/Carousel"
import Control from "./components/Control"
import HeroSection from "./components/HeroSection"
import Partners from "./components/Partners"
import Train from "./components/Train"
import NavbarArea from "./shared/Navbar"


function App() {


  return (
    <>
    <div>
    <NavbarArea/>
    <HeroSection/>
   <div className="xl:mt-36 mt-16 border-b-2 border-b-[#002228] shadow-lg">
    <Partners/>
   {/* <Carousel/> */}
   </div>
   <Control/>
   <Train/>
    </div>
   </>
    
  )
}

export default App
