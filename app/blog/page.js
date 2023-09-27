"use client";
import React from "react";
import "../pagemodule.css";
import Nav2 from "@/components/common/Nav2";
import Blog1 from "@/components/Blog/Blog1";
import Blog2 from "@/components/Blog/Blog2";

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
