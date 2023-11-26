"use client"
import React, { useEffect } from "react";
import Image from "next/image";

const BlogElem = ({ data, type, section }) => {

  useEffect(() => {
    const blogElem = localStorage.getItem("blogElem") !== "false";
    // console.log(blogElem)
    // if(blogElem){
    //   setTimeout(() => {
    //     localStorage.clear();
    //   }, 360);
    // }

    if (blogElem) {
      localStorage.setItem("blogElem", "false");
      window.location.reload();
    }
  });

  console.log(data);

  return (
   typeof data !=="undefined" && <div className="flex flex-col md:mx-4 mx-0 my-2">
      <div className="w-full relative hidden mb:block">
        <Image
          src={data.thumbnail ? data.thumbnail : "/frame.png"}
          alt="stockPic"
          width={800}
          height={100}
          layout="responsive"
        />
      </div>
      <div className="w-full text-center  block md:hidden">
        <Image
          src={data.thumbnail ? data.thumbnail : "/frame.png"}
          alt="stockPic"
          width={345}
          height={205}
        />
      </div>
      <div className="flex flex-col text-center mb:text-justify mr-6">
        <p className="text-[12px] font-bold leading-5 text-[#FAF51C]">
          {section}
        </p>
        <h2 className="-mt-1 text-[22px] font-bold leading-10">
          {data.blog_heading}
        </h2>
        <p className="-mt-1 text-[16px] text-[#B3B3B3] font-quicksand font-normal leading-6">
          {data.blog_subheading}
        </p>
        <div className="flex mt-4 text-center mx-auto mb:mx-0.5 mb:mt-2 mb-6 mb:mb-0">
          <Image
            src={data.profile ? data.profile : "/profilepic.png"}
            height={46}
            width={46}
            className=" rounded-full"
            alt="profilePic"
          />
          <div className="-mt-2 text-left ml-4">
            <h2 className=" text-[12px] ">{data.name}</h2>
            <p className=" text-[12px] text-[#A0A0A0]">
              {data.date} • {data.readTime}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogElem;
