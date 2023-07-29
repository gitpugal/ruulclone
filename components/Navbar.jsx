import React from 'react'

const Navbar = () => {
    const navs = ['For Talents', 'For Businesses', 'Pricing', 'Collaborate', 'Resources'];
    return (
        <div className='bg-[#cafdc6]  border-b-[1px] items-center flex flex-row justify-between px-3 md:px-24 border-[#00554e] w-screen h-fit py-7'>
            <h1 className='font-extrabold text-5xl '>Ruul</h1>
            <div className='md:flex hidden flex-row gap-10'>
                {navs.map((nav, index)=>(
                    <p key={index} className='font-extralight text-xl'>{nav}</p>
                ))}
            </div>
            <div className='flex flex-row'>
                <button className='px-7 py-3 mx-3 rounded-lg bg-white text-[#003e39] border-[1px] border-[#003e39] font-bold'>
                    Login
                </button>
                <button className='px-7 py-3 mx-3 rounded-lg bg-[#003e39] text-[#c9fec6] font-bold'>
                    Sign Up
                </button>
            </div>
        </div>
    )
}

export default Navbar