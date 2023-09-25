import React from "react";
import Image from "next/image";

const BlogElem = ({title,value,type,section}) => {
  return (
    <div className="flex flex-col md:mx-4 mx-0">
      <div className="w-full relative hidden mb:block" >
        <Image
          src={type===1?"/frame.png":"/frame2.png"}
          alt="stockPic"
          width={800} 
          height={100} 
          layout="responsive" 
        //   layout="fill"
        //   objectFit="cover"
        //   objectPosition="center"
        />
      </div>
      <div className="w-full text-left block md:hidden" >
        <Image
          src={type===1?"/frame.png":"/frame2.png"}
          alt="stockPic"
          width={345} 
          height={205} 
          // layout="responsive" 
        //   layout="fill"
        //   objectFit="cover"
        //   objectPosition="center"
        />
      </div>
      <div className="flex flex-col mr-6">
        <p className="text-[12px] font-bold leading-5 text-[#FAF51C]">
          {section}
        </p>
        <h2 className="-mt-1 text-[22px] font-bold leading-10">
          {title}
        </h2>
        <p className="-mt-1 text-[16px] text-[#B3B3B3] font-quicksand font-normal leading-6">
         {value}
        </p>
        <div className="flex mt-4 mb:mt-2">
              <Image src="/profilepic.png" height={46} width={46} alt="profilePic" />
              <div className="mb:-mt-2 mt-2 ml-4">
                <h2 className=" text-[12px] ">RAUL KAEVAND</h2>
                <p className=" text-[12px] text-[#A0A0A0]">6 JUNE, 2023 • 5 MIN READ</p>
              </div>
            </div>
      </div>
    </div>
  );
};

export default BlogElem;
