import React from 'react'

const Footer = () => {
    const footerLinks = [
        {
            title: 'For Businesses',
            links: ['Global Invoicing', 'Tax Assistance', 'Payment COllection', 'Banking (Coming Soon)']
        },
        {
            title: 'For Businesses',
            links: ['Global Invoicing', 'Tax Assistance', 'Payment COllection', 'Banking (Coming Soon)']
        },
        {
            title: 'For Businesses',
            links: ['Global Invoicing', 'Tax Assistance', 'Payment COllection', 'Banking (Coming Soon)']
        },
        {
            title: 'For Businesses',
            links: ['Global Invoicing', 'Tax Assistance', 'Payment COllection', 'Banking (Coming Soon)']
        },
        {
            title: 'For Businesses',
            links: ['Global Invoicing', 'Tax Assistance', 'Payment COllection', 'Banking (Coming Soon)']
        },
    ];
    const footerLink = ['Copyright ©2023 ruul.io',
        ,
        'Privacy Policy'
        ,
        'Terms Of Use'
        ,
        'DSAR']
    return (
        <div className='w-full py-8 justify-around h-fit flex flex-col gap-24 bg-[#003e39]'>
            <div className=' pt-24 items-center grid grid-cols-2 lg:grid-cols-6 px-10 text-[#cafdc6] w-full '>
                <h1 className='font-extrabold text-6xl '>Ruul</h1>
                {footerLinks.map((links, index) => (
                    <div key={index} id={index} className='my-8'>
                        <h1 className='font-bold mb-8'>{links.title}</h1>
                        <div className='flex flex-col gap-5'>
                            {links.links.map((link, index1) => (
                                <p key={index1}>{link}</p>
                            ))}
                        </div>
                    </div>
                ))}
            </div>
            <hr className='w-[80%] bg-[#c9fec6] border-[#c9fec6] mx-auto' />
            <div className='w-full h-[30vh] lg:h-fit  flex flex-col lg:flex-row items-center justify-center  gap-10 '>
                <button className='bg-[#c9fec6] w-fit   px-3 py-2 rounded-2xl'>English    &gt;</button>
                <div className=' flex mx-10 lg:mx-0 flex-row text-[#c9fec6] gap-5 w-fit justify-around items-center'>
                    {footerLink.map((link, index) => (
                        <p key={index}>{link}</p>
                    ))}
                </div>
                <div className=' flex flex-row text-[#c9fec6] gap-5 w-fit justify-around items-center'>
                    {footerLink.map((link, index) => (
                        <div key={index} className='h-8 w-8 rounded-full bg-[#c9fec6]'></div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Footer