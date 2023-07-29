import React from 'react'

const Solutions = () => {
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
        <div className='min-h-full pb-36 border-b-[1px] border-[#003e39] relative px-5 md:px-20  text-[#003e39] max-h-fit w-full bg-[#feeeca]'>
            <div className='flex w-full  h-full  flex-col md:flex-row '>
                <p className=' absolute left-22 top-24 '>
                    WORK SOLUTIONS FOR TODAY                </p>
                <p className='w-[60%] mt-36 md:mt-44  text-7xl font-extrabold'>
                    Remedies for the new work landscape
                </p>
                <p className='w-full md:w-[40%] m-10 md:mt-44   text-xl pr-20'>
                    Discover our smart worktech solutions and products designed to future-proof your work, and meet today&apos;s needs with ease.
                </p>
            </div>
            <div className='flex text-[#003e39] [&>*:nth-child(2n)]:flex-row-reverse  flex-col gap-5 md:gap-24 mt-32'>
                {cardData.map((data, index) => (
                    <div key={index} className='w-full px-0  md:px-10  h-fit justify-center [&>*:nth-child(1n)]:bg-[#f6f8fe] [&>*:nth-child(2n)]:bg-[#86efac] flex  flex-reverse gap-0 md:gap-10'>
                        <div className={`flex border-[1px] border-[#003e39] flex-col py-20 gap-5  items-center justify-evenly  px-10 w-full md:w-1/2   h-3/4 rounded-2xl`}>
                            <p className='text-5xl font-bold'>
                                {data.title}
                            </p>
                            <p className='font-semibold'>{data.subtitle}</p>
                            <p className='px-8 py-4 rounded-2xl border border-black text-xl'>{data.description}</p>
                            <ul className='grid list-disc gap-5 grid-cols-2'>
                                {data.tags.map((tag, index) => (
                                    <li key={index} className='font-bold'>{tag}</li>
                                ))}
                            </ul>
                            <button className='bg-[#003e39] rounded-2xl w-full py-3 text-center font-bold text-[#cafdc6]'>{data.button}</button>
                            <p>{data.talent}</p>
                        </div>
                        <div className='py-24 hidden md:block border-[1px] border-[#003e39]  px-10 w-1/2 min-h-full bg-green-300 max-h-full rounded-2xl'>
                            

                        </div>
                    </div>
                ))}

            </div>
        </div>
    )
}

export default Solutions