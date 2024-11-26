import bg1 from '../images/image 2.png'
import bg13 from '../images/image 13.png'

const HeroSection = () => {
  return (
    <div className='  md:mx-auto  relative max-w-[1440px] max-h-[573px]' >
      <div className=' absolute z-20 md:top-[194px] md:left-[120px] md:px-6 px-10 py-8 '>
        <p className='font-[400px] text-[24px] text-[#0FF1F6] font-Montserrat md:text-left text-center'>AI SDRs (aiDRs)</p>
        <p className='font-[700px] text-[64px] text-[#FFFFFF] md:w-[391px] w-auto md:text-left text-center'>More <span className='italic font-[500px]'>leads</span>, less <span className='italic font-[500px]'>people</span>.</p>
        <p className='font-[300px] text-[20px] text-[#FFFFFF] md:w-[450px] w-auto font-Work Sans md:text-left text-center'>Train an aiDR on your ICP and messaging matrix. Activate it on a patch. It will send personalized sequences to every target contact.</p>
      </div>
     <img className='bg-transparent bg-cover w-full md:h-full h-[500px]' src={bg1} alt="" />
    </div>
  )
}

export default HeroSection
