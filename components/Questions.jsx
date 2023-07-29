'use client'
import React from 'react'
import heroBg from '../public/images/heroBG.png'
import one from '../public/images/heroBottom/1.png'
import two from '../public/images/heroBottom/2.png'
import three from '../public/images/heroBottom/3.png'
import four from '../public/images/heroBottom/4.png'
import { BsFillArrowDownSquareFill } from 'react-icons/bs';
import Image from 'next/image'

const Questions = () => {
    const QandA = [
        {
            q: 'What does Ruul do?',
            a: 'Ruul enables solo talents and businesses to work compliantly and flexibly with custom worktech solutions tailored for the new work landscape. The set of solutions offered include globally recognized invoices, cross-currency payments, global employment, and tax assistance.'
        },
        {
            q: 'What is the difference of Ruul from payment providers?',
            a: 'Ruul is much more than a payment provider that you can transfer money with. Ruul\'s payment solution is an integrated feature connected to global invoicing for off-payroll payments or Employer of Record for global salary payments.'
        },
        {
            q: 'I am not able to find an answer to my question. What should I do?',
            a: 'You can contact our customer team through live chat anytime to get answers to all of your questions.'
        },
        {
            q: 'Do I need to be incorporated in order to use Ruul\'s invoicing service?',
            a: 'Not necessarily. Ruul enables off-payroll work relationships to run smoothly, meaning, you can invoice as an unincorporated solo talent (or as a business working with solo talents) in a B2B arrangement.'
        },
        {
            q: "What are the advantages of Ruul over incorporation?",
            a: 'Establishing a company comes with financial burden, red tape and geographical limitations that challenge one’s autonomy. Using Ruul, solo talents avoid the costs of incorporation, rule out bureaucracy, save time and still stand free.Please note that the local labor and tax regulations may impose varying requirements and limitations.'
        }
    ];



    function showContent(index) {
        var question = document.getElementById(index);
        var answerParagraph = question.querySelector('.answer');
      
        if (answerParagraph) {
          if (question.getAttribute('data-visible') === 'true') {
            answerParagraph.remove();
            question.setAttribute('data-visible', 'false');
          } else {
            question.insertAdjacentHTML('beforeend', `<p class="answer">${QandA[index].a}</p>`);
            question.setAttribute('data-visible', 'true');
          }
        } else {
          question.insertAdjacentHTML('beforeend', `<p class="answer">${QandA[index].a}</p>`);
          question.setAttribute('data-visible', 'true');
        }
      }
      


    return (
        <div className='w-screen relative border-b-[1px] leading-10 border-[#003e39] px-5 md:px-24 text-left flex flex-col md:flex-row gap-10 items-start justify-center h-fit  py-36  bg-[#f6f8fe]'>
            <div className='flex text-left flex-col gap-10 items-center justify-center pr-10 h-full w-full md:w-[40%]'>
                <p className='text-left font-bold w-full'>HERE TO HELP</p>
                <h1 className='text-7xl font-extrabold w-full'>
                    Common questions
                </h1>
                <p className='text-xl w-full'>
                    Find the answers to frequently asked questions here.
                </p>
                <p className='text-left font-bold w-full'>Need further support?</p>
                <div className='w-full'>
                    <button className='px-7  mx-auto w-full md:w-fit py-3 mr-0 md:mr-3 rounded-lg bg-[#003e39] text-[#c9fec6] font-bold'>
                        Get Support
                    </button>
                </div>

            </div>
            <div className='h-full w-full md:w-[70%] flex flex-col  items-center justify-center'>
                {
                    QandA.map((data, index) => (
                        <div  key={index} id={index} data-visible="false" className={`flex font-bold  transition-all gap-5 duration-300 ease-in-out w-full my-5 max-h-fit min-h-[20%]
                         text-xl items-center flex-col justify-between px-10 py-8   rounded-2xl border-[1px] border-[#003e39]`}>
                            <div className='items-center flex flex-row justify-around w-full'>
                                <p className=' w-full'>{data.q}</p>
                                <BsFillArrowDownSquareFill className='cursor-pointer' onClick={() => {
                                    showContent(index)
                                }} size={40} />
                            </div>

                        </div>
                    ))
                }
            </div>

        </div>
    )
}

export default Questions