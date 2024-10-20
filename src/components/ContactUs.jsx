import React from 'react'
import { CONTACT_INFO } from '../constants'
import {RiMailFill, RiMailLine, RiMapPin2Line, RiPhoneLine } from '@remixicon/react'

const ContactUs = () => {
  return (
    <section className='max-w-7xl mx-auto' id='contact'>
        <h2 className='text-xl lg:text-3xl tracking-tight text-center uppercase mb-12'>
            Contact US
        </h2>
        <p className='max-w-2xl text-lg mb-12 text-center mx-auto'>
            {CONTACT_INFO.text}
        </p>
        <div className='flex flex-col lg:flex-row justify-around mx-4'>
            <div className='flex mb-8 lg:mb-0'>
                <RiPhoneLine className='text-3xl mr-4' />
                <div>
                    <p className='text-lg font-semibold'>{CONTACT_INFO.phone.label}</p>
                    <p className='text-neutral-600'>{CONTACT_INFO.phone.value}</p>
                </div>
            </div>
            <div className='flex mb-8 lg:mb-0'>
                <RiMailLine className='text-3xl mr-4' />
                <div>
                    <p className='text-lg font-semibold'>{CONTACT_INFO.email.label}</p>
                    <p className='text-neutral-600'>{CONTACT_INFO.email.value}</p>
                </div>
            </div>
            <div className='flex'>
                <RiMapPin2Line className='text-3xl mr-4' />
                <div>
                    <p className='text-lg font-semibold'>{CONTACT_INFO.address.label}</p>
                    <p className='text-neutral-600'>{CONTACT_INFO.address.value}</p>
                </div>
            </div>
        </div>
    </section>
  )
}

export default ContactUs