"use client";
import FooterElem from "@/components/common/FooterElem";
import Home1 from "@/components/home/Home1";
import Home2 from "@/components/home/Home2";
import Home3 from "@/components/home/Home3";
import { useEffect, useState } from "react";

export default function Home() {
  const [link, updateLink] = useState("/");
  const [showOverlay, setShowOverlay] = useState(false);

  function setAppStoreLink() {
    const userAgent = navigator.userAgent || navigator.vendor || window.opera;
    if (/iPad|iPhone|iPod/.test(userAgent) && !window.MSStream) {
      updateLink("https://apps.apple.com/in/app/capital-rush/id1615705403");
    } else if (/android/i.test(userAgent)) {
      updateLink("https://play.google.com/store/apps/details?id=com.metronome.capital");
    }
  }

  function openUnityDeepLink(contestId) {
    const unityLink = `CapitalRush://ContestShare?${contestId}`;
    window.location.href = unityLink;
    setShowOverlay(false); // Remove overlay after clicking
  }

  useEffect(() => {
    setAppStoreLink();

    // Check for "contestId" in the URL query parameters
    const params = new URLSearchParams(window.location.search);
    const contestId = params.get("contestId");

    if (contestId) {
      setShowOverlay(true); // Show overlay if "contestId" is present
    }
  }, []);

  return (
    <div className="flex flex-col bg-[#100B26] w-full text-31xl font-poppins">
      {/* Overlay */}
      {showOverlay && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <button
            onClick={() => openUnityDeepLink(new URLSearchParams(window.location.search).get("contestId"))}
            className="bg-white text-black font-semibold py-2 px-4 rounded-lg text-xl"
          >
            Check out the contest
          </button>
          <style jsx global>{`
            body {
              overflow: hidden;
            }
          `}</style>
        </div>
      )}
      <Home1 />
      <Home2 link={link} />
      <Home3 link={link} />
      <FooterElem />
    </div>
  );
}