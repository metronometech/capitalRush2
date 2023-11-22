"use client";
import Image from "next/image";
import React from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";

const Timeline2 = () => {
  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div className="flex flex-col gap-6 pb-20 pt-6">
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
        className="flex flex-col mx-[15%] gap-5"
      >
        <h1 className="   font-poppins text-[32px] mb:text-[48px] font-bold z-40 flex-shrink-0">
          Version -
          <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
            1
          </span>
        </h1>
        <p className=" mb:whitespace-nowrap  text-left  z-30 text-white font-quicksand opacity-70 2xl:max-w-[700px] lg:max-w-[610px] max-w-[500px]  -mt-8 text-[16px] mb:text-[20px]">
          The first & simplest game board with the concept of time flow in a
          quick manner.
        </p>
        <Image
          src="/v1.png"
          width={990}
          height={560}
          layout="responsive"
          className=""
        />
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
        className="flex flex-col mx-[15%] gap-5"
      >
        <h1 className="   font-poppins text-[32px] mb:text-[48px] font-bold z-40 flex-shrink-0">
          Version -
          <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
            2
          </span>
        </h1>
        <p className=" mb:whitespace-nowrap  text-left  z-30 text-white font-quicksand opacity-70 2xl:max-w-[700px] lg:max-w-[610px] max-w-[500px]  -mt-8 text-[16px] mb:text-[20px]">
          Improved UI for showing the total portfolio and invested amount, city
          map asset allocation.
        </p>
        <div>
          <video className="w-full h-auto" controls>
            <source src="https://www.youtube.com/embed/WVTLq9Zj4qw?si=3G0BY8LQFXrNSAoU" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
        className="flex flex-col mx-[15%] gap-5"
      >
        <h1 className="   font-poppins text-[32px] mb:text-[48px] font-bold z-40 flex-shrink-0">
          Version -
          <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
            3
          </span>
        </h1>
        <p className=" mb:whitespace-nowrap  text-left  z-30 text-white font-quicksand opacity-70 2xl:max-w-[700px] lg:max-w-[610px] max-w-[500px]  -mt-8 text-[16px] mb:text-[20px]">
        Added and improved the game characters, Enhanced the asset allocation list based on user experience sampling.
        </p>
        <div>
          <video className="w-full h-auto" controls>
            <source src="https://www.youtube.com/embed/SkTurcIM9XQ?si=UYvezhSH-1th8_yO" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
        className="flex flex-col mx-[15%] gap-5"
      >
        <h1 className="   font-poppins text-[32px] mb:text-[48px] font-bold z-40 flex-shrink-0">
          Version -
          <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
            4
          </span>
        </h1>
        <p className=" mb:whitespace-nowrap  text-left  z-30 text-white font-quicksand opacity-70 2xl:max-w-[700px] lg:max-w-[610px] max-w-[500px]  -mt-8 text-[16px] mb:text-[20px]">
        Introduced EOQ cards and chart functionality to show the complex financestatistics in nutshell.
        </p>
        <div>
          <video className="w-full h-auto" controls>
            <source src="https://www.youtube.com/embed/gGzNP0OimSw?si=bFOYfdBdC6USi9hg" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
        className="flex flex-col mx-[15%] gap-5"
      >
        <h1 className="   font-poppins text-[32px] mb:text-[48px] font-bold z-40 flex-shrink-0">
          Version -
          <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
            5
          </span>
        </h1>
        <p className=" mb:whitespace-nowrap  text-left  z-30 text-white font-quicksand opacity-70 2xl:max-w-[700px] lg:max-w-[610px] max-w-[500px]  -mt-8 text-[16px] mb:text-[20px]">
        Transformed text into buttons and logos, Introduced ticker to show the market effecton all assets.
        </p>
        <div>
          <video className="w-full h-auto" controls>
            <source src="https://www.youtube.com/embed/heuvNS_aNAk?si=RR3pehUuuZVRDR0T" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div>
      <div
  data-aos="fade-up"
  data-aos-delay="200"
  data-aos-duration="800"
  className="flex flex-col mx-[15%] gap-5"
>
  <h1 className="  font-poppins text-[32px] mb:text-[48px] font-bold z-40 flex-shrink-0">
    Version -
    <span className="font-poppins bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
      6
    </span>
  </h1>
  <p className=" mb:whitespace-nowrap text-left z-30 text-white font-quicksand opacity-70 2xl:max-w-[700px] lg:max-w-[610px] max-w-[500px] -mt-8 text-[16px] mb:text-[20px]">
    Rephrased the definitions to explain everything in the simplest way.
  </p>
  <div className="relative">
  <iframe width="1080" height="720" src="https://www.youtube.com/embed/6qK315xNdnc?si=O40bKMGYuHtP60sD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
  </div>
</div>
      {/* <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
        className="flex flex-col mx-[15%] gap-5"
      >
        <h1 className="   font-poppins text-[32px] mb:text-[48px] font-bold z-40 flex-shrink-0">
          Version -
          <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
            7
          </span>
        </h1>
        <p className=" mb:whitespace-nowrap  text-left  z-30 text-white font-quicksand opacity-70 2xl:max-w-[700px] lg:max-w-[610px] max-w-[500px]  -mt-8 text-[16px] mb:text-[20px]">
        Improved UI of Dice, Mascot and asset allocation screen to match with the Capital world.
        </p>
        <div>
          <video className="w-full h-auto" controls>
            <source src="/video/6.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </div> */}

    </div>
  );
};

export default Timeline2;
