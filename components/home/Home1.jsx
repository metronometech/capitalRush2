"use client"
import Image from "next/image";
import Link from "next/link";
import Nav from "../common/Nav";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect, useState } from "react";

const Home1 = () => {

  const [link,updatelink]=useState("/");

  useEffect(() => {
    AOS.init();
  }, [])

  function setAppStoreLink() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    // Check for iOS (iPhone, iPad, iPod)
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // document.getElementById('appStoreLink').href = 'https://apps.apple.com/us/app/your-app-name/id1234567890'; // Replace with your actual App Store link
        updatelink("https://apps.apple.com/in/app/capital-rush/id1615705403")
    } 
    // Check for Android
    else if (/android/i.test(userAgent)) {
        // document.getElementById('playStoreLink').href = 'https://play.google.com/store/apps/details?id=com.yourapp.package'; // Replace with your actual Play Store link
        updatelink("https://play.google.com/store/apps/details?id=com.metronome.capital")
    }
}

useEffect(() => {
  setAppStoreLink();
}, [])

  
  

  return (
    <section className="sec1-bg bg-cover bg-center w-full h-screen ">
      <div className="hidden mb-[280px] mb:flex mb:justify-center  ">
        <Nav link={link} />
      </div>
      <div className="flex mb:hidden ml-7 ">
        <Nav variant="mobile" link={link} />
      </div>

      <div className=" text-center mt-20 mb-20 ">
        <div className="">
          <h2 data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1000"   className=" mx-6 font-poppins mb:mx-28 leading-tight text-white text-[36px] mb:text-[60px] ">
            LEARN HOW TO
            <span className=" text-yellow-300 text-[36px] mb:text-[60px] font-poppins text-stroke text-stroke-white">
              {" "}
              GROW YOUR MONEY <br/> </span>
              WITH  CAPITAL RUSH
            
          </h2>
          <p data-aos="fade-down" data-aos-delay="200"  data-aos-duration="1000" className="mb:pt-10 pt-6 text-white font-quicksand text-[22px] mb:text-[30px]">
            Experience financial markets like never before
          </p>
          <div className="hidden mb:flex justify-center mt-4 mb:mt-12 gap-6 ml-6 mr-10">
            <div className=" cursor-pointer flex items-center justify-center flex-col ">
              <Link data-aos="zoom-in" data-aos-delay="120"  data-aos-duration="1000" href="https://apps.apple.com/in/app/capital-rush/id1615705403" target="blank">
                <Image
                  src="/svg/apple.svg"
                  alt="SVG Image"
                  width={350}
                  height={300}
                  layout="responsive"
                  objectFit="cover"
                  className="mt-6 hzoom1"
                />
              </Link>
            </div>
            <div className="border-1 -mt-12 mb:mt-0 border-white cursor-pointer flex items-center justify-center ">
              <Link data-aos="zoom-in" data-aos-delay="160"  data-aos-duration="1000" href="https://play.google.com/store/apps/details?id=com.metronome.capital" target="blank">
                <Image
                  src="/svg/android.svg"
                  alt="SVG Image"
                  width={280}
                  height={280}
                  layout="responsive"
                  objectFit="cover"
                  className="  hzoom1"
                />
              </Link>
            </div>
            <div className="mb:ml-8  cursor-pointer flex items-center justify-center ">
              <Link data-aos="zoom-in" data-aos-delay="220"  data-aos-duration="1000" href="https://www.youtube.com/watch?v=zcEQPGe73sM">
                <Image
                  src="/svg/watchvd.svg"
                  alt="SVG Image"
                  width={300}
                  height={300}
                  layout="responsive"
                  objectFit="cover"
                  className="hzoom1"
                />
              </Link>
            </div>
          </div>
          
          
          <div className="flex flex-col mb:hidden justify-center  mb:mt-12 gap-4">
            <div className=" cursor-pointer flex  gap-2 flex-col ">
             <div className="-ml-[50px] flex justify-center">
              <Link data-aos="zoom-in" data-aos-delay="120"  data-aos-duration="1000"  href="https://apps.apple.com/in/app/capital-rush/id1615705403" target="blank">
                <Image
                  src="/svg/apple.svg"
                  alt="SVG Image"
                  width={180}
                  height={80}
                  layout="responsive"
                  className="mt-4 ml-3 hzoom1 scale-75"
                />
              </Link>
              <Link data-aos="zoom-in" data-aos-delay="160"  data-aos-duration="1000" href="https://play.google.com/store/apps/details?id=com.metronome.capital" target="blank">
                <Image
                  src="/svg/android.svg"
                  alt="SVG Image"
                  width={180}
                  height={80}
                  layout="responsive"
                  className="hzoom1 mt-[47px] -ml-[55px]"
                />
              </Link>

             </div>
            </div>
            <div className="mb:ml-8 mg:mt-0 -mt-16 cursor-pointer flex items-center justify-center ">
              <Link data-aos="zoom-in" data-aos-delay="220" data-aos-offset="100"  data-aos-duration="1000" href="https://www.youtube.com/watch?v=zcEQPGe73sM">
                <Image
                  src="/svg/watchvd.svg"
                  alt="SVG Image"
                  width={180}
                  height={80}
                  className="hzoom1"
                />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home1;
