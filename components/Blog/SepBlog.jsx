"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import BlogElem from "../common/BlogElem";
import Faq from "../common/Faq";
import Faq2 from "../common/Faq2";
import Footer from "../common/FooterElem";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import Popup from "../common/Popup";
import FaqImport from "../helper/FaqImport";

// const data = [
//   //Data to be fetched from API and replaced
//   {
//     title: "Introduction Email Sample: Connect and Impress with Ease",
//     content:
//       "Learning how to build rapport is important for any business that wants to have a genuine connection with its prospects. Greater rapport means more conversions.",
//   },
//   {
//     title: "Memorable Sign-offs: How to End an Email with Impact",
//     content:
//       "Learning how to build rapport is important for any business that wants to have a genuine connection with its prospects. Greater rapport means more conversions.",
//   },
//   {
//     title: "The Complete Guide To Cold Email Prospecting for Sales",
//     content:
//       "Learning how to build rapport is important for any business that wants to have a genuine connection with its prospects. Greater rapport means more conversions.",
//   },
//   {
//     title: "13 Powerful Ways To Generate Real Estate Sales Leads",
//     content:
//       "Learning how to build rapport is important for any business that wants to have a genuine connection with its prospects. Greater rapport means more conversions.",
//   },
//   {
//     title: "13 Powerful Ways To Generate Real Estate Sales Leads",
//     content:
//       "Learning how to build rapport is important for any business that wants to have a genuine connection with its prospects. Greater rapport means more conversions.",
//   },
// ];

const faqs = FaqImport;

