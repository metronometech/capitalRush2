"use client"
import Image from "next/image";
import Link from "next/link";
import Nav from "../common/Nav";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";

const Home1 = () => {

  useEffect(() => {
    AOS.init();
  }, [])
  
  

  return (
    <section className="sec1-bg bg-cover bg-center w-full h-screen ">
      <div className="hidden mb:flex mb:justify-center ">
        <Nav />
      </div>
      <div className="flex mb:hidden  ">
        <Nav variant="mobile" />
      </div>

      <div className=" text-center mt-20 mb-20 ">
        <div className="">
          <h2 data-aos="fade-up" data-aos-delay="100"  data-aos-duration="1000"   className=" mx-6  mb:mx-28 leading-tight text-white text-[40px] mb:text-[60px] ">
            LEARN HOW TO
            <span className=" text-yellow-300 text-stroke text-stroke-white">
              {" "}
              GROW YOUR MONEY WITH <br/> CAPITAL RUSH
            </span>
          </h2>
          <p data-aos="fade-down" data-aos-delay="200"  data-aos-duration="1000" className=" text-white font-quicksand text-[22px] mb:text-[30px]">
            Experience financial markets like never before
          </p>
          <div className="hidden mb:flex justify-center mt-4 mb:mt-12 gap-6 ml-6 mr-10">
            <div className=" cursor-pointer flex items-center justify-center flex-col ">
              <Link data-aos="zoom-in" data-aos-delay="120"  data-aos-duration="1000" href="/">
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
              <Link data-aos="zoom-in" data-aos-delay="160"  data-aos-duration="1000" href="/">
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
              <Link data-aos="zoom-in" data-aos-delay="220"  data-aos-duration="1000" href="/">
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
          
          
          <div className="flex flex-col mb:hidden justify-center mt-4 mb:mt-12 gap-6 ml-6 mr-10">
            <div className=" cursor-pointer flex items-center justify-center flex-col ">
              <Link data-aos="zoom-in" data-aos-delay="120"  data-aos-duration="1000" href="/">
                <Image
                  src="/svg/apple.svg"
                  alt="SVG Image"
                  width={220}
                  height={64}
                  className="mt-6 hzoom1"
                />
              </Link>
            </div>
            <div className="border-1 -mt-16 mb:-mt-0 border-white cursor-pointer flex items-center justify-center ">
              <Link data-aos="zoom-in" data-aos-delay="160"  data-aos-duration="1000" href="/">
                <Image
                  src="/svg/android.svg"
                  alt="SVG Image"
                  width={118}
                  height={64}
                  className="hzoom1"
                />
              </Link>
            </div>
            <div className="mb:ml-8 mg:mt-0 -mt-16 cursor-pointer flex items-center justify-center ">
              <Link data-aos="zoom-in" data-aos-delay="220" data-aos-offset="100"  data-aos-duration="1000" href="/">
                <Image
                  src="/svg/watchvd.svg"
                  alt="SVG Image"
                  width={118}
                  height={64}
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
