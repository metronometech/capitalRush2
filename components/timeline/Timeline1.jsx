"use client"
import React from "react";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



const Timeline1 = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div className="bg-[#100B26]">
      <div data-aos="slide-down" data-aos-delay="70"  data-aos-duration="1000" className="blog-bg h-[560px] flex flex-col justify-center items-center -mt-36">
        <h1 data-aos="fade-up" data-aos-delay="150"  data-aos-duration="1200" className=" font-poppins text-[48px] font-bold z-40 flex-shrink-0 -ml-8">
          <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
            Timeline
          </span>
        </h1>
      </div>
    </div>
  );
};

export default Timeline1;