const SepBlog = ({ data, fullData }) => {
  console.log(data);
  console.log(fullData);
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  useEffect(() => {
    AOS.init();
  }, []);

  const options = [
    "Personal Finance",
    " Investing Essentials/Guide",
    "Investing & Funding",
    "Revenue & Growth",
  ];

  const [nav, updateNav] = useState(null);
  function handleNav(navNo) {
    updateNav(navNo);
  }

  // function divideSentence(sentence) {
  //   if (!sentence || typeof sentence !== "string") {
  //     return ["", "", ""];
  //   }

  //   const words = sentence.split(" ");
  //   const totalWords = words.length;

  //   // Calculate the target number of words for each part
  //   const targetWords = Math.ceil(totalWords / 3);

  //   // Find the indices where the breaks between parts should occur
  //   const breakIndex1 = targetWords;
  //   const breakIndex2 = targetWords * 2;

  //   // Use slice to get each part
  //   const part1 = words.slice(0, breakIndex1).join(" ");
  //   const part2 = words.slice(breakIndex1, breakIndex2).join(" ");
  //   const part3 = words.slice(breakIndex2).join(" ");

  //   return [part1, part2, part3];
  // }

  // // Example usage
  // const dividedParts = divideSentence(data.blog_heading);

  // console.log(dividedParts);

  // useEffect(() => {
  //   options.map((elem, ind) => {
  //     if (elem === tab) {
  //       updateNav(ind + 1);
  //     }
  //   });
  // }, []);

  function handleScroll(e, targetId) {
    e.preventDefault();
  
    const targetElement = document.getElementById(targetId.toString());
  
    if (targetElement) {
      const offset = 20; // Adjust the offset as needed
      const bodyRect = document.body.getBoundingClientRect().top;
      const targetRect = targetElement.getBoundingClientRect().top;
      const offsetPosition = targetRect - bodyRect - offset;
  
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  }

  return (
    <div>
      <div className=" z-40 -mt-16 flex flex-col items-center justify-center">
        {/* <ul className="hidden mb:flex z-40 relative top-16 mb:flex-row  list-none gap-10  text-white">
          <Link href="/blog?prop=1" className=" no-underline">
            <li
              onClick={() => handleNav(1)}
              className={`cursor-pointer font-bold leading-5 ${
                nav === 1 ? "nav_active" : ""
              }`}
            >
              {options[0]}
            </li>
          </Link>
          <Link href="/blog?prop=2" className=" no-underline">
            <li
              onClick={() => handleNav(2)}
              className={`cursor-pointer font-bold leading-5 ${
                nav === 2 ? "nav_active" : ""
              }`}
            >
              {options[1]}
            </li>
          </Link>
          <Link href="/blog?prop=3" className=" no-underline">
            <li
              onClick={() => handleNav(3)}
              className={`cursor-pointer font-bold leading-5 ${
                nav === 3 ? "nav_active" : ""
              }`}
            >
              {options[2]}
            </li>
          </Link>
          <Link href="/blog?prop=4" className=" no-underline">
            <li
              onClick={() => handleNav(4)}
              className={`cursor-pointer font-bold leading-5 ${
                nav === 4 ? "nav_active" : ""
              }`}
            >
              {options[3]}
            </li>
          </Link>
        </ul> */}
      </div>
      <div
        data-aos="fade-up"
        data-aos-delay="150"
        data-aos-duration="1200"
        className=" flex h-[400px] justify-center items-center mb-10"
      >
        <h1
          data-aos="fade-down"
          data-aos-delay="150"
          data-aos-duration="1200"
          className=" hidden mb:block font-poppins w-[1160px] text-center text-[60px] pl-16 2xl:pl-24 font-bold z-40 flex-shrink-0 "
        >
          {data.blog_heading}
          {/* {dividedParts[0]} <br />
          <span className="font-poppins bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent">
            {" "}
            {dividedParts[1]}{" "}
          </span>{" "}
          <br /> {dividedParts[2]} */}
        </h1>
        {/* <Image
          className="hidden mb:block z-40  ml-[2vw] mt-36 pr-20 2xl:pr-40 max-h-[320px] max-w-[545px] "
          src={data.thumbnail ? data.thumbnail : "/frame.png"}
          height={310}
          width={540}
          layout="responsive"
        /> */}

        <div className=" block mb:hidden h-[320px] w-full"></div>
      </div>
      {/* <div className="flex justify-center">
        <ul className="mb:hidden flex z-40 relative bottom-[270px] text-center  w-fit flex-col list-none gap-5  text-white">
          <Link href="/blog" className=" no-underline">
            <li
              onClick={() => handleNav(1)}
              className={`cursor-pointer font-bold leading-5 ${
                nav === 1 ? "nav_active" : ""
              }`}
            >
              {options[0]}
            </li>
          </Link>
          <Link href="/blog" className=" no-underline">
            <li
              onClick={() => handleNav(2)}
              className={`cursor-pointer font-bold leading-5 ${
                nav === 2 ? "nav_active" : ""
              }`}
            >
              {options[1]}
            </li>
          </Link>
          <Link href="/blog" className=" no-underline">
            <li
              onClick={() => handleNav(3)}
              className={`cursor-pointer font-bold leading-5 ${
                nav === 3 ? "nav_active" : ""
              }`}
            >
              {options[2]}
            </li>
          </Link>
          <Link href="/blog" className=" no-underline">
            <li
              onClick={() => handleNav(4)}
              className={`cursor-pointer font-bold leading-5 ${
                nav === 4 ? "nav_active" : ""
              }`}
            >
              {options[3]}
            </li>
          </Link>
        </ul>
      </div> */}

      <div className="flex mb:justify-between mb:mx-24">
        <div className="hidden mb:flex flex-col">
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="800">
            <div className="flex  mt-2">
              <Image
                src={data.profile}
                className="rounded-full"
                height={75}
                width={75}
                alt="profilePic"
              />
              <div className="-mt-4 ml-5">
                <h2 className=" text-[24px]">
                  by
                  <Link
                    href={data.nameLink ? data.nameLink : ""}
                    className=" no-underline"
                  >
                    <span className=" pl-2 bg-gradient-to-r from-yellow-300 whitespace-nowrap  to-red-400 text-transparent bg-clip-text ">
                      {data.name}{" "}
                    </span>
                  </Link>
                </h2>
                <p className=" text-[20px] whitespace-nowrap -mt-3 text-[#A0A0A0]">
                  Updated: {data.date}
                </p>
              </div>
            </div>
          </div>
          <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="900">
            <h2 className=" mt-10 text-[16px]">TABLE OF CONTENTS</h2>
            <ul className="flex flex-col gap-5 -ml-3">
              {data.tableContent.map((elem, ind) => {
                return (
                  <div key={ind + 150}  className="animate-fadeIn cursor-pointer">
                    {/* <Link
                      target="blank"
                      className=" no-underline"
                      href={elem.value ? elem.value : ""}
                    > */}
                    {/* {JSON.stringify(ind+1)} */}
                    <a href={`#${ind + 1}`} onClick={(e) => handleScroll(e, ind + 1)} className="no-underline">
                      <li className="text-[16px] text-[#B3B3B3]">{elem.key}</li>
                    </a>
                    {/* </Link> */}
                  </div>
                );
              })}
            </ul>
          </div>
        </div>
        <div className="mb:mx-20 mx-2 -mt-32 mb:mt-0 mb:w-[680px] w-full xl:w-full xl:ml-40 xl:mr-40">
          <h1
            data-aos="fade-down"
            data-aos-delay="150"
            data-aos-duration="1200"
            className="  mb:hidden -mt-[240px] font-poppins w-[316px] text-center text-[40px] mx-auto font-semibold z-40 flex-shrink-0 "
          >
            {data.blog_heading}
          </h1>
          <p
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
            className=" text-[#B3B3B3] mb:mt-20 text-[16px]"
          >
            {data.notice}
          </p>
          {data.data.map((element, index) => {
            return (
              <div key={index + 100}  id={index + 1}>
                {/* {JSON.stringify(index+1)} */}
                <h1
                  data-aos="fade-up"
                  data-aos-delay="200"
                  data-aos-duration="800"
                  className="bg-gradient-to-t from-[#df853c] font-poppins text-[22px] mb:text-[40px] mb:leading-[52px]  to-[#FAF51C] text-transparent bg-clip-text"
                >
                  {element.heading.split(" ").slice(0, 4).join(" ")} <br />
                  {element.heading.split(" ").slice(4).join(" ")}
                </h1>
                {element.keypoints.map((elem, ind) => {
                  return (
                    <div key={ind}>
                      <h2
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="800"
                        className="bg-gradient-to-t from-[#df853c] font-poppins text-[18px] mb:text-[32px] mb:leading-[52px]  to-[#FAF51C] text-transparent bg-clip-text"
                      >
                        {elem.heading}
                      </h2>
                      <p
                        data-aos="fade-up"
                        data-aos-delay="200"
                        data-aos-duration="800"
                        className=" text-[#B3B3B3] mt-1"
                      >
                        {elem.details}
                      </p>
                    </div>
                  );
                })}
                <div>
                  {element.imageLink === "" ? (
                    ""
                  ) : (
                    <div
                      data-aos="fade-up"
                      data-aos-delay="200"
                      data-aos-duration="800"
                    >
                      <div className=" relative w-full h-[400px] 2xl:h-[550px] 3xl:h-[600px]">
                        <Image
                          className="hidden mb:block z-40 "
                          src={
                            element.imageLink ? element.imageLink : "/frame.png"
                          }
                          // height={310}
                          // width={540}
                          fill
                        />
                      </div>
                      <Image
                        className=" mb:hidden z-40  "
                        src={
                          element.imageLink ? element.imageLink : "/frame.png"
                        }
                        height={310}
                        width={310}
                        layout="responsive"
                      />
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
      <div>
        <div className="mb-20">
          <div className="flex flex-col gap-6 mb:gap-0 mb:flex-row justify-center mt-20 mb:mx-28 mx-2">
            <div className="mb:grid mb:grid-cols-12 mb:gap-6">
              {fullData.map(
                (item, index) =>
                  item.Sno !== data.Sno &&
                  (data.Sno <= 5 ? index <= 5 : index <= 4) && (
                    <div
                      key={index}
                      className={` ${
                        data.Sno <= 5 && index >= 4
                          ? "col-span-6 mx-auto "
                          : data.Sno >= 5
                          ? index < 3
                            ? "col-span-4"
                            : "col-span-6 mx-auto "
                          : "col-span-4"
                      }  `}
                    >
                      <Link
                        data-aos="fade-up"
                        data-aos-delay="100"
                        data-aos-duration="600"
                        href={`/blog/${item.tagid}/${item.Sno}`}
                        className="no-underline"
                        target="blank"
                      >
                        <BlogElem
                          data={item}
                          type={1}
                          section={options[nav - 1]}
                        />
                      </Link>
                    </div>
                  )
              )}
            </div>
          </div>
        </div>

        <div className=" py-10 text-canter mx-auto max-w-screen-xl pl-2 mb:pl-24 ">
          <h1
            data-aos="fade-down"
            data-aos-delay="200"
            data-aos-duration="800"
            className="text-white text-[24px] mb:text-[48px] ml-2 font-semibold mb-0"
          >
            FAQ
          </h1>
          <div
            data-aos="fade-up"
            data-aos-delay="200"
            data-aos-duration="800"
            className="mt-5"
          >
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

      <div
        data-aos="fade-up"
        data-aos-delay="200"
        data-aos-duration="800"
        className="  text-center mt-20 hidden mb:block"
      >
        <div className="  ml-32 h-[800px]">
          <div className="  relative ml-4 top-[240px] left-[45px] text-left mr-20">
            <h2 className=" leading-tight w-[600px] mb-8  text-white text-[48px] ">
              Want to learn <br /> Trading with fun
            </h2>
            <p className="  w-[530px] text-white -mt-5 font-quicksand leading-normal text-[20px]">
              Boost trading skills with Capital Rush - where learning transforms
              into an exhilarating game.
            </p>
          </div>
          <div className=" rounded-l-xl rounded-r-xl bg-gradient-to-br from-purple-600 via-purple-900 to-indigo-900 w-[88%] h-[445px] "></div>
          <Image
            alt="Home-section3-image"
            src="/mobile2.png"
            className=" relative bottom-[480px] ml-[45%] z-40"
            height={480}
            width={300}
          />
          <div className=" relative bottom-[640px] text-left  ml-16">
            <Popup isOpen={isModalOpen} onClose={closeModal} />

            <button
              className="transform hover:scale-105 transition-transform duration-300 py-2 px-8 rounded-l-[400px] rounded-r-[400px] bg-gradient-to-r from-yellow-200 via-yellow-300 to-red-500 cursor-pointer text-[16px]  h-fit w-fit my-auto font-bold leading-normal font-poppins text-white hover:text-yellow-300;
 "
              onClick={openModal}
            >
              {" "}
              <span className="button-text-shadow text-[28px]">JOIN NOW</span>
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mt-20 block mb:hidden ">
        <div className=" flex flex-col bg-gradient-to-br from-purple-600 via-purple-900 to-indigo-900">
          <div className="text-center ">
            <h2 className=" leading-tight  mb-8  text-white text-[32px] ">
              Want to learn <br /> Trading with fun
            </h2>
            <p className="  text-white -mt-5 font-quicksand leading-normal text-[14px]">
              Boost trading skills with Capital Rush - where learning transforms
              into an exhilarating game.
            </p>
          </div>
          {/* <div className="rounded-l-xl rounded-r-xl bg-gradient-to-br from-purple-600 via-purple-900 to-indigo-900 w-[88%] h-[445px]"></div> */}
          <div className="z-40 ">
            <button
              className="transform hover:scale-105 transition-transform duration-300 py-2 px-8 rounded-l-[400px] rounded-r-[400px] bg-gradient-to-r from-yellow-200 via-yellow-300 to-red-500 cursor-pointer text-[16px]  h-fit w-fit my-auto font-bold leading-normal font-poppins text-white hover:text-yellow-300;
 "
            >
              {" "}
              <span className="button-text-shadow text-18px]">JOIN NOW</span>
            </button>
          </div>
          <Image
            alt="Home-section3-image"
            src="/mobile2.png"
            className=" self-center pt-5"
            height={368}
            width={232}
          />
        </div>
      </div>

      <div className="">
        <Footer />
        {/* <div className="relative w-full h-40 bottom-[400px] bg-[#080612]"></div> */}
      </div>
    </div>
  );
};

export default SepBlog;
