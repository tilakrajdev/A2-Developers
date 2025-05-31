import React from 'react'
import logo from '../assets/Images/logo.png'

const Navbar = () => {
  return (
    <div className='fixed top-16 w-full z-20'>
        <div className='flex justify-between items-center px-6 bg-opacity-40'>
            <div className='flex items-center gap-2'>
                <img className='w-10' src={logo} alt="logo" loading='lazy'/>
                <h1 className='text-white text-4xl'>A2 Developers</h1>
            </div>
            <ul className='pr-[400px] flex justify-center items-center gap-8 text-lg font-bold text-white'>
                <li className='hover:underline'>Home</li>
                <li className='hover:underline'>About</li>
                <li className='hover:underline'>Product</li>
                <li className='hover:underline'>Contact</li>
            </ul>
        </div>
    </div>
  )
}

export default Navbar
