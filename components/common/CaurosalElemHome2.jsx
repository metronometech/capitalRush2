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
    <div className="flex ">
      <input
        className="hidden"
        type="radio"
        name="toggle"
        id="btn-1"
        checked={selectedButton === "btn-1"}
        onChange={handleButtonChange}
      />
      <input
        className="hidden"
        type="radio"
        name="toggle"
        id="btn-2"
        checked={selectedButton === "btn-2"}
        onChange={handleButtonChange}
      />
      <input
        className="hidden"
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

      <ul className="slides ">
        <li className="slide slider ">
          {/* Desktop */}
          <div className="hidden mb:block">
            <h2 className=" leading-tight w-[575px] mb-8 mt-8 text-white text-[48px] ">
              People are Saying About Capital Rush
            </h2>

            <p className=" text-left w-[590px] ml-16 mt-12 text-white font-quicksand leading-tight text-[22px]">
              {/* <span className="relative top-[40px] right-[35px] font-beatrice text-[44px] font-semibold text-[yellow] ">
                {" "}
                &#x201B;&#x201B;{" "}
              </span> */}
              <br />
              Capital Rush is a valuable app for both young learners and those
              curious about finance. It not only enhances knowledge in trading
              and investing but also sparks curiosity to delve deeper into the
              intricacies of finance.
              <br />
              {/* <span className="relative left-[95px] bottom-[40px] font-beatrice text-[44px] font-semibold text-[yellow]">
                ,,
              </span> */}
            </p>
          </div>

          {/* Mobile version */}
          <div className=" mx-auto block mb:hidden">
            <h2 className="  leading-tight  mb-8 mt-5 whitespace-nowrap text-white text-[22px] ">
              People are Saying About <br /> Capital Rush
            </h2>
            <p className=" text-center mx-4 -ml-1 text-white font-quicksand leading-tight text-[14px]">
              {/* <span className="relative top-[12px] right-[14px] font-beatrice text-[16px] font-semibold text-[yellow] ">
                {" "}
                &#x201B;&#x201B;{" "}
              </span> */}
              <br />
              <span className="  ">
                Capital Rush is a valuable app for both young learners and those
                curious about finance. It not only enhances knowledge in trading
                and investing but also sparks curiosity to delve deeper into the
                intricacies of finance.
              </span>
              <br />
              {/* <span className="relative left-[95px] bottom-[15px] font-beatrice text-[16px] font-semibold text-[yellow]">
                ,,
              </span> */}
            </p>
            <div>
              <Image
                alt="carosal-Home-sectionImage"
                className=" relative bottom-[25px]"
                src="/testimonial/t1.png"
                height={300}
                width={300}
              />
            </div>
          </div>

          {/* Mobile */}
          <div className="block mb:hidden max-w-[60px] max-h-[250px] ">
            {/* <Image
                  alt="carosal-Home-sectionImage"
                  className=" relative top-[275px] right-[190px]"
                  src="/boy.png"
                  height={246}
                  width={166}
                /> */}
          </div>

          <div className="hidden mb:block">
            <div className="">
              <div className="group h-[600px] w-[380px]">
                <Image
                  alt="carosal-Home-sectionImage"
                  className=" relative bottom-[80px] right-[200px] group-hover:brightness-125"
                  src="/testimonial/t1.png"
                  height={600}
                  width={650}
                />
              </div>
            </div>
          </div>
        </li>
        <li className="slide slider ">
          {/* Desktop */}
          <div className="hidden mb:block">
            <h2 className=" leading-tight w-[575px] mb-8 mt-8 text-white text-[48px] ">
              People are Saying About Capital Rush
            </h2>

            <p className=" text-left w-[590px] ml-16 mt-12 text-white font-quicksand leading-tight text-[22px]">
              {/* <span className="relative top-[40px] right-[35px] font-beatrice text-[44px] font-semibold text-[yellow] ">
                {" "}
                &#x201B;&#x201B;{" "}
              </span> */}
              <br />
              Capital Rush brought fresh insights into finance, even for someone
              with years of experience. Exploring equity, mutual funds, and
              venture capital scenarios, the game&apos;s risk-free environment
              enhances learning about capital markets.
              <br />
              {/* <span className="relative left-[170px] bottom-[40px] font-beatrice text-[44px] font-semibold text-[yellow]">
                ,,
              </span> */}
            </p>
          </div>

          {/* Mobile version */}
          <div className="mx-auto block mb:hidden">
            <h2 className="  leading-tight  mb-8 mt-5 whitespace-nowrap text-white text-[22px] ">
              People are Saying About <br /> Capital Rush
            </h2>
            <p className=" text-center  text-white font-quicksand leading-tight text-[14px]">
              {/* <span className="relative top-[12px] right-[14px] font-beatrice text-[16px] font-semibold text-[yellow] ">
                {" "}
                &#x201B;&#x201B;{" "}
              </span> */}
              <br />
              Capital Rush brought fresh insights into finance, even for someone
              with years of experience. Exploring equity, mutual funds, and
              venture capital scenarios, the game&apos;s risk-free environment
              enhances learning about capital markets.
              <br />
              {/* <span className="relative left-[87px] bottom-[15px] font-beatrice text-[16px] font-semibold text-[yellow]">
                ,,
              </span> */}
            </p>
            <div>
              <Image
                alt="carosal-Home-sectionImage"
                className=" relative bottom-[20px]"
                src="/testimonial/t2.png"
                height={300}
                width={300}
              />
            </div>
          </div>

          {/* Mobile */}
          <div className="block mb:hidden max-w-[60px] max-h-[250px] ">
            {/* <Image
        alt="carosal-Home-sectionImage"
        className=" relative top-[275px] right-[190px]"
        src="/boy.png"
        height={246}
        width={166}
      /> */}
          </div>

          <div className="hidden mb:block">
            <div className="">
              <div className="group h-[600px] w-[380px]">
                <Image
                  alt="carosal-Home-sectionImage"
                  className=" relative bottom-[80px] right-[200px] group-hover:brightness-125"
                  src="/testimonial/t2.png"
                  height={600}
                  width={650}
                />
              </div>
            </div>
          </div>
        </li>
        <li className="slide slider ">
          {/* Desktop */}
          <div className="hidden mb:block">
            <h2 className=" leading-tight w-[575px] mb-8 mt-8 text-white text-[48px] ">
              People are Saying About Capital Rush
            </h2>

            <p className=" text-left w-[590px] ml-16 mt-12 text-white font-quicksand leading-tight text-[22px]">
              {/* <span className="relative top-[40px] right-[35px] font-beatrice text-[44px] font-semibold text-[yellow] ">
                {" "}
                &#x201B;&#x201B;{" "}
              </span> */}
              <br />
              I am very helped by this E-wallet application , my <br />
              days are very easy to use this application and its
              <br /> very helpful in my life , even I can pay a short time{" "}
              <br />
              {/* <span className="relative left-[518px] bottom-[40px] font-beatrice text-[44px] font-semibold text-[yellow]">
                ,,
              </span> */}
            </p>
          </div>

          {/* Mobile version */}
          <div className="mx-auto block mb:hidden">
            <h2 className="  leading-tight  mb-8 mt-5 whitespace-nowrap text-white text-[24px] ">
              People are Saying About <br /> Capital Rush
            </h2>
            <p className=" text-center ml-4 text-white font-quicksand leading-tight text-[14px]">
              {/* <span className="relative top-[12px] right-[14px] font-beatrice text-[16px] font-semibold text-[yellow] ">
                {" "}
                &#x201B;&#x201B;{" "}
              </span> */}
              <br />
              I am very helped by this E-wallet application , my <br />
              days are very easy to use this application and its
              <br /> very helpful in my life , even I can pay a short time{" "}
              <br />
              {/* <span className="relative left-[260px] bottom-[15px] font-beatrice text-[16px] font-semibold text-[yellow]">
                ,,
              </span> */}
            </p>
            <div>
              <Image
                alt="carosal-Home-sectionImage"
                className=" relative bottom-[40px]"
                src="/testimonial/t3.png"
                height={350}
                width={330}
              />
            </div>
          </div>

          <div className="hidden mb:block">
            <div className="">
              <div className="group h-[600px] w-[380px]">
                <Image
                  alt="carosal-Home-sectionImage"
                  className=" relative bottom-[80px] right-[200px] group-hover:brightness-125"
                  src="/testimonial/t3.png"
                  height={600}
                  width={650}
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
