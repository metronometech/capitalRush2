import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css/bundle";
import "./caurosal3.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper/modules";
import Image from "next/image";

const CarousalElemHomeSec3 = () => {
  const nextButtonRef = useRef(null);
  const [move, updateMove] = useState(300);
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);

  function decrement() {
    updateMove((prevMove) => prevMove - 1);
  }

  function increment() {
    updateMove((prevMove) => prevMove + 1);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      if (nextButtonRef.current) {
        nextButtonRef.current.click();
        updateMove((prevMove) => prevMove + 1);
      }
    }, 4000);

    return () => clearInterval(interval); // Clear the interval on component unmount
  }, []);

  return (
    <div className="carousel-container flex-col">
      <div className="py-10 flex xl:gap-20 md:gap-8 2xl:mx-40 md:mx-16 items-center">
        <div className="carousel-buttons z-30">
          <button
            onClick={decrement}
            className="hidden md:block carousel-button hzoom1 cursor-pointer carousel-button-prev"
          >
            <Image alt="left-arrow" src="/left.png" height={60} width={60} />
          </button>
          <button className="block md:hidden carousel-button hzoom1 cursor-pointer carousel-button-prev">
            {/* <Image
              alt="left-arrow"
              src="/left.png"
              height={40}
              width={40}
            /> */}
          </button>
        </div>
        <Swiper
          onSlideChange={(swiper) => {
            setCurrentSlideIndex(swiper.activeIndex);
          }}
          navigation={{
            prevEl: ".carousel-button-prev",
            nextEl: ".carousel-button-next",
          }}
          pagination={{
            el: ".swiper-pagination",
            clickable: true,
          }}
          mousewheel={true}
          keyboard={true}
          slidesPerView={1}
          // spaceBetween={60}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          loop={true}
          className="mySwiper"
        >
          <div className="">
            <SwiperSlide className="group">
              <Image
                alt="Carosal-home-Images"
                className="group-hover:brightness-125"
                src="/mobile.png"
                fill
              />
            </SwiperSlide>
            <SwiperSlide className="group">
              <Image
                alt="Carosal-home-Images"
                className="group-hover:brightness-125"
                src="/mobile1.png"
                fill
              />
            </SwiperSlide>
            <SwiperSlide className="group">
              <Image
                alt="Carosal-home-Images"
                className="group-hover:brightness-125"
                src="/mobile3.png"
                fill
              />
            </SwiperSlide>
          </div>
        </Swiper>
        <div className="carousel-buttons z-30">
          <button
            onClick={increment}
            className="hidden md:block carousel-button hzoom1 cursor-pointer carousel-button-next"
          >
            <Image alt="right-arrow" src="/right.png" height={60} width={60} />
          </button>
          <button
            ref={nextButtonRef}
            className="block md:hidden carousel-button hzoom1 cursor-pointer carousel-button-next"
          >
            {/* <Image
              alt="right-arrow"
              src="/right.png"
              height={40}
              width={40}
            /> */}
          </button>
        </div>
      </div>
      <div className="-mt-16 mb:-mt-12 relative">
        <p className="text-center text-[40px] text-gray-100">
          {currentSlideIndex % 3 === 0 && (
            <span>
              <span className="text-white">.</span> . .
            </span>
          )}
          {currentSlideIndex % 3 === 1 && (
            <span>
              <span className="text-white">. .</span> .
            </span>
          )}
          {currentSlideIndex % 3 === 2 && (
            <span>
              <span className="text-white">. . .</span>
            </span>
          )}
        </p>
      </div>
    </div>
  );
};

export default CarousalElemHomeSec3;
