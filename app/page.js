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
    const unityLink = `CaptialRush://ContestShare?${contestId}`;
    const fallbackLink = "https://play.google.com/store/apps/details?id=com.metronome.capital";
  
    // Try to open the deep link
    const startTime = Date.now();
    window.open(unityLink, '_blank');
  
    // Check after a short delay if the app opened or not
    setTimeout(() => {
      const elapsedTime = Date.now() - startTime;
      // If the user was not redirected (i.e., the app is not installed),
      // the elapsed time will be short, and we redirect to Play Store
      if (elapsedTime < 2000) { // 2 seconds is usually enough to detect redirection
        window.open(fallbackLink, '_blank');
      }
    }, 1500); // Delay to check if app opened (1.5 seconds)
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