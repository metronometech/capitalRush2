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

  return (
    <div className="carousel-container flex-col">
      <div className="py-10 flex xl:gap-20 md:gap-8 2xl:mx-40 md:mx-16 items-center">
        <div className="carousel-buttons z-30">
          <button
            // onClick={decrement}
            className="hidden md:block carousel-button hzoom1 cursor-pointer carousel-button-prev"
          >
            <Image alt="left-arrow" src="/left.png" height={60} width={60} />
          </button>
          <button className="block md:hidden carousel-button hzoom1 cursor-pointer carousel-button-prev"></button>
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
          mousewheel={true}
          keyboard={true}
          slidesPerView={1}
          // spaceBetween={60}
          modules={[Navigation, Pagination, Mousewheel, Keyboard]}
          loop={true}
          onSlidePrevTransitionStart={decrement} // Call when sliding to the left
          onSlideNextTransitionStart={increment} // Call when sliding to the right
          className="mySwiper"
        >
          <div className="">
            {/* {JSON.stringify(swiper.activeIndex)} */}
            <SwiperSlide className="group">
              <Image
                alt="Carosal-home-Images"
                className="group-hover:brightness-125"
                // src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExbG1ieGVkMW01ZDhkejJ0M2R1NmJrY2xpMXB5dzhrMGNreTRuc2cyZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/Lnph2AItZ9f0HIXiPg/giphy.gif"
                src="/slider/a1.gif"
                fill
              />
            </SwiperSlide>
            <SwiperSlide className="group">
              <Image
                alt="Carosal-home-Images"
                className="group-hover:brightness-125"
                src="/slider/a2.gif"
                // src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMDQxdW43cmpqMHI5YWgxZWg2eTlqemY5aXV5Z2g1OGcwdm56OXczZSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/mEh2ZIojtRSqD27Llz/giphy.gif"
                fill
              />
            </SwiperSlide>
            <SwiperSlide className="group">
              <Image
                alt="Carosal-home-Images"
                className="group-hover:brightness-125"
                src="/slider/a3.gif"
                // src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExMXI0dWh0MXp4MW5lMnJreGI4c25qMDd5bzA4bGRvZHp6YjFiaHcwNiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/I7S0KA5RQL3Ua8mmbN/giphy.gif"
                fill
              />
            </SwiperSlide>
          </div>
        </Swiper>
        <div className="carousel-buttons z-30">
          <button
            // onClick={increment}
            className="hidden md:block carousel-button hzoom1 cursor-pointer carousel-button-next"
          >
            <Image alt="right-arrow" src="/right.png" height={60} width={60} />
          </button>
          <button
            ref={nextButtonRef}
            className="block md:hidden carousel-button hzoom1 cursor-pointer carousel-button-next"
          ></button>
        </div>
      </div>
      <div className="-mt-16 mb:-mt-12 relative">
        <p className="text-center text-[40px] text-gray-100">
          {move % 3 === 0 && (
            <span>
              <span className="text-white">.</span> . .
            </span>
          )}
          {move % 3 === 1 && (
            <span>
              <span className="text-white">. .</span> .
            </span>
          )}
          {move % 3 === 2 && (
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






{/* <SwiperSlide className="group">
              <Image
                alt="Carosal-home-Images"
                className="group-hover:brightness-125"
                src="/slider/a4.gif"
                // src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExdWpzY214MzRuMGFiNzBkOGZ4Z2N4MG5zb3IyaTJqNXZybGdlZ2RzaCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/PngjPTcx0a2cawa0cg/giphy.gif"
                fill
              />
            </SwiperSlide>
            <SwiperSlide className="group">
              <Image
                alt="Carosal-home-Images"
                className="group-hover:brightness-125"
                src="/slider/a5.gif"
                // src="https://media.giphy.com/media/v1.Y2lkPTc5MGI3NjExZ2hhcDJjeXl3a3ViNG13NTJudWxqMWhsa29zMG80c3gwNjllN2cydSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/oAwB5FvehdEBXi2sIc/giphy.gif"
                fill
              />
            </SwiperSlide>
            <SwiperSlide className="group">
              <Image
                alt="Carosal-home-Images"
                className="group-hover:brightness-125"
                src="/slider/a6.gif"
                fill
              />
            </SwiperSlide>
            <SwiperSlide className="group">
              <Image
                alt="Carosal-home-Images"
                className="group-hover:brightness-125"
                src="/slider/a7.gif"
                fill
              />
            </SwiperSlide>
            <SwiperSlide className="group">
              <Image
                alt="Carosal-home-Images"
                className="group-hover:brightness-125"
                src="/slider/a8.gif"
                fill
              />
            </SwiperSlide> */}