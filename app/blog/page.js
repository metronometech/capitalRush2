import React from "react";
import "../pagemodule.css";
import Nav2 from "@/components/common/Nav2";
import Blog1 from "@/components/Blog/Blog1";
import Blog2 from "@/components/Blog/Blog2";

export const metadata = {
  title: "Learn Trading with Fun | Capital Rush | About Us",
  description: "Introduce readers to investments such as real estate, commodities, and cryptocurrencies, highlighting their role in diversifying portfolios.",
  keywords:"stock market games, best app for investment & trading, beginer for stock market, knowledge about share market"
};


const page = () => {
  return (
    <div className=" bg-[#100B26]">
      <div className="mt-8 mb:mt-0">
        <div className=" hidden md:block mb-20">
          <Nav2 />
        </div>
        <div className="-mt-8 block md:hidden">
          <Nav2 variant="mobile" />
        </div>
        <Blog1 />
      </div>
      <Blog2 />
    </div>
  );
};

export default page;
