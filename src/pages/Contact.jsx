import React from 'react'
import { assets } from '../assets/assets'

function Contact() {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>CONTACT <span className='text-gray-700 font-medium'>US</span></p>
      </div>
      <div className='my-10 flex flex-col md:flex-row justify-center gap-10 mb-28 text-sm '>
        <img className='w-full md:w-[370px] ' src={assets.contact_image} alt="" />
        <div className='flex flex-col justify-center gap-6 items-start '>
          <p className='text-lg text-gray-600 font-semibold'>OUR OFFICE</p>
          <p className='text-gray-500'>555724 Willms Station <br /> Suit 350, Washington, USA</p>
          <p className='text-gray-500'>+9203055000500 <br />Dummy@gmail.com</p>
          <p className='text-lg text-gray-600 font-semibold'>Careers at PRESCRIPTO</p>
          <p className='text-gray-500'>Learn more about out team and job openings.</p>
          <button className='border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500 '>Explore Jobs</button>
        </div>
      </div>
    </div>
  )
}

export default Contact