"use client"
import FooterElem from "@/components/common/FooterElem";
import Home1 from "@/components/home/Home1";
import Home2 from "@/components/home/Home2";
import Home3 from "@/components/home/Home3";
import { useEffect, useState } from "react";

export default function Home() {

  
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
    <div className="flex flex-col bg-[#100B26] w-full text-31xl font-poppins">
    <Home1 />
    <Home2 link={link} />
    <Home3 link={link} />
    <FooterElem />
    </div>
  );
}

{
  /* <img
  className=" h-[95.54%] w-[95.49%] top-[4.09%] right-[2.64%] bottom-[0.37%] left-[1.88%] max-w-full  max-h-full"
  alt=""
  src="/tiles-path.svg"
/> */
}
