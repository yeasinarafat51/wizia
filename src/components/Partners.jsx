import backhub from '../images/BackHub logo.png'
import cobe from '../images/CableLabs logo.png'
import dbs from '../images/DBS logo.png'
import easy from '../images/EasyEuro logo.png'
import amd from '../images/AMD logo.png'

const Partners = () => {
  return (
    <div className='text-center mx-auto'>
      <h1 className='text-[16px] font-[400px] font-Montserrat text-center text-primary uppercase py-8'>our trusted partners</h1>
      <div className='grid xl:grid-cols-5 grid-cols-2 xl:justify-center justify-items-center  items-center   xl:gap-8 gap-1 w-full h-auto xl:w-[768px] xl:h-[64px] text-center mx-auto'>
<img src={backhub} alt="" />
<img src={cobe} alt="" />
<img src={dbs} alt="" />
<img src={easy} alt="" />
<img className='' src={amd} alt="" />
      </div>
    </div>
  )
}

export default Partners
