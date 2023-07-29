import Image from 'next/image'
import React from 'react'
import ProtocolImg from '../public/images/protocol.png'
import thinkIcon from '../public/images/thinkIcon.png'


const Protocol = () => {
    const features = [
        {
            title: 'Streamlined compliance',
            content: 'Remain compliant with local regulations with zero paperwork.'
        },
        {
            title: 'Financial enhancement',
            content: 'Ease off your payroll burden with a lighter connection protocol.'
        },
        {
            title: 'Easy attachment & detachment',
            content: 'The agile connection protocol for engaging with your workforce.'
        },
        {
            title: 'Cross-border strandization',
            content:'International work arrangements simplified for global businesses.'
        }
    ]
    return (
        <div className='w-screen  mt-10 md:mt-44 relative border-b-[1px] border-[#003e39] px-5 md:px-24 text-left flex flex-col md:flex-row gap-10 items-center justify-center h-fit pt-20 pb-36  bg-[#f6f8fe]'>
            <div className='h-full w-1/2 hidden md:block flex flex-col items-start'>
                <Image src={ProtocolImg} className='w-[68%]' alt="hero Bg" />
            </div>
            <div className='flex text-left flex-col gap-10 items-center justify-center h-full w-full md:w-1/2'>
                <p className='text-left font-bold w-full'>AGENCY OF RECORD</p>
                <h1 className='text-6xl font-extrabold'>
                    A new connection
                    protocol for work
                </h1>
                <p className='text-xl w-full '>
                    Say goodbye to the old and outdated payroll system. Modern work demands a new employment protocol between talents and businesses. Ruul pioneers this revolutionary transformation.
                </p>
                <div className='bg-[#feefca]  w-full px-2 md:px-10 py-7 flex flex-row gap-5 items-center rounded-2xl border-[#003e39] border-[1px]'>
                    <Image src={thinkIcon} alt="" />
                    <p className='text-sm'>
                        Agency of Record (AOR) service enables off-payroll talents and organizations to work together in a
                        streamlined and compliant manner, simplifying cross-border work relations for both parties.
                    </p>
                </div>
                <div className='w-full grid gap-10 grid-cols-2'>
                    {
                        features.map((el, index) => (
                            <div key={index} className=' text-xl'>
                                <p className='font-bold'>
                                    {el.title}
                                </p>
                                <p className='mt-3'>
                                    {el.content}
                                </p>
                            </div>
                        ))
                    }
                </div>
            </div>

        </div>
    )
}

export default Protocol