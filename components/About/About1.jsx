"use client";
import Image from "next/image";
import React from "react";
import CarousalElem from "../common/CarousalElem";
import CarousalElem3 from "../common/CarousalElem3";
import Faq from "../common/Faq";
import Faq2 from "../common/Faq2";
import Footer from "../common/FooterElem";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import FaqImport from "../helper/FaqImport";

const faqs =FaqImport;

const About1 = () => {
  
  
  useEffect(() => {
    const isFirstLoad = localStorage.getItem("isFirstLoad") !== "false";

    if (isFirstLoad) {
      localStorage.setItem("isFirstLoad", "false");
      window.location.reload();
    }
    setTimeout(() => {
      localStorage.removeItem("isFirstLoad");
    }, 6000);
  });

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <div>
      <div
        data-aos="slide-down"
        data-aos-delay="70"
        data-aos-duration="1000"
        className="blog-bg bg-[#100B26]  h-[560px] flex flex-col justify-center items-center mb:-mt-36 mx-2 mb:mx-0"
      >
        <div className="relative top-[100px]">
          <h1
            data-aos="fade-up"
            data-aos-delay="150"
            data-aos-duration="1200"
            className=" font-poppins leading-tight pt-6 m mt-20 mb:pb-16 pb-8 text-center text-[38px] mb:text-[48px] font-bold z-40 flex-shrink-0 mb:-ml-8"
          >
            We make the{" "}
            <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
              games you want
            </span>
          </h1>
          <p className=" text-white  text-center mt-20 mb:mt-0 font-semibold font-quicksand opacity-70 max-w-[810px] leading-normal  text-[15px] mb:text-[20px]">
          Capital Rush (parent company- Metronome Technologies private limited), a virtual stock market, lets players build portfolios and enhance investing skills through fantasy contests. 
          </p>
        </div>
      </div>

      <div className="bg-[#100B26] border  pb-20 text-center hidden  mb:flex flex-col -mt-[230px] ">
        <Image
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          className=" z-20 relative top-[400px] self-end xl:pr-40 pr-10"
          src="/p4.png"
          height={460}
          width={450}
        />
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
          className=" mx-auto w-[80%] h-[400px] border rounded-xl custom-shadow "
        ></div>
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
          className=" relative bottom-[380px] self-start ml-[220px] 2xl:ml-[220px] font-poppins text-[48px] font-bold z-40 flex-shrink-0 "
        >
          Our{" "}
          <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
            Goal
          </span>
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
          className="relative bottom-[350px] ml-[220px] 2xl:ml-[220px] text-left z-30 text-white font-quicksand opacity-70 2xl:max-w-[700px] lg:max-w-[610px] max-w-[500px]  -mt-3 text-[20px]"
        >
Our goal is to demystify the stock market, making it accessible to all. Our innovative platform introduces the significance of passive income and key stock market assets.
        </p>
      </div>

      {/* Mobile */}
      <div className="bg-[#100B26] pb-20  text-center mb:hidden flex flex-col  ">
        <Image
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          className=" z-20 relative top-[310px] self-center xl:pr-40"
          src="/p4.png"
          height={200}
          width={200}
        />
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
          className=" mx-auto w-[97%] h-[310px] border rounded-xl mb-6 custom-shadow "
        ></div>
        <h1
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
          className=" relative bottom-[330px] self-center pb-2 2xl:ml-[350px] font-poppins text-[22px] font-bold z-40 flex-shrink-0 "
        >
          Our{" "}
          <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
            Goal
          </span>
        </h1>
        <p
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="800"
          className="relative bottom-[390px] pt-10 mx-3 2xl:ml-[350px] text-center z-30 text-white font-quicksand opacity-70 2xl:max-w-[700px] lg:max-w-[610px] max-w-[500px]   text-[12px] mb:text-[20px]"
        >
Our goal is to demystify the stock market, making it accessible to all. Our innovative platform introduces the significance of passive income and key stock market assets.
        </p>
      </div>

      {/* Laptop */}
      <div className="bg-[#100B26]  hidden mb:flex -mt-40">
        <div className="flex flex-col 2xl:ml-[180px]  ml-[120px] gap-10 -mt-4">
          <h1
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="800"
            className="  self-start  font-poppins text-[48px] font-bold z-40 flex-shrink-0 "
          >
            HOW IS IT{" "}
            <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
              DIFFERENT
            </span>
            ?
          </h1>
          <h2
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="800"
            className=" -mt-8 font-poppins"
          >
            Thinking out of the box and bring out <br /> innovative things
          </h2>
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="800"
            className="flex mt-6"
          >
            <div>
              <Image src="/1icon.png" height={60} width={60} />
            </div>
            <div className="pl-12 mb-6 -mt-4">
              <h1 className=" -mt-8  font-poppins text-[32px] font-bold z-40 flex-shrink-0 ">
                <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
                  Trading merged with Gaming :
                </span>
              </h1>
              <p className="  text-left z-30 text-white font-quicksand opacity-70 2xl:max-w-[700px] lg:max-w-[610px] max-w-[500px]  -mt-3 text-[20px]">
                Capital Rush can be considered disruptive because no one has
                tried to merge gaming and trading space before and if it’s done
                before it has been highly inefficient and slow paced.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="800"
            className="flex"
          >
            <div>
              <Image src="/2icon.png" height={40} width={60} />
            </div>
            <div className="pl-12 mb-6 -mt-4">
              <h1 className=" -mt-8  font-poppins text-[32px] font-bold z-40 flex-shrink-0 ">
                <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
                  Immersive Gaming :
                </span>
              </h1>
              <p className="  text-left z-30 text-white font-quicksand opacity-70 2xl:max-w-[700px] lg:max-w-[610px] max-w-[500px]  -mt-3 text-[20px]">
                Usually all trading simulators are prone to poor retention ,
                since they are not immersive or fun to play and are super slow
                since they are linked with the real-time market.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="800"
            className="flex"
          >
            <div>
              <Image src="/3icon.png" height={60} width={60} />
            </div>
            <div className="pl-12 mb-6 -mt-4">
              <h1 className=" -mt-8  font-poppins text-[32px] font-bold z-40 flex-shrink-0 ">
                <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
                  Gives you a realistic experience :
                </span>
              </h1>
              <p className="  text-left z-30 text-white font-quicksand opacity-70 2xl:max-w-[700px] lg:max-w-[610px] max-w-[500px]  -mt-3 text-[20px]">
                With Capital Rush we try to cater to these problems by making a
                fast paced trading experience where people understand how wealth
                is generated and how money grows and is compounded over a period
                of years.
              </p>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="800"
            className="flex"
          >
            <div>
              <Image src="/4icon.png" height={60} width={60} />
            </div>
            <div className="pl-12 mb-6 -mt-4">
              <h1 className=" -mt-8  font-poppins text-[32px] font-bold z-40 flex-shrink-0 ">
                <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
                  Introducing Events & Surprise events
                </span>
              </h1>
              <p className="  text-left z-30 text-white font-quicksand opacity-70 2xl:max-w-[700px] lg:max-w-[610px] max-w-[500px]  -mt-3 text-[20px]">
                One more factor that is missing in the trading simulator and
                platforms is inflation and events like end of quarter cards.
              </p>
            </div>
          </div>
        </div>
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="800"
          className="flex items-end"
        >
          <Image src="/standingman.png" width={532} height={850} />
        </div>
      </div>

      {/* Mobile  */}
      <div className="bg-[#100B26]  mb:hidden flex -mt-40 mx-2">
        <div className="flex flex-col text-center gap-4 -mt-4">
          <h1
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="800"
            className="  self-center  font-poppins text-[20px] mb-2 font-bold z-40 flex-shrink-0 "
          >
            HOW IS IT{" "}
            <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
              DIFFERENT
            </span>
            ?
          </h1>
          <h2
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="800"
            className=" -mt-4  text-center font-poppins"
          >
            Thinking out of the box and bring out innovative things
          </h2>
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="800"
            className="flex mt-6"
          >
            <div className=" flex">
              <Image src="/1icon.png" height={25} width={25} />
              <div className="px-2 mb-6 -mt-4">
                <h1 className="  font-poppins text-left ml-4 text-[16px] font-bold z-40 flex-shrink-0 mb-3  ">
                  <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
                    Trading merged with Gaming :
                  </span>
                </h1>
                <p className=" ml-4 text-left z-30 text-white font-quicksand opacity-70 2xl:max-w-[700px] lg:max-w-[610px] max-w-[500px]  -mt-3 text-[12px]">
                  Capital Rush can be considered disruptive because no one has
                  tried to merge gaming and trading space before and if it’s
                  done before it has been highly inefficient and slow paced.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="800"
            className="flex"
          >
            <div className="flex">
              <Image src="/2icon.png" height={20} width={30} />
              <div className="px-2 -mt-4 mb-4">
                <h1 className="   font-poppins text-[16px] text-left ml-2 font-bold z-40 flex-shrink-0 mb-3 ">
                  <span className="font-poppins   bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
                    Immersive Gaming :
                  </span>
                </h1>
                <p className=" ml-2  text-left z-30 text-white font-quicksand opacity-70 2xl:max-w-[700px] lg:max-w-[610px] max-w-[500px]  -mt-3 text-[12px]">
                  Usually all trading simulators are prone to poor retention ,
                  since they are not immersive or fun to play and are super slow
                  since they are linked with the real-time market.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="800"
            className="flex"
          >
            <div className="flex">
              <Image src="/3icon.png" height={25} width={25} />
              <div className="px-2  mb-6 -mt-4">
                <h1 className="   font-poppins text-left ml-2 text-[16px] font-bold z-40 flex-shrink-0 mb-3 ">
                  <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
                    Gives you a realistic experience :
                  </span>
                </h1>
                <p className=" ml-2 text-left z-30 text-white font-quicksand opacity-70 2xl:max-w-[700px] lg:max-w-[610px] max-w-[500px]  -mt-3 text-[12px]">
                  With Capital Rush we try to cater to these problems by making
                  a fast paced trading experience where people understand how
                  wealth is generated and how money grows and is compounded over
                  a period of years.
                </p>
              </div>
            </div>
          </div>
          <div
            data-aos="fade-up"
            data-aos-delay="50"
            data-aos-duration="800"
            className="flex"
          >
            <div className="flex">
              <Image src="/4icon.png" height={25} width={25} />
              <div className="px-2 mb-6 -mt-4">
                <h1 className="   font-poppins text-left pl-2 text-[16px] font-bold z-40 flex-shrink-0 mb-3 ">
                  <span className="font-poppins bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
                    Introducing Events & Surprise events
                  </span>
                </h1>
                <p className=" ml-2 text-left z-30 text-white font-quicksand opacity-70 2xl:max-w-[700px] lg:max-w-[610px] max-w-[500px]  -mt-3 text-[12px]">
                  One more factor that is missing in the trading simulator and
                  platforms is inflation and events like end of quarter cards.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="800"
        className="flex mb:hidden justify-center items-center "
      >
        <Image src="/standingman.png" width={162} height={260} />
      </div>

      {/* scrollbar */}
      <div
        data-aos="fade-up"
        data-aos-delay="50"
        data-aos-duration="800"
        className="bg-[#100B26] pb-6"
      >
        <div>
          <h1 className="mt-10 mb:mt-20 text-center font-poppins text-[32px] font-bold z-40 flex-shrink-0 ">
            <span className="font-poppins text-[20px] mb:text-[48px]">
              OUR TEAM
            </span>
          </h1>
        </div>

        {/* <CarousalElem3 /> */}

        <div className=" flex justify-between mb:mx-28 ">
          <div className="flex-col group">
            <div className="hidden mb:block relative w-[280px] h-[220px] mx-auto text-center">
              <Image
                alt="carosal-Images"
                className=" group-hover:brightness-125"
                src="/face1.png"
                fill
              />
            </div>
            <div className=" relative block mb:hidden w-30 h-24 z-40  mx-auto text-center">
              <Image
                alt="carosal-Images"
                className=" group-hover:brightness-125"
                src="/face1.png"
                fill
              />
            </div>
            <div className="flex flex-col -mt-4 items-center gap-2 pl-2">
              <h2 className=" text-justify font-poppins text-[12px] mb:whitespace-normal whitespace-nowrap  mb:text-[30px] font-bold leading-10">
                Samveg Singhi
              </h2>
              <div className="hidden mb:block relative bottom-4 bg-gradient-to-r from-transparent via-white to-transparent w-[260px] h-[0.926px]"></div>
              <p className=" mb:-mt-2 -mt-8 text-justify font-quicksand text-[8px] mb:text-[18px] font-medium leading-6">
                Founder
              </p>
            </div>
          </div>
          <div className="flex-col group">
            <div className="hidden mb:block relative w-[280px] h-[220px] mx-auto text-center">
              <Image
                alt="carosal-Images"
                className=" group-hover:brightness-125"
                src="/face2.png"
                fill
              />
            </div>
            <div className="relative block mb:hidden w-30 h-24 z-40  mx-auto text-center">
              <Image
                alt="carosal-Images"
                className=" group-hover:brightness-125"
                src="/face2.png"
                fill
              />
            </div>
            <div className="flex flex-col -mt-4 items-center gap-2">
              <h2 className=" text-justify font-poppins text-[12px] mb:whitespace-normal whitespace-nowrap  mb:text-[30px] font-bold leading-10">
                Yogesh Lakhpatani
              </h2>
              <div className="hidden mb:block relative bottom-4 bg-gradient-to-r from-transparent via-white to-transparent w-[260px] h-[0.926px]"></div>
              <p className=" mb:-mt-2 -mt-8 text-justify font-quicksand text-[8px] mb:text-[18px] font-medium leading-6">
                Operations Manager
              </p>
            </div>
          </div>
          <div className="flex-col group">
            <div className="hidden mb:block relative w-[280px] h-[220px] mx-auto text-center">
              <Image
                alt="carosal-Images"
                className=" group-hover:brightness-125"
                src="/face3.png"
                fill
              />
            </div>
            <div className="relative block mb:hidden w-30 h-24 z-40  mx-auto text-center">
              <Image
                alt="carosal-Images"
                className=" group-hover:brightness-125"
                src="/face3.png"
                fill
              />
            </div>
            <div className="flex flex-col -mt-4 items-center gap-2 pr-2">
              <h2 className=" text-justify font-poppins text-[12px] mb:whitespace-normal whitespace-nowrap  mb:text-[30px] font-bold leading-10">
                Nilesh Sharma
              </h2>
              <div className="hidden mb:block relative bottom-4 bg-gradient-to-r from-transparent via-white to-transparent w-[260px] h-[0.926px]"></div>
              <p className=" mb:-mt-2 -mt-8 text-justify font-quicksand text-[8px] mb:text-[18px] font-medium leading-6">
                Tech Lead
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="home-sec2">
        <div
          data-aos="fade-up"
          data-aos-delay="50"
          data-aos-duration="800"
          className=" justify-center py-10 pl-2 mb:pl-24 mb:mx-auto max-w-screen-xl "
        >
          <h1 className="text-white text-[20px] mb:text-[48px] ml-2 font-semibold mb-0">
            FAQ
          </h1>
          <div className="mt-5  flex flex-col">
            {faqs.map((elem, index) => {
              return (
                <Faq2
                  question={elem.question}
                  answer={elem.answer}
                  key={index}
                />
              );
            })}
          </div>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
};

export default About1;
