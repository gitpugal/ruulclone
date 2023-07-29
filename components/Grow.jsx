import React from 'react'
import workBG from '../public/images/work.png'
import one from '../public/images/heroBottom/1.png'
import two from '../public/images/heroBottom/2.png'
import three from '../public/images/heroBottom/3.png'
import four from '../public/images/heroBottom/4.png'

import Image from 'next/image'

const Grow = () => {
    const heroImages = [one, two, three, four]
    return (
        <div className='w-screen relative border-b-[1px] border-[#003e39] px-5 lg:px-24 text-center flex flex-col gap-10 items-center justify-center h-fit pt-20 pb-36  bg-[#c9fec6]'>
            <div className='flex text-left lg:text-center flex-col gap-10 items-center justify-center h-full w-full'>
                <p className='text-left lg:text-center font-bold w-full'>GET STARTED NOW</p>
                <h1 className='text-7xl font-extrabold w-full lg:w-1/2'>
                    Grow and thrive without borders                </h1>
                <p className='text-xl w-full lg:w-1/2'>
                    Join 50k+ talents and 10k+ businesses from 120 countries to discover how effortless global work can be with Ruul&apos;s smart worktech solutions.                </p>
                <div className='flex flex-col w-full gap-5 lg:gap-0 lg:flex-row items-center justify-center '>
                    <button className='w-full lg:w-fit px-7 py-3 mr-3 rounded-lg bg-[#003e39] text-[#c9fec6] font-bold'>
                        I&apos;m a Talent
                    </button>
                    <button className='w-full lg:w-fit  px-7 py-3 mr-3 rounded-lg bg-white text-[#003e39] border-[1px] border-[#003e39] font-bold'>
                        I&apos;m a Business
                    </button>

                </div>
                <p className='text-center font-bold'>Excellent 4.4 out of 5</p>

            </div>
            <div className='h-full w-full flex flex-col items-center justify-center'>
                <Image src={workBG} className='w-[92%]' alt="hero Bg" />
            </div>
        </div>
    )
}

export default Grow