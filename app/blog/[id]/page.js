 import React from "react";
import "../../pagemodule.css";
import Nav2 from "@/components/common/Nav2";
import SepBlog from "@/components/Blog/SepBlog";

const page = ({params}) => {



  const decodedId = decodeURIComponent(params.id);
  return (
    <div className=" bg-[#100B26]">
      <div className=' hidden md:block mb-32'>
        <Nav2 />
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
