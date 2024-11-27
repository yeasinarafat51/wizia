import check from "../images/ph_check-circle-duotone.png";

const Train = () => {
  return (
    <div className="xl:text-center text-start xl:mx-auto mx-10 space-y-4 overflow-hidden">
      <p className="text-white  text-[40px] font-Montserrat font-[600px]">
        Train your aiDR on your...
      </p>
      <p className="italic text-primary text-[40px] font-Montserrat font-[500px]">
        prefered email st|
      </p>
      <p className="xl:w-[450px] text-center mx-auto text-[#FFFFFF] text-[24px] font-Work Sans font-[300px">
        You’re in control. Train your aiDR on elements of your Marketing
        strategy.
      </p>
      <div className="grid xl:grid-cols-2 grid-cols-1 justify-center text-start mx-auto w-[578px]  space-y-2">
        <div className="flex justify-start items-center gap-4 text-primary">
          <img src={check} alt="" />
          <p>Quick to ramp</p>
        </div>
        <div className="flex justify-start items-center gap-4 text-primary">
          <img src={check} alt="" />
          <p>Easy to optimize</p>
        </div>
        <div className="flex justify-start items-center gap-4 text-primary">
          <img src={check} alt="" />
          <p>Quick to scale up</p>
        </div>
        <div className="flex justify-start items-center gap-4 text-primary">
          <img src={check} alt="" />
          <p>Works with all your existing tools</p>
        </div>
      </div>
    </div>
  );
};

export default Train;
