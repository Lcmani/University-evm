import React from 'react'
import aboutImage from '../assets/about2.png'
const About = () => {
  return (
    <section className='max-w-7xl  mx-auto border-b-2 mt-20' id="reviews">
        <h2 className='text-xl lg:text-3xl tracking-tighter text-center uppercase mb-12 mx-4'>
           Students & Ongoing projects
        </h2>
        <div className='flex flex-col items-center lg:space-x-8 mx-4 mb-20'>
            <div className='mb-8 lg:mb-0'>
                <img src={aboutImage} alt='About' className='w-full h-auto'/>
            </div>
            <p className='text-lg lg:text-3xl font-light text-center lg:text-left max-w-5xl mx-auto mt-8'>
            This project aims to build a number of tools that measure some of the linguistic phenomena King Saud University Blog.
            <b>Status</b>: research proposal
            </p>
        </div>
    </section>
  )
}

export default About