"use client"
import React, { useEffect, useState } from "react";
import "../pagemodule.css";
import Nav2 from "@/components/common/Nav2";
import Contact1 from "@/components/contact/Contact1";
import Contact2 from "@/components/contact/Contact2";


const page = () => {

  const [link,updatelink]=useState("/");

  function setAppStoreLink() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;
    
    // Check for iOS (iPhone, iPad, iPod)
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
        // document.getElementById('appStoreLink').href = 'https://apps.apple.com/us/app/your-app-name/id1234567890'; // Replace with your actual App Store link
        updatelink("https://apps.apple.com/in/app/capital-rush/id1615705403")
    } 
    // Check for Android
    else if (/android/i.test(userAgent)) {
        // document.getElementById('playStoreLink').href = 'https://play.google.com/store/apps/details?id=com.yourapp.package'; // Replace with your actual Play Store link
        updatelink("https://play.google.com/store/apps/details?id=com.metronome.capital")
    }
}

useEffect(() => {
  setAppStoreLink();
}, [])

  

  return (
    <div className=" bg-[#100B26]">
      <div className="pt-6 bg-[#100B26]">
        <Nav2 link={link} />
      </div>
      <div className="timeline-bg flex justify-center items-center">
        <Contact1 />
      </div>
      <Contact2 />
    </div>
  );
};

export default page;
