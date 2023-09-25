import Nav2 from '@/components/common/Nav2'
import Timeline1 from '@/components/timeline/Timeline1'
import React from 'react'
import "../pagemodule.css"
import Footer from '@/components/common/FooterElem'
import Timeline2 from '@/components/timeline/Timeline2'


const page = () => {
  return (
    <div className='mt-8'>
        <div>
        <div className=" hidden md:block">
          <Nav2 />
        </div>
        <div className=" block md:hidden">
          <Nav2 variant="mobile" />
        </div>
            <Timeline1 />
        </div>
        <div className='home-sec2'>
        <Timeline2 />
        </div>
        <div>
            <Footer />
        </div>
    </div>
  )
}

export default page