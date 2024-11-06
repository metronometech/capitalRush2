"use client";
import FooterElem from "@/components/common/FooterElem";
import Home1 from "@/components/home/Home1";
import Home2 from "@/components/home/Home2";
import Home3 from "@/components/home/Home3";
import { useEffect, useState } from "react";
import { useRouter } from 'next/router';

export default function Home() {
  const [link, updateLink] = useState("/");

  function setAppStoreLink() {
    var userAgent = navigator.userAgent || navigator.vendor || window.opera;

    // Check for iOS (iPhone, iPad, iPod)
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      updateLink("https://apps.apple.com/in/app/capital-rush/id1615705403");
    } 
    // Check for Android
    else if (/android/i.test(userAgent)) {
      updateLink("https://play.google.com/store/apps/details?id=com.metronome.capital");
    }
  }

  function openLink(contestId) {
    let fallbackLink;
  
    // Detect iOS devices
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent) && !window.MSStream;
    
    // Detect Android devices
    const isAndroid = /Android/.test(navigator.userAgent);
    
    // Detect Windows devices
    const isWindows = /Windows/.test(navigator.userAgent);
  
    if (isIOS) {
      fallbackLink = "https://apps.apple.com/in/app/capital-rush/id1615705403";
    } else if (isAndroid || isWindows) {
      fallbackLink = "https://play.google.com/store/apps/details?id=com.metronome.capital";
    } else {
      // Default link in case the device is not recognized
      fallbackLink = "https://www.metronome.com/capital-rush";
    }
  
    window.location.href = fallbackLink;
  }

  useEffect(() => {
    setAppStoreLink();

    // Check for "contestId" in the URL query parameters
    const params = new URLSearchParams(window.location.search);
    const contestId = params.get("q");
    
    if (contestId) {
      // Run the Unity deep link function if "contestId" is found
      openLink(contestId);
    }
  }, []);

  return (
    <div className="flex flex-col bg-[#100B26] w-full text-31xl font-poppins">
      <Home1 />
      <Home2 link={link} />
      <Home3 link={link} />
      <FooterElem />
    </div>
  );
}