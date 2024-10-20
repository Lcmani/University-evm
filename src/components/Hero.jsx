import React from 'react'
import hero from "../assets/dashboard1.png";
import hero2 from "../assets/dashboard2.png";
import hero3 from "../assets/dashboard3.png";
import hero5 from "../assets/dashboard5.jpg";
import Marquee from 'react-fast-marquee'
const Hero = () => {
  return (
    <section className='max-w-7xl mx-auto border-b-2'>
        {/* <div className='flex flex-col items-center my-20'>
            <h1 className='text-6xl lg:text-[2rem] p-2 uppercase font-bold'>
             mani
            </h1>
            <p className='lg:mt-6 text-sm mb-4 font-medium tracking-tighter'>
             sadss
            </p>
            <img src={HERO_CONTENT.image} className='w-full h-[65vh] object-cover rounded-2xl p-2' alt='Hero' />
        </div> */}
        <div className=" flex flex-col items-center my-10">
          <Marquee gradient pauseOnHover="true" className=" border-t rounded-2xl border-b py-3 overflow-hidden ">
            <div className=" flex pr-1 flex-col justify-center items-center h-[200px] mx-1 ">
              <img src={hero} className="w-1/2 rotate-90 " alt="" />
            </div>
            <div className=" flex pr-10 flex-col justify-center items-center h-[200px] mx-1  ">
              <img src={hero5} className="w-1/2 rotate-90 " alt="" />
            </div>
           
            <div className=" flex pr-10 flex-col justify-center items-center h-[200px] mx-1 ">
              <img src={hero2} className="w-full rotate-90  " alt="" />
            </div>
            
            {/* <div className=" flex pr-10 flex-col justify-center items-center h-[200px] mx-10 ">
              <img src={HERO_CONTENT.image} className="w-30 " alt="" />
            </div>
            <div className=" flex pr-10 flex-col justify-center items-center h-[200px] mx-5 ">
              <img src={HERO_CONTENT.image} className="w-30 " alt="" />
            </div> */}
          </Marquee>        
        </div>
    </section> 
  )
}

export default Hero