import React from "react";
import Footer from "../common/FooterElem";

const Contact2 = () => {
  return (
    <div>
      <div className="flex flex-col mt-20 gap-12">
        <div className="flex justify-center gap-12">
          <input
            className="w-[330px] h-[60px] border rounded-lg placeholder-[#686A6B] font-poppins font-medium leading-7 text-[20px] pl-4 ]"
            placeholder="Your full name"
          />
          <input
            className="w-[330px] h-[60px] border rounded-lg placeholder-[#686A6B] font-poppins font-medium leading-7 text-[20px] pl-4"
            placeholder="Your email"
          />
        </div>
        <div className="flex justify-center mr-[395px]">
          <input
            className="w-[330px] h-[60px] border rounded-lg placeholder-[#686A6B] font-poppins font-medium leading-7 text-[20px] pl-4"
            placeholder="Your Phone"
          />
        </div>
        <div className="flex justify-center">
          <textarea
            className="w-[730px] h-[205px] rounded-lg  placeholder-[#686A6B] font-poppins font-medium leading-7 text-[20px]"
            placeholder="Your Message"
          />
        </div>
        <div className="z-40 flex justify-center text-left mt-2 mr-[450px] pb-20">
          <button
            className="mt-12 transform hover:scale-105 transition-transform duration-300 py-2 px-8 rounded-l-3xl rounded-r-3xl bg-gradient-to-r from-yellow-200 via-yellow-300 to-red-500 cursor-pointer text-[16px]  h-fit w-fit my-auto font-bold leading-normal font-poppins text-white hover:text-yellow-300;
 "
          >
            {" "}
            {/* button-text-shadow */}
            <span className=" text-[28px]">Send a message</span>
          </button>
        </div>
      </div>
      <div className="-mb-16">
        <Footer />
      </div>
    </div>
  );
};

export default Contact2;
