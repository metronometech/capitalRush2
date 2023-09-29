"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import Popup from "./Popup";



const Nav2 = ({variant}) => {
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

  if (variant === "mobile") {
    return (
      <div>
        <div className="mx-4 gap-[40vw] sm:gap-[45vw] md:gap-[50vw] flex z-50 ">
          <div className="ml-6 z-30">
            <Image src="/logo.png" width={105} height={55} />
          </div>
          <div className="pt-4 z-50" onClick={toggleNav}>
            <Image
              src="/nav.png"
              width={24}
              height={14}
              alt="Open Navigation"
              className=" self-end"
            />
          </div>
          </div>
          {isNavOpen && (
            <div className="mobile-nav">
              <ul className="p-10 list-none transform transition-transform ease-in-out duration-300 flex flex-col items-center pt-2 mx-[30%]">
              <Link href="/" className=" no-underline">
                <li className="text-white text-[20px] whitespace-nowrap py-2 transform transition-transform ease-in-out duration-300 hover:text-yellow-300 hover:scale-105 z-50 opacity-70">
                  Home
                </li>
              </Link>
              <Link href="/about" className=" no-underline">
                <li className="text-white text-[20px] py-2 whitespace-nowrap transform transition-transform ease-in-out duration-300 hover:text-yellow-300 hover:scale-105 z-50 opacity-70">
                  About Us
                </li>
              </Link>
              <Link href="/timeline" className=" no-underline">
                <li className="text-white text-[20px] whitespace-nowrap py-2 transform transition-transform ease-in-out duration-300 hover:text-yellow-300 hover:scale-105 z-50 opacity-70">
                  Timeline
                </li>
              </Link>
              <Link href="/blog" className=" no-underline">
                <li className="text-white text-[20px] whitespace-nowrap py-2 transform transition-transform ease-in-out duration-300 hover:text-yellow-300 hover:scale-105 z-50 opacity-70">
                  Blog
                </li>
              </Link>
                {/* Add more menu items as needed */}
              </ul>
            </div>
          )}
      </div>
    );
  }


  return (
    <div className="bg-[#100B26] fixed top-0 w-full z-50  flex justify-center">
      <div className="flex xl:gap-60 gap-24 ">
        <div className="z-20  ">
          <Image
          alt="logo"
            src="/logo.png"
            className="transform hover:scale-105 transition-transform duration-300 py-2 px-8 rounded-l-3xl rounded-r-3xl cursor-pointer"
            width={130}
            height={70}
          />
        </div>
        <div className="flex mt-8 z-30">
          <ul className="list-none -mt-0 xl:gap-14 gap-8 flex">
            <li>
              <a href="/">
                <button className="navItem">Home</button>
              </a>
            </li>
            <li>
              <a href="/about">
                <button className="navItem whitespace-nowrap">About Us</button>
              </a>
            </li>
            <li>
              <a href="/timeline">
                <button className="navItem">Timeline</button>
              </a>
            </li>
            <li>
              <a href="/blog">
                <button className="navItem ">Blog</button>
              </a>
            </li>
          </ul>
          {/* <button className="navItem">Home</button>
            <button className="navItem">About Us</button>
            <button className="navItem">Timeline</button>
            <button className="navItem">Blog</button> */}
        </div>
        <Popup isOpen={isModalOpen} onClose={closeModal}  />
        <div className="z-40 mt-4 ">
          <button
            className="transform hover:scale-105 transition-transform duration-300 py-2 px-8 rounded-l-3xl rounded-r-3xl bg-gradient-to-r from-yellow-200 via-yellow-300 to-red-500 cursor-pointer text-[16px]  h-fit w-fit my-auto font-bold leading-normal font-poppins text-white hover:text-yellow-300;
 "          onClick={openModal}
          >
            {" "}
            <span className="button-text-shadow bg-transparent whitespace-nowrap ">PLAY NOW</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Nav2;
