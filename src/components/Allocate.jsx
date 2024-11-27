

const Allocate = () => {
  return (
    <div className="max-w-[1344px] border-2 shadow-lg border-[#07292F] md:mx-20 py-8 my-16 hover:bg-warning-foreground">
      <div className="md:w-[582px] w-full text-center md:mx-auto ">
        <p className="text-[32px] w-full font-[600px] text-white font-Montserrat">Allocate effort where your reps make an inpact.</p>
        <p className="text-[32px] font-[500px] text-primary font-Montserrat italic">Let us handle the rest.</p>
        <p className="text-[20px] font-[300px] text-white font-Work Sans text-start mx-8">Keep your reps “in the air” -- out in the field and on the phone where they can build relationships.</p>
        <div className="flex flex-col md:flex-row md:w-[597px] gap-4 mx-8 my-8">
            <div className="w-[174px]">
                <p className="text-[120x] font-bold text-primary font-Montserrat text-start">32%</p>
                <p className="text-[14px] font-[300px] text-[#E9EEF1] font-Montserrat text-start">Improvement in Open Rates</p>
            </div>
            <div className="w-[174px]">
                <p className="text-[120x] font-bold text-primary font-Montserrat text-start">75%</p>
                <p className="text-[14px] font-[300px] text-[#E9EEF1] font-Montserrat text-start">Improvement in Ramp Time</p>
            </div>
            <div className="w-[174px]">
                <p className="text-[120x] font-bold text-primary font-Montserrat text-start">35%</p>
                <p className="text-[14px] font-[300px] text-[#E9EEF1] font-Montserrat text-start">Improvement in Meetings Booked</p>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Allocate
