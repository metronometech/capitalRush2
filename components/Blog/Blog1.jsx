import React from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";



const Blog1 = () => {

  useEffect(() => {
    AOS.init();
  }, [])

  return (
    <div data-aos="slide-down" data-aos-delay="70"  data-aos-duration="1000" className='blog-bg md:h-[450px] h-[500px] flex justify-center items-center'>
        <h1 data-aos="fade-up" data-aos-delay="150"  data-aos-duration="1200" className='hidden md:block font-poppins md:text-[60px] text-[40px] font-bold bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent z-40 flex-shrink-0 '>CAPITAL RUSH BLOGS</h1>
        <h1 data-aos="fade-up" data-aos-delay="150"  data-aos-duration="1200" className='block md:hidden font-poppins md:text-[60px] text-[40px] font-bold bg-gradient-to-r from-[#F67408] to-[#FAF51C] bg-clip-text text-transparent z-40 flex-shrink-0 text-center'>CAPITAL RUSH <br/> BLOGS</h1>
    </div>
  )
}

export default Blog1