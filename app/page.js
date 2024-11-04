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

  function openUnityDeepLink(contestId) {
    const unityLink = `http://capitalrush.io/?${contestId}`;
    const fallbackLink = "https://play.google.com/store/apps/details?id=com.metronome.capital";
    
    // Record start time
    const startTime = Date.now();
  
    // Try opening the deep link directly
    window.location.href = unityLink;
  
    // Fallback if the app does not open
    setTimeout(() => {
      const elapsedTime = Date.now() - startTime;
  
      if (elapsedTime < 3000) { // Assume app didn't open within 3 seconds
        window.location.href = fallbackLink;
      }
    }, 1500); // 1.5 second delay to allow the app to open
  }

  useEffect(() => {
    setAppStoreLink();

    // Check for "contestId" in the URL query parameters
    const params = new URLSearchParams(window.location.search);
    const contestId = params.get("contestId");
    
    if (contestId) {
      // Run the Unity deep link function if "contestId" is found
      openUnityDeepLink(contestId);
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