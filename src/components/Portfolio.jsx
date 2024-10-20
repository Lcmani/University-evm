import React from 'react'
import {SERVICES_CONTENT } from '../constants'

const Portfolio = () => {
  return (
   <section className='max-w-7xl mx-auto border-b-2' id="services">
<div className='mb-20'>
<h2 className='text-xl lg:text-3xl tracking-tight text-center uppercase mt-20 mb-12'>
    Main-Chair head
</h2>
<div className='grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3'>
    {SERVICES_CONTENT.map((project) => (
        <div key={project.id} className='group relative overflow-hidden rounded-3xl mx-4'>
            <img src={project.image} alt={project.title} className='h-full w-full object-cover 
            transition-transform duration-500 group-hover:scale-110' /> 
            <div className='absolute inset-0 flex flex-col items-center justify-center opacity-0 backdrop-blur-lg
            transition-opacity duration-500 group-hover:opacity-100'>
                <h3 className='mb-2 text-xl font-medium'>{project.name}</h3>
                <p className='mb-12 p-4'>{project.description}</p>
            </div>
            {/* Use project.title for alt text */}
        </div>
    ))}
</div>

</div>
   </section>
  )
}

export default Portfolio