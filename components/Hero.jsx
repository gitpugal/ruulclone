import React from 'react'
import heroBg from '../public/images/heroBG.png'
import one from '../public/images/heroBottom/1.png'
import two from '../public/images/heroBottom/2.png'
import three from '../public/images/heroBottom/3.png'
import four from '../public/images/heroBottom/4.png'

import Image from 'next/image'

const Hero = () => {
    const heroImages = [one, two, three, four]
    return (
        <div className='w-screen relative border-b-[1px] border-[#003e39] px-5 lg:px-24  text-left flex flex-col lg:flex-row gap-10 items-center justify-center h-fit pt-20 pb-36  bg-[#c9fec6]'>
            <div className='flex text-left flex-col gap-10 items-center justify-center h-full w-full lg:w-1/2'>
                <p className='text-left font-bold w-full'>WORKTECH</p>
                <h1 className='text-5xl lg:text-6xl font-extrabold'>
                    The infrastructure of modern work
                </h1>
                <p className='text-xl'>
                    Engineering new ways of connecting talents and organizations to enhance their financial performance and simplify compliance.
                </p>
                <div className='w-full flex flex-col lg:flex-row items-center justify-start'>
                    <button className='w-full lg:w-1/3   mb-5 px-7 py-3 mr-3 rounded-lg bg-[#003e39] text-[#c9fec6] font-bold'>
                        I&apos;m a Talent
                    </button>
                    <button className='w-full lg:w-1/3  mb-5 px-7 py-3 mr-3 rounded-lg bg-white text-[#003e39] border-[1px] border-[#003e39] font-bold'>
                        I&apos;m a Business
                    </button>

                </div>
                <p className='text-left font-bold w-full'>Excellent 4.4 out of 5</p>

            </div>
            <div className='h-full   w-1/2 hidden lg:flex flex-col items-center justify-center'>
                <Image src={heroBg} className='w-[80%]' alt="hero Bg" />
            </div>
            <div className=' z-10 w-fit  mx-auto relative lg:absolute h-fit lg:bottom-[-9%]  grid grid-cols-2 lg:grid-cols-4 gap-10'>
                {heroImages.map((icon, index) => (
                    <div key={index} className='bg-[#f6f8fe] shadow-[9px_8px_0px_0px_rgba(0,0,0,1)] hover:shadow-none transition-all duration-100 hover:scale-110 
                    hover:border-none flex items-center w-3/4
                     py-3 rounded-2xl border-[1px] border-[#003e39] overflow-hidden'>
                        <Image src={icon} alt='icon'/>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Hero