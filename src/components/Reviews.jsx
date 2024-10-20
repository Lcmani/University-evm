import React from 'react'
import { REVIEWS } from '../constants'

const Reviews = () => {
  return (
    <section className='max-w-7xl mx-auto border-b-2' id='about'>
<div className='my-20'>
    <h2 className='text-xl lg:text-3xl tracking-tight text-center uppercase mb-12'>
    Research
    </h2>
    <p className='max-w-2xl text-lg mb-12 text-center mx-auto'>
        {Reviews.text}
    </p>
    <div className='flex flex-wrap justify-center'>
        {REVIEWS.reviews.map((review, index) => (
<div key={index} className='mt-10 flex flex-col items-center justify-center 
rounded-2xl border border-neutral-300 p-10 mx-2 max-w-xs'>

<div className='flex items-center'>
      {/* <img src={review.image} alt={review.name} className='w-12 h-12 rounded-full mr-4' /> */}
      <div>
        <p className='text-sm font-bold mb-4'>{review.title}</p>
        {/* <p className='text-sm text-neutral-500'>{review.title}</p> */}
      </div>
    </div>

    <p className='mb-4'>{review.review}</p>
    
</div>
        ))}
   </div>
</div>
    </section>
  )
}

export default Reviews