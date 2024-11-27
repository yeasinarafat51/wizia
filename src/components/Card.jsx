import layout from "../images/Group 9.png";

const Card = () => {
  return (
    <div className="">
      <div className="flex justify-center">
        <img src={layout} alt="" />
      </div>
      <p className="md:text-[32px] text-[24px] font-[300px] font-Work Sans text-white text-center max-w-[920px] mx-auto">
        Qorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vulputate
        libero et velit interdum, ac aliquet odio mattis.
      </p>
      <p className="text-[24px] font-[600px] font-Work Sans text-primary text-center">
        John Doe <br />
        <span className="text-[20px] font-[400px] font-Work Sans text-[#96ACAF] text-center">
          Chief Strategy Officer @ Company
        </span>
      </p>
    </div>
  );
};

export default Card;
