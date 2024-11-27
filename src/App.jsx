// import Button from "./common/Button"
import Buttonx from "./common/Button"
import Allocate from "./components/Allocate"
import Card from "./components/Card"
import Carousel from "./components/Carousel"
import Control from "./components/Control"
import Embarce from "./components/Embarce"
import HeroSection from "./components/HeroSection"
import Partners from "./components/Partners"
import Train from "./components/Train"
import Footer from "./shared/Footer"
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
   <div className="my-8">
   <Carousel/>
   </div>
   <Allocate/>
   <Embarce/>
   {/* <Card/> */}
   {/* <Buttonx/> */}
   <Footer/>
    </div>
   </>
    
  )
}

export default App
