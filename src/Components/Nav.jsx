import React from 'react'
import { assets } from '../assets/frontend-assets/assets'
import { useNavigate } from 'react-router'

function Nav() {
  const navigate = useNavigate();
  return (
    <>
    <div className='w-full flex justify-between items-center font-semibold'>
        <div className='flex items-center gap-2'>
            <img onClick={()=>navigate(-1)}  className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_left} alt="Left Arrow" />
            <img onClick={()=>navigate(1)} className='w-8 bg-black p-2 rounded-2xl cursor-pointer' src={assets.arrow_right} alt="Right Arrow" />
        </div>
        <div className='flex items-center gap-4'>
            <p className='text-[15px]  bg-white text-black  px-4 py-1 rounded-2xl hidden md:block hover:bg-gray-300 cursor-pointer'>Explore Premium</p>
            <p className='text-[15px] bg-black py-1 px-3 rounded-2xl cursor-pointer'>Install App</p>
            <p className='w-7 h-7 bg-purple-500 text-black rounded-full flex items-center justify-center  cursor-pointer'> N </p>
        </div>
    </div>
    <div className='flex items-center gap-2 mt-4'>
        <p className='px-4 py-1 text-black bg-white rounded-2xl cursor-pointer'>All</p>
        <p className='px-4 py-1 bg-black rounded-2xl cursor-pointer'>Music</p>
        <p className='px-4 py-1 bg-black rounded-2xl cursor-pointer'>Podcasts</p>
    </div>
    </>
  )
}

export default Nav