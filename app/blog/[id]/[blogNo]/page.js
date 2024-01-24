import React from "react";
import "../../../pagemodule.css";
import Nav2 from "@/components/common/Nav2";
import SepBlog from "@/components/Blog/SepBlog";
import Blogs from "@/components/helper/Blogs";
import mapingHeading from "@/components/helper/HeadingMapper";
import Head from "next/head";

export const metadata = {
  title: "Learn About Trading with Capital Rush Blogs",
  description:
    "Introduce readers to alternative investments such as real estate, commodities, and cryptocurrencies, highlighting their role in diversifying portfolios.",
  keywords:
    "share market how to start, market trading, knowledge about share market, invest in market",
};

const page = ({ params }) => {
  function cleanString(str) {
    return str.replace(/[^\w\s]/gi, "").replace(/\s+/g, "-");
  }


  const id = params.id;
  const index = mapingHeading.findIndex((item) => item.name === id);
  const selectedBlog = Blogs[index];

  const blogNo = decodeURIComponent(params.blogNo);
  const blogPosts = Blogs[index];
  const currentSection = blogPosts;

  const currentBlog = blogPosts.filter((item) => {
    return cleanString(item.blog_heading) === blogNo;
  });

  const updatedMetadata = {
    title: currentBlog[0]?.metatags?.title, // Use the blog heading as the title
    description: currentBlog[0]?.metatags?.description, // Use the blog description as the description
    keywords: currentBlog[0]?.metatags?.keywords, // Use the blog keywords as keywords
  };

  // console.log(currentBlog);

  return (
    <div className=" bg-[#100B26]">
      {/* <Head> */}
        <title>{updatedMetadata.title}</title>
        <meta name="description" content={updatedMetadata.description} />
        <meta name="keywords" content={updatedMetadata.keywords} />
      {/* </Head> */}
      <div className=" hidden md:block mb-32">
        <Nav2 />
      </div>
      <div className="pt-4 block md:hidden">
        <Nav2 variant="mobile" />
      </div>
      <SepBlog data={currentBlog[0]} id={id} fullData={currentSection} />
    </div>
  );
};

export default page;

{
  /* <p>{decodedId}</p> */
}

// export default function Page({params}) {
//   return <p>Post: {params.id}</p>
// }
