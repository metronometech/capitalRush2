import React from "react";
import "../../pagemodule.css";
import Nav2 from "@/components/common/Nav2";
import Blog1 from "@/components/Blog/Blog1";
import Blog2 from "@/components/Blog/Blog2";
import mapingHeading from "@/components/helper/HeadingMapper";

export const metadata = {
  title: "Learn About Trading with Capital Rush Blogs",
  description: "Introduce readers to alternative investments such as real estate, commodities, and cryptocurrencies, highlighting their role in diversifying portfolios.",
  keywords:"share market how to start, market trading, knowledge about share market, invest in market"
};


const page = ({params}) => {

  const type=(params.id);

const selectedId=mapingHeading.filter((elem)=>{
  return elem.name===type;
})



  return (
    <div className=" bg-[#100B26]">
      <div className="mt-8 mb:mt-0">
        <div className=" hidden md:block mb-20">
          <Nav2 />
        </div>
        <div className="-mt-8 block md:hidden">
          <Nav2 variant="mobile" />
        </div>
        <Blog1 type={selectedId[0].sno} />
      </div>
      <Blog2 type={selectedId[0].sno} />
    </div>
  );
};

export default page;
