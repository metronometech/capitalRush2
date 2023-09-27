"use client"
import Image from "next/image";
import React from "react";
import CarousalElem from "../common/CarousalElem";
import CarousalElem3 from "../common/CarousalElem3";
import Faq from "../common/Faq";
import Faq2 from "../common/Faq2";
import Footer from "../common/FooterElem";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



const faqs = [
  // Data to be fetched from API and replaced
  {
    question: "Do I need to pay for it?",
    answer:
      "No, You don’t need to pay for it. You can play infinite times without even paying a single penny unless you want to either purchase in-game currencies or get more value by getting Capital Rush’s Pro Subscription.. which would give you an in-depth analysis and feedback on your investing strategies and how you can grow your money even more.",
  },
  {
    question: "Is this a kind of gambling ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "How is Capital Rush different ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "What kind of investment categories do you have ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "I don’t have knowledge about Market, Can I pay it ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
  {
    question: "How does it work ?",
    answer:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  },
];


const About1 = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div >
      <div data-aos="slide-down" data-aos-delay="70"  data-aos-duration="1000" className="blog-bg bg-[#100B26] h-[560px] flex flex-col justify-center items-center -mt-36">
        <h1 data-aos="fade-up" data-aos-delay="150"  data-aos-duration="1200" className=" font-poppins text-[48px] font-bold z-40 flex-shrink-0 -ml-8">
          We make the{" "}
          <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
            games you want
          </span>
        </h1>
        <p className=" text-white text-center font-semibold font-quicksand opacity-70 max-w-[810px] -mt-3 text-[20px]">
          Capital Rush is a virtual stock market in which Players can play and
          invest in a variety of assets. The player can create their desired
          portfolio and boost their investing skills by playing in large-scale
          fantasy contests. It is a board game-styled mobile application based
          upon risk reward trade-offs. In terms of making financial decisions,
          we seek to establish a balance for players in terms of authority,
          responsibility and accountability.
        </p>
      </div>
      <div className="bg-[#100B26] pb-20 text-center flex flex-col -mt-[230px] ">
        <Image
        data-aos="fade-up" data-aos-delay="200"  data-aos-duration="1000"
          className=" z-20 relative top-[400px] self-end xl:pr-40 pr-10"
          src="/p4.png"
          height={470}
          width={480}
        />
        <div data-aos="fade-up" data-aos-delay="200"  data-aos-duration="800" className=" mx-auto w-[80%] h-[400px] custom-shadow "></div>
        <h1 data-aos="fade-up" data-aos-delay="200"  data-aos-duration="800" className=" relative bottom-[380px] self-start ml-[220px] 2xl:ml-[350px] font-poppins text-[48px] font-bold z-40 flex-shrink-0 ">
          Our{" "}
          <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
            Goal
          </span>
        </h1>
        <p data-aos="fade-up" data-aos-delay="200"  data-aos-duration="800" className="relative bottom-[350px] ml-[220px] 2xl:ml-[350px] text-left z-30 text-white font-quicksand opacity-70 2xl:max-w-[700px] lg:max-w-[610px] max-w-[500px]  -mt-3 text-[20px]">
          Our goal is to dispel the myth that the stock market is a game of loss
          and only for rich people. We have created an innovative platform that
          will help you grasp the significance of passive income and introduce
          you to some important stock market assets.
        </p>
      </div>
      <div className="bg-[#100B26] flex -mt-40">
        <div className="flex flex-col 2xl:ml-[180px]  ml-[120px] gap-10 -mt-4">
          <h1 data-aos="fade-up" data-aos-delay="50"  data-aos-duration="800" className="  self-start  font-poppins text-[48px] font-bold z-40 flex-shrink-0 ">
            HOW IS IT{" "}
            <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
              DIFFERENT
            </span>
            ?
          </h1>
          <h2 data-aos="fade-up" data-aos-delay="50"  data-aos-duration="800" className=" -mt-8 font-poppins">
            Thinking out of the box and bring out <br /> innovative things
          </h2>
          <div data-aos="fade-up" data-aos-delay="50"  data-aos-duration="800" className="flex mt-6">
            <div>
              <Image src="/1icon.png" height={60} width={60} />
            </div>
            <div className="pl-12 mb-10">
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
          <div data-aos="fade-up" data-aos-delay="50"  data-aos-duration="800" className="flex">
            <div>
              <Image src="/2icon.png" height={40} width={60} />
            </div>
            <div className="pl-12 mb-10">
              <h1 className=" -mt-8  font-poppins text-[32px] font-bold z-40 flex-shrink-0 ">
                <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
                Immersive Gaming :
                </span>
              </h1>
              <p className="  text-left z-30 text-white font-quicksand opacity-70 2xl:max-w-[700px] lg:max-w-[610px] max-w-[500px]  -mt-3 text-[20px]">
              Usually all trading simulators are prone to poor retention , since they are not immersive or fun to play and are super slow since they are linked with the real-time market.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="50"  data-aos-duration="800" className="flex">
            <div>
              <Image src="/3icon.png" height={60} width={60} />
            </div>
            <div className="pl-12 mb-10">
              <h1 className=" -mt-8  font-poppins text-[32px] font-bold z-40 flex-shrink-0 ">
                <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
                Gives you a realistic experience :
                </span>
              </h1>
              <p className="  text-left z-30 text-white font-quicksand opacity-70 2xl:max-w-[700px] lg:max-w-[610px] max-w-[500px]  -mt-3 text-[20px]">
              With Capital Rush we try to cater to these problems by making a fast paced trading experience where people understand how wealth is generated and how money grows and is compounded over a period of years.
              </p>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="50"  data-aos-duration="800" className="flex">
            <div>
              <Image src="/4icon.png" height={60} width={60} />
            </div>
            <div className="pl-12 mb-10">
              <h1 className=" -mt-8  font-poppins text-[32px] font-bold z-40 flex-shrink-0 ">
                <span className="font-poppins  bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
                Introducing Events & Surprise events
                </span>
              </h1>
              <p className="  text-left z-30 text-white font-quicksand opacity-70 2xl:max-w-[700px] lg:max-w-[610px] max-w-[500px]  -mt-3 text-[20px]">
              One more factor that is missing in the trading simulator and platforms is inflation and events like end of quarter cards.
              </p>
            </div>
          </div>
        </div>
        <div data-aos="fade-up" data-aos-delay="50"  data-aos-duration="800"  className="flex items-end">
          <Image src="/standingman.png" width={532} height={850} />
        </div>
      </div>

      {/* scrollbar */}
      <div data-aos="fade-up" data-aos-delay="50"  data-aos-duration="800" className="bg-[#100B26] pb-6">\
      <div>
      <h1 className=" -mt-8 text-center font-poppins text-[32px] font-bold z-40 flex-shrink-0 ">
                <span className="font-poppins mb:text-[48px]">
                OUR TEAM
                </span>
              </h1>
      </div>
      <CarousalElem3 />
      </div>
      <div className="home-sec2">
      <div data-aos="fade-up" data-aos-delay="50"  data-aos-duration="800"  className=" justify-center py-10 mx-auto max-w-screen-xl ">
          <h1 className="text-white text-[48px] ml-2 font-semibold mb-0">
            FAQ
          </h1>
          <div className="mt-5 flex flex-col">
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
