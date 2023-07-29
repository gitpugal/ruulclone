import React from 'react'
import image from "../public/images/subscribeBG.jpg"

const Subscribe = () => {
    const cardData = [
        {
            id: 1,
            bg: "bg-[#f6f8fe]",
            title: 'For Talents',
            subtitle: 'In 120 COUNTRIES',
            description: 'Empower your independent career with financial autonomy. Work with any business worldwide, effortlessly and compliantly.',
            tags: [
                'Global Invoicing', 'Payment Collection', 'Borderless Banking', 'Tax Assistance'
            ],
            button: 'Explore Talent Solutions',
            talent: '50K+ talents use Ruul'
        },
        {
            id: 2,
            bg: "bg-[#fec1ae]",
            title: 'For Businesses',
            subtitle: 'In 120 COUNTRIES',
            description: 'Empower your businesses with financial autonomy. Work with any business worldwide, effortlessly and compliantly.',
            tags: [
                'Global Invoicing', 'Payment Collection', 'Borderless Banking', 'Tax Assistance'
            ],
            button: 'Explore Talent Solutions',
            talent: '10K+ businesses use Ruul'
        }
    ]
    return (
        <div className='min-h-full pb-32 relative px-5 md:px-20  text-[#003e39] max-h-fit w-full bg-[#f6f8fe]'>
            <div className='flex w-full  h-full  flex-col '>
                <p className='w-full md:w-[60%] mt-44  text-7xl font-extrabold'>
                    Explore and spread: Ruul Blog            </p>
                <p className='w-full md:w-[40%] mt-10  text-xl pr-20'>
                    Ruul Blog serves as a knowledge center for current trends in contemporary work culture, freelancing, digital nomad lifestyles, and beyond.
                </p>border border-[#003e39]
            </div>
            <div className='flex py-10 h-[60vh] px-5 border bg-[url("../public/images/subscribeBG.jpg")]  border-[#003e39] rounded-2xl justify-between text-[#003e39]
            flex-col md:flex-row gap-10 mt-32'>
                <div className='bg-[#f6f8fe] w-full md:w-1/3 h-full mx-0 md:mx-36 flex flex-col justify-between py-5 px-6 rounded-2xl border border-[#003e39]'>
                    <h1 className='text-3xl font-bold'>
                        Talent Talks #4: Meet photographer & cinematographer Vasilis Barahanos
                    </h1>
                    <div className='flex flex-row items-center gap-3'>
                        <div className='h-10 w-10 rounded-full bg-[#cafdc6]'>
                        </div>
                        <p>Isinsu Unaran</p>
                    </div>
                </div>
                <div className='w-full md:w-fit p-1 md:p-12 flex items-end'>
                    <button className='w-1/2 h-[10vh]  px-7 py-3 mr-3 rounded-lg bg-[#003e39] text-[#c9fec6] font-bold'>
                        Read More
                    </button>
                    <button className='w-1/2 h-[10vh]  px-7 py-3 mr-3 rounded-lg bg-[#c9fec6] text-[#003e39] border-[1px] border-[#003e39] font-bold'>
                        Explore Blog
                    </button>

                </div>
            </div>
        </div>
    )
}

export default Subscribe;