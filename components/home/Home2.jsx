"use client";
import React, { useState } from "react";
import CarousalElem from "../common/CarousalElem";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Link from "next/link";
import Popup from "../common/Popup";

const Home2 = ({ link }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  return (
    <section className="home-sec2">
      <div className=" py-24">
        <div
          data-aos="slide-up"
          data-aos-easing="ease-in-out"
          data-aos-duration="300"
          className=" text-center"
        >
          <h2 className=" whitespace-nowrap mb-8 md:mx-28 leading-tight text-white text-[32px] mb:text-[50px] ">
            WHY
            <span className=" bg-gradient-to-r from-yellow-400 to-yellow-500 via-yellow-400 bg-clip-text text-transparent text-stroke text-stroke-white">
              {" "}
              CAPITAL RUSH?
            </span>
          </h2>
          <p className=" text-white font-medium -mt-5 font-quicksand leading-normal text-[20px]">
            Transforming gaming into learning: Capital Rush merges finance
            education <br /> and fun, perfect for gamers and investment novices
          </p>
        </div>
        <div
          data-aos="fade-up"
          data-aos-easing="linear"
          data-aos-duration="600"
          className=" mt-12  xl:mx-32 mx-4 "
        >
          <CarousalElem />
          <div className="z-40 -mt-5 text-center ">
            <Popup isOpen={isModalOpen} onClose={closeModal} />
            {link === "/" && (
              <Link href={"https://firebasestorage.googleapis.com/v0/b/capitalrush-77e1a.appspot.com/o/CapitalRush.apk?alt=media"} className=" no-underline">
                <button className="transform hover:scale-105 transition-transform duration-300 py-3 px-10 rounded-l-3xl rounded-r-3xl bg-gradient-to-r from-yellow-200 via-yellow-300 to-red-500 cursor-pointer text-[16px]  h-fit w-fit my-auto font-bold leading-normal font-poppins text-white hover:text-yellow-300;">
                  {" "}
                  <span className="button-text-shadow ">PLAY NOW</span>
                </button>
              </Link>
            )}

            {link !== "/" && (
              <Link href={"https://firebasestorage.googleapis.com/v0/b/capitalrush-77e1a.appspot.com/o/CapitalRush.apk?alt=media"} className=" no-underline">
                <button className="transform hover:scale-105 transition-transform duration-300 py-3 px-10 rounded-l-3xl rounded-r-3xl bg-gradient-to-r from-yellow-200 via-yellow-300 to-red-500 cursor-pointer text-[16px]  h-fit w-fit my-auto font-bold leading-normal font-poppins text-white hover:text-yellow-300;">
                  {" "}
                  <span className="button-text-shadow ">PLAY NOW</span>
                </button>
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home2;
