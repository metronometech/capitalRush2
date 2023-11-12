"use client";
import Image from "next/image";
import React, { useState } from "react";
import BlogElem from "../common/BlogElem";
import Faq from "../common/Faq";
import Faq2 from "../common/Faq2";
import Footer from "../common/FooterElem";
import Link from "next/link";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import Popup from "../common/Popup";
import FaqImport from "../helper/FaqImport";
import Blogs from "../helper/Blogs";

const faqs = FaqImport;
const blogPosts = Blogs;

const Blog2 = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const [link, updatelink] = useState("/");

  function setAppStoreLink() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check for iOS (iPhone, iPad, iPod)
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      // document.getElementById('appStoreLink').href = 'https://apps.apple.com/us/app/your-app-name/id1234567890'; // Replace with your actual App Store link
      updatelink("https://apps.apple.com/in/app/capital-rush/id1615705403");
    }
    // Check for Android
    else if (/android/i.test(userAgent)) {
      // document.getElementById('playStoreLink').href = 'https://play.google.com/store/apps/details?id=com.yourapp.package'; // Replace with your actual Play Store link
      updatelink(
        "https://play.google.com/store/apps/details?id=com.metronome.capital"
      );
    }
  }

  useEffect(() => {
    AOS.init();
    setAppStoreLink();
  }, []);

  const options = [
    "Personal Finance",
    " Investing Essentials/Guide",
    "Investing & Funding",
    "Revenue & Growth",
  ];

  const [nav, updateNav] = useState(1);
  const [postData, setPostData] = useState(blogPosts[0]);
  function handleNav(navNo) {
    updateNav(navNo);
  }

  useEffect(() => {
    const tempPost = blogPosts[nav - 1];
    setPostData(tempPost);
    console.log("PostsData:", postData);
    // console.log("PostsData:",nav);
  }, [nav]);

  return (
    <div>
      <div className=" flex flex-col items-center justify-center">
        <ul
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          className="flex flex-col md:flex-row text-center md:mt-12 -mt-20 z-40 list-none gap-8 my-32 text-white"
        >
          <li
            onClick={() => handleNav(1)}
            className={`cursor-pointer font-bold leading-5 ${
              nav === 1 ? "nav_active" : ""
            }`}
          >
            {options[0]}
          </li>
          <li
            onClick={() => handleNav(2)}
            className={`cursor-pointer font-bold leading-5 ${
              nav === 2 ? "nav_active" : ""
            }`}
          >
            {options[1]}
          </li>
          <li
            onClick={() => handleNav(3)}
            className={`cursor-pointer font-bold leading-5 ${
              nav === 3 ? "nav_active" : ""
            }`}
          >
            {options[2]}
          </li>
          <li
            onClick={() => handleNav(4)}
            className={`cursor-pointer font-bold leading-5 ${
              nav === 4 ? "nav_active" : ""
            }`}
          >
            {options[3]}
          </li>
        </ul>
      </div>

      {/* Large Blogggg */}
      <div className="">
        <div
          data-aos="fade-up"
          data-aos-delay="200"
          data-aos-duration="1000"
          className="flex flex-col mb:flex-row mb:ml-32 "
        >
          <div className="hidden 2xl:block">
            <Image
              src={
                blogPosts[nav - 1][0].thumbnail
                  ? blogPosts[nav - 1][0].thumbnail
                  : "/frame.png"
              }
              alt="stockPic"
              height={570}
              width={940}
            />
          </div>
          <div className="hidden mb:block 2xl:hidden">
            <Image
              src={
                blogPosts[nav - 1][0].thumbnail
                  ? blogPosts[nav - 1][0].thumbnail
                  : "/frame.png"
              }
              alt="stockPic"
              height={440}
              width={660}
              // layout="responsive"
            />
          </div>
          <div className=" text-center block mb:hidden">
            <Image
              src={
                blogPosts[nav - 1][0].thumbnail
                  ? blogPosts[nav - 1][0].thumbnail
                  : "/frame.png"
              }
              alt="stockPic"
              height={220}
              width={330}
            />
          </div>

          {/* Your link content */}

          <Link
            href={`/blog/${nav}/${1}`}
            className="no-underline"
            target="blank"
          >
            <div
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-duration="1000"
              className="flex flex-col text-center mb:mt-10 mb:justify-center mb:text-left mb:max-w-[354px] w-full mb:pl-14"
            >
              <p className="  text-[16px] font-bold leading-5 text-[#FAF51C]">
                {options[nav - 1]}
              </p>
              <h2 className=" font-poppins  -mt-1 text-[32px] font-bold leading-10">
                {blogPosts[nav - 1][0].blog_heading}
              </h2>
              <p className=" -mt-1 text-[16px] text-[#B3B3B3] font-quicksand font-normal leading-6">
                {blogPosts[nav - 1][0].blog_subheading}
              </p>
              <div className="flex self-center mb:self-auto">
                <Image
                  src={blogPosts[nav - 1][0].profile}
                  height={46}
                  width={46}
                  className=" rounded-full"
                  alt="profilePic"
                />
                <div className="-mt-2  ml-4">
                  <h2 className=" text-[12px] ">
                    {blogPosts[nav - 1][0].name}
                  </h2>
                  <p className=" text-[12px] text-[#A0A0A0]">
                    {blogPosts[nav - 1][0].date} •{" "}
                    {blogPosts[nav - 1][0].readTime}
                  </p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>
      <div className="mb-20">
        <div className="flex flex-col gap-6 mb:gap-0 mb:flex-row justify-center mt-20 mb:mx-28 mx-2">
          <div className="mb:grid mb:grid-cols-12 mb:gap-6">
            {blogPosts[nav - 1].map(
              (item, index) =>
                // Skip rendering when Sno is 1
                item.Sno !== 1 && (
                  <div
                    key={index}
                    className={` ${
                      (blogPosts[nav - 1].length - 1) % 3 === 2 &&
                      blogPosts[nav - 1].length - 1 - index <= 1
                        ? "col-span-6 mx-auto "
                        : "col-span-4"
                    }  `}
                  >
                    <Link
                      data-aos="fade-up"
                      data-aos-delay="100"
                      data-aos-duration="600"
                      href={`/blog/${nav}/${item.Sno}`}
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

        {/* <Link
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="850"
            href={`/blog/${encodeURIComponent(options[nav - 1])}`}
            className=" no-underline"
            target="blank"
          >
            <BlogElem
              type={1}
              title={data[1].title}
              section={options[nav - 1]}
              value={data[1].content}
            />
          </Link>
          <Link
            data-aos="fade-up"
            data-aos-delay="100"
            data-aos-duration="1050"
            href={`/blog/${encodeURIComponent(options[nav - 1])}`}
            className=" no-underline"
            target="blank"
          >
            <BlogElem
              type={1}
              title={data[2].title}
              section={options[nav - 1]}
              value={data[2].content}
            />
          </Link> */}
      </div>
      {/* <div className="flex flex-col mb:flex-row gap-6 mb:gap-0 justify-center mt-20 mb:mx-28 mx-2">
          <Link
          data-aos="fade-up" data-aos-delay="225"  data-aos-duration="1000"
            href={`/blog/${encodeURIComponent(options[nav - 1])}`}
            className=" no-underline"
            target="blank"
          >
            <BlogElem
              type={2}
              title={data[3].title}
              section={options[nav - 1]}
              value={data[3].content}
            />
          </Link>
          <Link
          data-aos="fade-up" data-aos-delay="250"  data-aos-duration="1000"
            href={`/blog/${encodeURIComponent(options[nav - 1])}`}
            className=" no-underline"
            target="blank"
          >
            <BlogElem
              type={2}
              title={data[4].title}
              section={options[nav - 1]}
              value={data[4].content}
            />
          </Link>
        </div> */}
      <div>
        <div
          data-aos="fade-up"
          data-aos-delay="150"
          data-aos-duration="1000"
          className=" py-10 pl-2 mb:pl-24  mb:mx-auto mb:justify-center   max-w-screen-xl "
        >
          <h1 className="text-white text-[48px] ml-2 font-semibold mb-0">
            FAQ
          </h1>
          <div className="mt-5">
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
        data-aos-duration="1000"
        className=" hidden mb:block  text-center mt-20 pb-6"
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
              onClick={openModal}
              className="transform hover:scale-105 transition-transform duration-300 py-2 px-8 rounded-l-[400px] rounded-r-[400px] bg-gradient-to-r from-yellow-200 via-yellow-300 to-red-500 cursor-pointer text-[16px]  h-fit w-fit my-auto font-bold leading-normal font-poppins text-white hover:text-yellow-300;
 "
            >
              {" "}
              <span className="button-text-shadow text-[28px]">JOIN NOW</span>
            </button>
          </div>
        </div>
      </div>

      <div className="text-center mt-20 block mb:hidden">
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
            <Link href={link} className=" no-underline">
              <button
                className="transform hover:scale-105 transition-transform duration-300 py-2 px-8 rounded-l-[400px] rounded-r-[400px] bg-gradient-to-r from-yellow-200 via-yellow-300 to-red-500 cursor-pointer text-[16px]  h-fit w-fit my-auto font-bold leading-normal font-poppins text-white hover:text-yellow-300;
 "
              >
                {" "}
                <span className="button-text-shadow text-18px]">JOIN NOW</span>
              </button>
            </Link>
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

export default Blog2;

{
  /* <div className="flex justify-between mx-24">
  <div className="flex flex-col">
    <div>
      <div className="flex  mt-2">
        <Image
          src="/profile2.png"
          height={75}
          width={75}
          alt="profilePic"
        />
        <div className="-mt-4 ml-5">
          <h2 className=" text-[24px]">
            by 
            <Link href="https://woodpecker.co/blog/author/jj/" className=" no-underline">
            <span className=" pl-2 bg-gradient-to-r from-yellow-300 whitespace-nowrap  to-red-400 text-transparent bg-clip-text ">Joanna Jachuła </span>
            </Link>
          </h2>
          <p className=" text-[20px] -mt-3 text-[#A0A0A0]">
            Updated: June 22, 2023
          </p>
        </div>
      </div>
    </div>
    <div>
      <h2 className=" mt-10 text-[16px]">TABLE OF CONTENTS</h2>
      <ul className="flex flex-col gap-5 -ml-3">
      <Link target="blank" className=" no-underline" href="https://woodpecker.co/blog/check-technical-settings-client-account/#-key-technical-settings-you-need-to-check">
        <li className="text-[16px] text-[#B3B3B3]">3 key technical settings you need to check</li>
      </Link>
      <Link target="blank" className=" no-underline" href="https://woodpecker.co/blog/check-technical-settings-client-account/#additional-things-to-keep-in-mind">
        <li className="text-[16px] text-[#B3B3B3]">Additional things to keep in mind</li>
      </Link>
      <Link target="blank" className=" no-underline" href="https://woodpecker.co/blog/check-technical-settings-client-account/#wrap-up">
        <li className="text-[16px] text-[#B3B3B3]">Wrap Up</li>
      </Link>
      </ul>
    </div>
  </div>
  <div className="mx-20 w-[680px] xl:w-full xl:ml-40 xl:mr-40">
    <p className=" text-[#B3B3B3] mt-20" >If your email doesn’t reach the inbox of the recipient, your campaign will be doomed to fail. No prospect will interact with your content, no matter how great it is. That’s why you need to check three essential technical settings before scheduling the first shipment.</p>
    <h1 className="bg-gradient-to-t from-[#df853c] font-poppins text-[40px] leading-[52px]  to-[#FAF51C] text-transparent bg-clip-text">3 key technical settings you <br/> need to check</h1>
    <h2 className="bg-gradient-to-t from-[#df853c] font-poppins text-[32px] leading-[52px]  to-[#FAF51C] text-transparent bg-clip-text">1. SPF/DKIM configuration</h2>
    <p className=" text-[#B3B3B3] mt-1" >SPF (Sender Policy Framework) DNS records list servers authorized to deliver emails from a domain. It verifies that your domain’s mail servers and IP addresses send messages. <br/> <br/> DKIM, on the other hand, verifies a company’s email and helps identify phony email addresses, fights spam, and prevents spoofing and identity theft. <br/> You need to make sure that both are correctly configured to avoid any shipment issues.</p>
    
    <h2 className="bg-gradient-to-t from-[#df853c] font-poppins text-[32px] leading-[52px]  to-[#FAF51C] text-transparent bg-clip-text">2. Domain age</h2>
    <p className=" text-[#B3B3B3] mt-1" >Sending out multiple emails from a relatively young domain is risky, as the messages may look suspicious to providers – and go straight to spam. Check the age of your client’s domain to understand what you’re working with and adjust your course of action.</p>
    
    <h2 className="bg-gradient-to-t from-[#df853c] font-poppins text-[32px] leading-[52px]  to-[#FAF51C] text-transparent bg-clip-text">3. Check if the client is blacklisted</h2>
    <p className=" text-[#B3B3B3] mt-1" >This one is a must-have! Finally, make sure that your client’s domain isn’t blacklisted anywhere. If you discover that it is, there are ways to get the domain off the blacklist – and accomplishing that will have a huge impact on your client (and it’s also bound to impress your client!).</p>
    
    <h1 className="bg-gradient-to-t from-[#df853c] font-poppins text-[40px] leading-[52px]  to-[#FAF51C] text-transparent bg-clip-text mt-8">Additional things to keep in <br/> mind</h1>
    <h2 className="bg-gradient-to-t from-[#df853c] font-poppins text-[32px] leading-[52px]  to-[#FAF51C] text-transparent bg-clip-text">1. Set the right “from” name</h2>
    <p className=" text-[#B3B3B3] mt-1" >Where does the email come from? The right “from” name can make an email seem more real if it shows that it was written by a real person.
Adding a suitable picture is also important – the recipient might click on the sender’s profile, and if they see a stock photo, they’ll quickly move this email to spam (which, obviously, will have catastrophic consequences for your entire campaign).</p>
    
    <h2 className="bg-gradient-to-t from-[#df853c] font-poppins text-[32px] leading-[52px]  to-[#FAF51C] text-transparent bg-clip-text">2. Polish your email signature</h2>
    <p className=" text-[#B3B3B3] mt-1" >The signature needs to be simple and clean. Avoid including too many links. Add a link to the website and a selection of the client’s social media channels. Make sure that the signature gives the impression that the email was sent by a real person.</p>
    
    <h2 className="bg-gradient-to-t from-[#df853c] font-poppins text-[32px] leading-[52px]  to-[#FAF51C] text-transparent bg-clip-text">3. Start small</h2>
    <p className=" text-[#B3B3B3] mt-1" >At the beginning of your campaign, send just a few messages per day to check if there are any problems or if your emails are landing in the spam folder. If you start getting responses, you’re ready to increase the sending volume.</p>
    
  </div>
  </div> */
}
