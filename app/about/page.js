import React from "react";
import "../pagemodule.css";
import Nav2 from "@/components/common/Nav2";
import About1 from "@/components/About/About1";

const page = () => {
  return (
    <div className="">
      <div className="bg-[#100B26]">
        <div className=" hidden md:block">
          <Nav2 />
        </div>
        <div className=" block md:hidden pt-4">
          <Nav2 variant="mobile" />
        </div>
        <About1 />
      </div>
    </div>
  );
};

export default page;
