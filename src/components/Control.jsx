import vector from '../images/Vector.png'
import graphg from '../images/ph_graph-duotone.png'
import arrow from '../images/ph_arrows-out-cardinal-duotone.png'

const Control = () => {
  return (
    <div className='grid xl:grid-cols-3 grid-cols-1  justify-items-center xl:mx-20 gap-4 py-8'>
        <div className='lg:w-[350px] max-w-[384px] max-h-[254px] text-white space-y-2'>
      <img src={vector} alt="" />
      <p className='font-[600px] text-[28px] font-Montserrat'>You’re in Control</p>
      <p className='font-[300px] text-[22px] font-Work Sans'>aiDRs operate based on your rules. You guide the machine, the aiDRs execute the work.</p>
    </div>
        <div className='lg:w-[350px] max-w-[384px] max-h-[254px] text-white space-y-2'>
      <img src={graphg} alt="" />
      <p className='font-[600px] text-[28px] font-Montserrat'>Infinitely Scalable</p>
      <p className='font-[300px] text-[22px] font-Work Sans'>Train an aiDR on a patch. When you are happy with the results, scale it effortlessly.</p>
    </div>
        <div className='lg:w-[350px] max-w-[384px] max-h-[254px] text-white space-y-2'>
      <img src={arrow} alt="" />
      <p className='font-[600px] text-[28px] font-Montserrat'>Incredibly Flexible</p>
      <p className='font-[300px] text-[22px] font-Work Sans'>Train an aiDR on an outbound patch, to nurture inbound leads, or to reach out to your long tail of SMB customers at renewal time.</p>
    </div>
    </div>
  )
}

export default Control
