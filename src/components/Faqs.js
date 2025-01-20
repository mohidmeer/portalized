import React from 'react'
import { BsFillQuestionCircleFill } from 'react-icons/bs'

const Faqs = () => {
    const faqsList =[
        {
            question:'Can I use Albino for my clients?',
            answer:'With lots of unique blocks, you can easily build a page without coding. Build your next landing page.'
        },
        {
            question:'Does it work with WordPress?',
            answer:'With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.'
        },
        {
            question:'Do I get free updates?',
            answer:'With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.'
        },
        {
            question:'Will you provide support? ',
            answer:'With lots of unique blocks, you can easily build a page without coding. Build your next landing page. Integer ut Oberyn massa. Sed feugiat vitae turpis a porta. Aliquam sagittis interdum Melisandre.'
        },
    ] 

    return (
        <section className='bg-primary-300 py-[20px]  sm:py-[60px]   '>
            <h4 className='h4 text-center'>Frequently Asked Questions</h4>
            <p className='text-center b6  text-primary-100'>With lots of unique blocks, you can easily build a page without coding. Build your next landing page.</p>
            <div className='max-w-5xl mx-auto mt-14'>
                <div className='grid md:grid-cols-2 gap-x-16 gap-y-6  sm:p-0 p-4 '>
                    {
                        faqsList.map((i,z)=>(
                            <div key={z} className='p-2 flex gap-4 items-start justify-start     '>
                                <div>
                                    <BsFillQuestionCircleFill size={32} className='mb-6'/>
                                </div>
                                <div className='flex flex-col gap-5'>
                                    <h6 className='h8'>{i.question}</h6>
                                    <p className='b7'>{i.answer}</p>
                                </div>
                            </div>
                        ))
                    }

                </div>
            </div>
            <p className='text-center b6  text-primary-100 mt-8'>Haven’t got your answer? <span  className='text-white'> Contact our support now </span> </p>
        </section>
    )
}

export default Faqs
