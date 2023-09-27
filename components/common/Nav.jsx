"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";

const Nav = ({ variant ,link }) => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNav = () => {
    setIsNavOpen(!isNavOpen);
  };

  if (variant === "mobile") {
    return (
      <div>
        <div className=" mx-4 gap-[40vw] sm:gap-[45vw] md:gap-[50vw] flex z-50 ">
          <div className="ml-6 pt-6">
            <Image src="/logo.png" width={105} height={55} />
          </div>
          <div className=" z-50" onClick={toggleNav}>
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
              <ul className=" list-none transform transition-transform ease-in-out duration-300 flex flex-col items-center pt-2 mx-[30%]">
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
    <div className=" flex justify-center">
      <div className="flex xl:gap-60 gap-24 ">
        <div className="z-20 ">
          <Image
            alt="logo"
            src="/logo.png"
            className="transform hover:scale-105 transition-transform duration-300 py-2 px-8 rounded-l-3xl rounded-r-3xl cursor-pointer"
            width={200}
            height={90}
          />
        </div>
        <div className="flex z-30">
          <ul className="list-none -mt-0 xl:gap-14 gap-8 flex">
            <li>
              <a href="/">
                <button className="navItem">Home</button>
              </a>
            </li>
            <li>
              <a href="/about">
                <button className="navItem">About Us</button>
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
        <div className="z-40 -mt-1 ">
        <Link className=" no-underline"s href={link}>

          <button
            className="transform hover:scale-105 transition-transform duration-300 py-2 px-8 rounded-l-3xl rounded-r-3xl bg-gradient-to-r from-yellow-200 via-yellow-300 to-red-500 cursor-pointer text-[16px]  h-fit w-fit my-auto font-bold leading-normal font-poppins text-white hover:text-yellow-300;
 "
          >
            {" "}
            <span className="button-text-shadow ">PLAY NOW</span>
          </button>
        </Link>
        </div>
      </div>
    </div>
  );
};

export default Nav;
