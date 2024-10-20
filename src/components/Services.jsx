import React from 'react'
import { PORTFOLIO_PROJECTS } from '../constants'

const Services = () => {
  return (
   <section className='max-w-7xl mx-auto border-b-2' id='portfolio'>
    <div className='my-20'>
<h2 className='text-xl lg:text-3xl tracking-tight text-center uppercase mb-20'>ABOUT US</h2>
{PORTFOLIO_PROJECTS.map((service, index) => (
    <div key={index} className='mb-12 mx-24 flex flex-col lg:flex-row'>
        <div className={`lg:w-1/2 mb-4 lg:mb-0 ${index % 2 === 0 ? "" : "lg:order-2"}`}>
            <img 
                src={service.image} 
                alt={service.title} 
                className='w-1/2 h-auto object-cover rounded-lg' // Adjusted width
            />
        </div>
        <div className={`lg:w-1/2 flex flex-col ${index % 2 === 0 ? "lg:pl-12" : "lg:pr-12"}`}>
            <h3 className="text-xl lg:text-2xl font-medium mb-2">
                {service.title} {/* Ensure this is defined */}
            </h3>
            <p className='mb-4 lg:tracking-wide text-lg lg:text-xl lg:leading-g'>
                {service.description}
            </p>
        </div>
    </div>
))}
    </div>
   </section>
  )
}

export default Services