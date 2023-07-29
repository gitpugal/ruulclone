import React from 'react'

const Work = () => {
    const cardData = [
        {
            id: 1,
            bg : "bg-[#f6f8fe]",
            title: 'For Talents',
            subtitle : 'In 120 COUNTRIES',
            description: 'Empower your independent career with financial autonomy. Work with any business worldwide, effortlessly and compliantly.',
            tags: [
                'Global Invoicing', 'Payment Collection', 'Borderless Banking', 'Tax Assistance'
            ],
            button : 'Explore Talent Solutions',
            talent : '50K+ talents use Ruul'
        },
        {
            id: 2,
            bg: "bg-[#fec1ae]",
            title: 'For Businesses',
            subtitle : 'In 120 COUNTRIES',
            description: 'Empower your businesses with financial autonomy. Work with any business worldwide, effortlessly and compliantly.',
            tags: [
                'Global Invoicing', 'Payment Collection', 'Borderless Banking', 'Tax Assistance'
            ],
            button : 'Explore Talent Solutions',
            talent : '10K+ businesses use Ruul'
        }
    ]
  return (
    <div className='min-h-full pb-32 relative px-5 md:px-20  text-[#cafdc6] max-h-fit w-full bg-[#003e39]'>
        <div className='flex w-full  h-full  flex-col md:flex-row gap-7'>
            <p className=' absolute left-22 top-24 '>
            THE NEW WAY OF WORK 
            </p>
            <p className='w-[60%] mt-44  text-7xl font-extrabold'>
            Tailored for the new economy
            </p>
            <p className='w-full md:w-[40%] mt-44   text-xl pr-0 md:pr-20'>
            Ruul&apos;s technology caters to the unique needs of modern talents and businesses. Our mission is 
            empowering agility, autonomy, and compliance for staying ahead in a <br/>fast-evolving economy.
            </p>
        </div>
        <div className='flex text-[#003e39] flex-col md:flex-row gap-10 mt-32'>
            {cardData.map((data, index) => (
                <div key={index} className={`flex mx-auto  flex-col items-center justify-evenly mx-14 px-10 w-full md:w-1/2 ${data.bg}  h-screen rounded-2xl`}>
                    <p className='text-5xl font-bold w-full'>
                        {data.title}
                    </p>
                    <p className='font-semibold w-full'>{data.subtitle}</p>
                    <p className='px-8 py-4 rounded-2xl border border-black text-xl'>{data.description}</p>
                    <ul className='grid list-disc gap-5 grid-cols-1 md:grid-cols-2'>
                        {data.tags.map((tag, index) => (
                            <li key={index} className='font-bold'>{tag}</li>
                        ))}
                    </ul>
                    <button className='bg-[#003e39] rounded-2xl w-full py-3 text-center font-bold text-[#cafdc6]'>{data.button}</button>
                    <p className='hidden md:block'>{data.talent}</p>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Work