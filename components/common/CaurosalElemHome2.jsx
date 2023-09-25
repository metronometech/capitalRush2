"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import "./caurosalhome2.css";

const CaurosalElemHome2 = () => {
  const [selectedButton, setSelectedButton] = useState("btn-1");

  const handleButtonChange = (event) => {
    setSelectedButton(event.target.id);
  };

  useEffect(() => {
    document.getElementById("btn-1").click();
  }, []);

  return (
    <div className="slider mx-10">
      <input
        type="radio"
        name="toggle"
        id="btn-1"
        checked={selectedButton === "btn-1"}
        onChange={handleButtonChange}
      />
      <input
        type="radio"
        name="toggle"
        id="btn-2"
        checked={selectedButton === "btn-2"}
        onChange={handleButtonChange}
      />
      <input
        type="radio"
        name="toggle"
        id="btn-3"
        checked={selectedButton === "btn-3"}
        onChange={handleButtonChange}
      />

      <div className="slider-controls">
        <label htmlFor="btn-1"></label>
        <label htmlFor="btn-2"></label>
        <label htmlFor="btn-3"></label>
      </div>

      {/* <input type="radio" name="toggle" id="btn-1"  />
      <input type="radio" name="toggle" id="btn-2" checked />
      <input type="radio" name="toggle" id="btn-3" />

      <div className="slider-controls">
        <label htmlFor="btn-1"></label>
        <label htmlFor="btn-2"></label>
        <label htmlFor="btn-3"></label>
      </div> */}

      <ul className="slides">
        <li className="slide">
          <div className="-ml-10">
            <h2 className=" leading-tight w-[575px] mb-8 mt-8 text-white text-[48px] ">
              People are Saying About Capital Rush
            </h2>
            <p className=" text-left w-[490px] ml-10 mt-12 text-white font-quicksand leading-normal text-[20px]">
              <span className="relative bottom-1 left-1 font-beatrice text-[32px] font-semibold text-[yellow] ">
                {" "}
                &#x201B;&#x201B;{" "}
              </span>{" "}
              I am very helped by this E-wallet application , my days are very
              easy to use this application and its very helpful in my life ,
              even I can pay a short time
              <span className="relative left-1 top-1 font-beatrice text-[32px] font-semibold text-[yellow]">
                ,,
              </span>
            </p>
            <div className="z-40 text-left mt-10 ml-16">
              <button
                className="mt-12 transform hover:scale-105 transition-transform duration-300 py-2 px-8 rounded-l-3xl rounded-r-3xl bg-gradient-to-r from-yellow-200 via-yellow-300 to-red-500 cursor-pointer text-[16px]  h-fit w-fit my-auto font-bold leading-normal font-poppins text-white hover:text-yellow-300;
 "
              >
                {" "}
                <span className="button-text-shadow text-[28px]">
                  See all stories
                </span>
              </button>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="group h-[600px] w-[380px]">
                <Image
                  alt="carosal-Home-sectionImage"
                  className=" relative bottom-[80px] right-[25px] group-hover:brightness-125"
                  src="/boy.png"
                  height={600}
                  width={398}
                />
              </div>
            </div>
          </div>
        </li>
        <li className="slide">
          <div className="-ml-10">
            <h2 className=" leading-tight w-[575px] mb-8 mt-8 text-white text-[48px] ">
              People are Saying About Capital Rush
            </h2>
            <p className=" text-left w-[490px] ml-10 mt-12 text-white font-quicksand leading-normal text-[20px]">
              <span className="relative bottom-1 left-1 font-beatrice text-[32px] font-semibold text-[yellow] ">
                {" "}
                &#x201B;&#x201B;{" "}
              </span>{" "}
              I am very helped by this E-wallet application , my days are very
              easy to use this application and its very helpful in my life ,
              even I can pay a short time
              <span className="relative left-1 top-1 font-beatrice text-[32px] font-semibold text-[yellow]">
                ,,
              </span>
            </p>
            <div className="z-40 text-left mt-10 ml-16">
              <button
                className="mt-12 transform hover:scale-105 transition-transform duration-300 py-2 px-8 rounded-l-3xl rounded-r-3xl bg-gradient-to-r from-yellow-200 via-yellow-300 to-red-500 cursor-pointer text-[16px]  h-fit w-fit my-auto font-bold leading-normal font-poppins text-white hover:text-yellow-300;
 "
              >
                {" "}
                <span className="button-text-shadow text-[28px]">
                  See all stories
                </span>
              </button>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="group h-[600px] w-[380px]">
                <Image
                  alt="carosal-Home-sectionImage"
                  className=" relative bottom-[80px] right-[25px] group-hover:brightness-125"
                  src="/boy.png"
                  height={600}
                  width={398}
                />
              </div>
            </div>
          </div>
        </li>
        <li className="slide">
          <div className="-ml-10">
            <h2 className=" leading-tight w-[575px] mb-8 mt-8 text-white text-[48px] ">
              People are Saying About Capital Rush
            </h2>
            <p className=" text-left w-[490px] ml-10 mt-12 text-white font-quicksand leading-normal text-[20px]">
              <span className="relative bottom-1 left-1 font-beatrice text-[32px] font-semibold text-[yellow] ">
                {" "}
                &#x201B;&#x201B;{" "}
              </span>{" "}
              I am very helped by this E-wallet application , my days are very
              easy to use this application and its very helpful in my life ,
              even I can pay a short time
              <span className="relative left-1 top-1 font-beatrice text-[32px] font-semibold text-[yellow]">
                ,,
              </span>
            </p>
            <div className="z-40 text-left mt-10 ml-16">
              <button
                className="mt-12 transform hover:scale-105 transition-transform duration-300 py-2 px-8 rounded-l-3xl rounded-r-3xl bg-gradient-to-r from-yellow-200 via-yellow-300 to-red-500 cursor-pointer text-[16px]  h-fit w-fit my-auto font-bold leading-normal font-poppins text-white hover:text-yellow-300;
 "
              >
                {" "}
                <span className="button-text-shadow text-[28px]">
                  See all stories
                </span>
              </button>
            </div>
          </div>
          <div className="">
            <div className="">
              <div className="group h-[600px] w-[380px]">
                <Image
                  className=" relative bottom-[80px] right-[25px] group-hover:brightness-125"
                  src="/boy.png"
                  height={600}
                  width={398}
                />
              </div>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default CaurosalElemHome2;

// <div>
//   <div className="group">
//     <div className="">
//       <div className="bg-gradient-to-bl from-[#FC6C64]  to-[#E02961] w-screen h-[540px] "></div>
//       <Image
//         className="relative bottom-[250px] right-[75px] group-hover:brightness-125"
//         src="/boy.png"
//         height={597}
//         width={380}
//       />
//     </div>
//   </div>
// </div>
