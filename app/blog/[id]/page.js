 import React from "react";
import "../../pagemodule.css";
import Nav2 from "@/components/common/Nav2";
import SepBlog from "@/components/Blog/SepBlog";

const page = ({params}) => {

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

  

  const decodedId = decodeURIComponent(params.id);
  return (
    <div className=" bg-[#100B26]">
      <div className=' hidden md:block mb-32'>
        <Nav2 link={link}/>
    </div>
    <div className='pt-4 block md:hidden'>
        <Nav2 variant="mobile" />
    </div>
        <SepBlog tab={decodedId} />
    </div>
  );
};

export default page;

{/* <p>{decodedId}</p> */}

// export default function Page({params}) {
//   return <p>Post: {params.id}</p>
// }
