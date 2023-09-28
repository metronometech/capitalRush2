"use client"
import React, { useEffect, useState } from "react";
import "../pagemodule.css";
import Nav2 from "@/components/common/Nav2";
import Contact1 from "@/components/contact/Contact1";
import Contact2 from "@/components/contact/Contact2";


const page = () => {


  return (
    <div className=" bg-[#100B26]">
      <div className="pt-6 bg-[#100B26]">
        <Nav2 />
      </div>
      <div className="timeline-bg flex justify-center items-center">
        <Contact1 />
      </div>
      <Contact2 />
    </div>
  );
};

export default page;
