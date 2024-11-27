import { Button } from "@nextui-org/react";
import squre from "../images/ph_arrow-square-up-right-duotone.png";

const Buttonx = () => {
  return (
    <div>
      <Button
        className="text-[14px] font-Work Sans font-[500px] text-[#002228] rounded-full bg-primary my-4"
        href="#"
      >
        Sign Up for the Beta <img src={squre} alt="" />
      </Button>
    </div>
  );
};

export default Buttonx;
