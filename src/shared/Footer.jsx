import logo from "../images/Logo.png";

const Footer = () => {
  return (
    <div className="flex flex-col md:flex-row justify-between md:h-[109px] h-auto items-center py-4 space-y-4 px-8 md:mx-20 mx-0 border-2 shadow-lg border-[#07292F]">
      <img className="w-[72px] h-[20px] bg-cover" src={logo} alt="" />
      <p className="text-[16px] font-[300px] font-Work Sans text-[#96ACAF]">
        Copyright © 2023 Wizia. All rights reserved.
      </p>
    </div>
  );
};

export default Footer;
