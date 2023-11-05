  "use client";
  import React, { useEffect, useState } from "react";
  import { Swiper, SwiperSlide } from "swiper/react";
  import "./caurosal.css"; // Your CSS file
  import "swiper/css/bundle"; // Import Swiper styles
  import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
  import Image from "next/image";

  const CarousalElem = () => {

    const [slidesPerView, setSlidesPerView] = useState(3);

    useEffect(() => {
      // Update slidesPerView based on the screen size
      if (window.innerWidth >= 1220) {
        setSlidesPerView(4); // Display 4 slides for screens XL and greater
      } else {
        setSlidesPerView(1); // Display 1 slide for screens smaller than XL
      }
    }, []);


    return (
      <div className="carousel-container relative  flex-col ">
        <div className="mb:py-10 pt-16 pb-20 scale-y-150 mb:scale-y-100 flex xl:gap-20 mb:gap-8 gap-2 mx-2 md:mx-32  mb:-mx-10 items-center ">
          <div className="carousel-buttons z-30">
            <button className=" hidden mb:block carousel-button hzoom1 cursor-pointer carousel-button-prev">
              <Image loading="lazy" alt="left-arrow" src="/left.png" height={60} width={60} />
            </button>
            <button className=" block md:hidden carousel-button hzoom1 cursor-pointer carousel-button-prev">
              <Image loading="lazy" alt="left-arrow" src="/left.png" height={32} width={32} />
            </button>
          </div>
          <Swiper
            navigation={{
              prevEl: ".carousel-button-prev",
              nextEl: ".carousel-button-next",
            }}
            pagination={{
              el: ".swiper-pagination",
              clickable: true,
            }}
            // pagination={true}
            // mousewheel={true}
            keyboard={true}
            slidesPerView={slidesPerView}
            spaceBetween={30}
            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
            // loop={true}
            className="mySwiper"
          >
            <div className="">
              <SwiperSlide className="group relative">
                <Image loading="lazy" 
                alt="carosal-Images"
                  className=" group-hover:brightness-125 "
                  src="/animate/1.gif"
                  fill
                />
              </SwiperSlide>
              <SwiperSlide className="group">
                <Image loading="lazy" alt="carosal-Images"
                  className=" group-hover:brightness-125"
                  src="/animate/2.gif"
                  fill
                />
              </SwiperSlide>
              <SwiperSlide className="group">
                <Image loading="lazy" alt="carosal-Images"
                  className=" group-hover:brightness-125"
                  src="/animate/3.gif"
                  fill
                />
              </SwiperSlide>
              <SwiperSlide className="group">
                <Image loading="lazy" alt="carosal-Images"
                  className=" group-hover:brightness-125"
                  src="/animate/4.gif"
                  fill
                />
              </SwiperSlide>
              <SwiperSlide className="group">
                <Image loading="lazy" alt="carosal-Images"
                  className=" group-hover:brightness-125"
                  src="/animate/5.gif"
                  fill
                />
              </SwiperSlide>
              <SwiperSlide className="group">
                <Image loading="lazy" alt="carosal-Images"
                  className=" group-hover:brightness-125"
                  src="/animate/6.gif"
                  fill
                />
              </SwiperSlide>
              <SwiperSlide className="group">
                <Image loading="lazy" alt="carosal-Images"
                  className=" group-hover:brightness-125"
                  src="/animate/7.gif"
                  fill
                />
              </SwiperSlide>
            </div>
          </Swiper>
          <div className="carousel-buttons z-30">
            <button className="  hidden mb:block carousel-button hzoom1 cursor-pointer carousel-button-next">
              <Image loading="lazy" alt="carosal-Images" src="/right.png" height={60} width={60} />
            </button>
            <button className=" block mb:hidden carousel-button hzoom1 cursor-pointer carousel-button-next">
              <Image loading="lazy" alt="carosal-Images" src="/right.png" height={32} width={32} />
            </button>
          </div>
        </div>
        <div className="z-40 text-center xl:pt-6 md:pt-5 pt-3 ">
          <div className="swiper-pagination"></div>
        </div>
      </div>
    );
  };

  export default CarousalElem;
