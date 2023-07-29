'use client'
import React from 'react'

const UserStories = () => {
    const buttons = document.querySelectorAll("button");
    buttons.forEach(element => {
        element.addEventListener("click", () => {
            if (element.id == 1) {
                document.getElementById('stories').scrollBy(-100, 0)
            } else {
                document.getElementById('stories').scrollBy(100, 0)

            }
        })
    });
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
        },
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
        <div className='min-h-full pb-32 relative px-5 md:px-20  text-[#cafdc6] max-h-fit w-full bg-[#003e39]'>
            <div className='flex w-full  relative  h-full justify-between flex-col md:flex-row gap-7'>
                <div className='w-full'>
                    <p className=' absolute left-22 top-24 '>
                        USER STORIES
                    </p>
                    <p className='w-[60%] mt-44  text-7xl font-extrabold'>
                        Why they love Ruul
                    </p>
                </div>
                <div className='flex flex-row gap-10 items-center relative md:absolute bottom-0 md:bottom-10 right-0 justify-end'>
                    <button id={1} className='border-[1px] border-[#cafdc6] rounded-full h-12 w-12'>&lt;</button>
                    <button id={2} className='border-[1px] border-[#cafdc6 text-[#003e39] bg-[#cafdc6] rounded-full h-12 w-12'>&gt;</button>
                </div>
            </div>
            <div id='stories' className='flex snap-mandatory snap-x scroll scroll-smooth text-[#003e39] no-scrollbar flex-col md:flex-row overflow-x-scroll gap-10 mt-4 md:mt-32'>
                {cardData.map((data) => (
                    <div className={`flex  snap-start flex-col items-center justify-evenly  px-10 min-w-[48%] bg-[#f6f8ff]
                      min-h-[42vh] max-h-fit  rounded-2xl`}>
                        <p className='px-8  rounded-2xl text-xl'>{data.description}</p>
                        <div className='w-full'>
                            <p className='w-full px-8 font-bold'>Tolga Turan</p>
                            <p className='w-full px-8 '>Debite</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default UserStories