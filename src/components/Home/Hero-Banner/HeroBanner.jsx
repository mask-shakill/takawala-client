import React from "react";
import Img from "../../../assets/image 4.png";
const HeroBanner = () => {
  return (
    <div className=" h-[566px] ms-[130px] mt-[54px] me-[54px] flex relative ">
      <div className="w-[654px] h-[148px] pt-[134px] ">
        <div className="w-[654px]">
          <h1 className="text-[50px] font-semibold ">
            Seize Opportunities with Hassle-Free Loans
          </h1>
          <div className="w-[598px] h-[44px]">
            <p>
              Experience a streamlined application process, transparent terms,
              and swift approvals. It's time to take control of your financial
              journey
            </p>
          </div>
        </div>
        <div className="pt-[70px]">
          <button className="bg-[#0FA76C] px-10 py-3 rounded-3xl text-white">
            Apply Now
          </button>
        </div>
      </div>
      <div className="ps-[50px] w-[619px]">
        <div className="w-[477px] h-[477px] rounded-full bg-[#0FA76C] absolute top-[85px]"></div>

        <img className="absolute bottom-0 h-[566px]" src={Img} alt="" />
      </div>
    </div>
  );
};

export default HeroBanner;
