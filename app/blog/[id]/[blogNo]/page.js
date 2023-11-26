import React from "react";
import "../../../pagemodule.css";
import Nav2 from "@/components/common/Nav2";
import SepBlog from "@/components/Blog/SepBlog";
import Blogs from "@/components/helper/Blogs";

export const metadata = {
  title: "Learn About Trading with Capital Rush Blogs",
  description: "Introduce readers to alternative investments such as real estate, commodities, and cryptocurrencies, highlighting their role in diversifying portfolios.",
  keywords:"share market how to start, market trading, knowledge about share market, invest in market"
};


const page = ({params}) => {

  const id=parseInt(params.id);
  const blogNo=parseInt(params.blogNo);
  console.log(id,blogNo)
  const blogPosts=Blogs[id-1];
  console.log(blogPosts)
  const currentSection=blogPosts.filter((item)=>{
    return item.tagid===id;
  })
  console.log(currentSection);
  
  const currentBlog = currentSection.filter((item)=>{
    return item.Sno===blogNo;
  })

  // console.log(currentBlog);

  return (
    <div className=" bg-[#100B26]">
      <div className=' hidden md:block mb-32'>
        <Nav2 />
    </div>
    <div className='pt-4 block md:hidden'>
        <Nav2 variant="mobile" />
    </div>
        <SepBlog data={currentBlog[0]} fullData={currentSection}/>
    </div>
  );
};

export default page;

{/* <p>{decodedId}</p> */}

// export default function Page({params}) {
//   return <p>Post: {params.id}</p>
// }
