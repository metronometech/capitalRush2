"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "./caurosal.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";

const CarousalElemHomeSec3 = () => {
  return (
    <div className="carousel-container flex-col ">
      <div className="py-10  flex xl:gap-20 md:gap-8  2xl:mx-40 mb:mx-16  items-center ">
        <div className=" carousel-buttons z-30">
          <button className="hidden md:block carousel-button hzoom1 cursor-pointer carousel-button-prev">
            <Image
              alt="left-arrow"
              src="/svg/leftArrow.svg"
              height={100}
              width={100}
            />
          </button>
          <button className="block md:hidden carousel-button hzoom1 cursor-pointer carousel-button-prev">
            <Image
              alt="left-arrow"
              src="/svg/leftArrow.svg"
              height={50}
              width={50}
            />
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
          mousewheel={true}
          keyboard={true}
          slidesPerView={1}
          // spaceBetween={60}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          // loop={true}
          className="mySwiper"
        >
          <div className="">
            <SwiperSlide  className="group">
              <Image
                alt="Carosal-home-Images"
                className=" group-hover:brightness-125"
                src="/mobile.png"
                fill
              />
            </SwiperSlide>
            <SwiperSlide className="group">
              <Image
                alt="Carosal-home-Images"
                className="  group-hover:brightness-125"
                src="/mobile.png"
                fill
              />
            </SwiperSlide>
            <SwiperSlide className="group">
              <Image
                alt="Carosal-home-Images"
                className=" group-hover:brightness-125"
                src="/mobile.png"
                fill
              />
            </SwiperSlide>
            <SwiperSlide className="group">
              <Image
                alt="Carosal-home-Images"
                className=" group-hover:brightness-125"
                src="/mobile.png"
                fill
              />
            </SwiperSlide>
            <SwiperSlide className="group">
              <Image
                alt="Carosal-home-Images"
                className=" group-hover:brightness-125"
                src="/mobile.png"
                fill
              />
            </SwiperSlide>
            <SwiperSlide className="group">
              <Image
                alt="Carosal-home-Images"
                className=" group-hover:brightness-125"
                src="/mobile.png"
                fill
              />
            </SwiperSlide>
            <SwiperSlide className="group">
              <Image
                alt="Carosal-home-Images"
                className=" group-hover:brightness-125"
                src="/mobile.png"
                fill
              />
            </SwiperSlide>
          </div>
        </Swiper>
        <div className="carousel-buttons z-30">
          <button className="hidden md:block carousel-button hzoom1 cursor-pointer carousel-button-next">
            <Image
              alt="right-arrow"
              src="/svg/rightArrow.svg"
              height={100}
              width={100}
            />
          </button>
          <button className="block md:hidden carousel-button hzoom1 cursor-pointer carousel-button-next">
            <Image
              alt="right-arrow"
              src="/svg/rightArrow.svg"
              height={50}
              width={50}
            />
          </button>
        </div>
      </div>
      {/* <div className="z-40 text-center ">
        <div className="swiper-pagination"></div>
      </div> */}
    </div>
  );
};

export default CarousalElemHomeSec3;
