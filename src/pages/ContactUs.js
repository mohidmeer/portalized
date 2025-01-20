import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/ui/input'
import Button from '../components/ui/button'
import ContactForm from '../components/ContactFrom'
import Faqs from '../components/Faqs'

const ContactUs = () => {
    return (
        <div className='flex flex-col gap-y-[100px]' >
            <Hero />
            <section className='max-w-7xl mx-auto '>
                <div className='grid grid-cols-3 gap-24 my-8 '>
                    <div className='flex flex-col gap-4 bg-primary-300 p-4 rounded-2xl relative   '>
                        <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="86" height="86" rx="12" fill="black" />
                            <path d="M49.667 38.9998C49.667 44.1598 45.187 48.3332 39.667 48.3332L38.427 49.8265L37.6937 50.7065C37.067 51.4532 35.867 51.2932 35.4537 50.3998L33.667 46.4665C31.2403 44.7598 29.667 42.0532 29.667 38.9998C29.667 33.8398 34.147 29.6665 39.667 29.6665C43.6937 29.6665 47.1737 31.8932 48.7337 35.0932C49.3337 36.2798 49.667 37.5998 49.667 38.9998Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M56.3334 44.1466C56.3334 47.1999 54.7601 49.9066 52.3334 51.6133L50.5468 55.5466C50.1334 56.4399 48.9334 56.6133 48.3067 55.8533L46.3334 53.4799C43.1067 53.4799 40.2268 52.0532 38.4268 49.8266L39.6667 48.3333C45.1867 48.3333 49.6667 44.1599 49.6667 38.9999C49.6667 37.5999 49.3334 36.2799 48.7334 35.0933C53.0934 36.0933 56.3334 39.7732 56.3334 44.1466Z" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                            <path d="M36.333 39H42.9997" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" />
                        </svg>

                        <h6 className='h7' >
                            Chat to Support
                        </h6>
                        <p className='c7 text-primary-100'>
                            Speak to our friendly team.
                        </p>
                        <p className='c7 '>
                            sales@untitled.com
                        </p>

                    </div>
                    <div className='flex flex-col gap-4 bg-primary-300 p-4 rounded-2xl relative '>
                        <svg width="86" height="86" viewBox="0 0 86 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect width="86" height="86" rx="12" fill="black" />
                            <path d="M43.4998 44.9064C45.7973 44.9064 47.6598 43.0439 47.6598 40.7464C47.6598 38.4489 45.7973 36.5864 43.4998 36.5864C41.2023 36.5864 39.3398 38.4489 39.3398 40.7464C39.3398 43.0439 41.2023 44.9064 43.4998 44.9064Z" stroke="white" stroke-width="1.5" />
                            <path d="M32.3266 38.3198C34.9533 26.7732 52.0599 26.7865 54.6733 38.3332C56.2066 45.1065 51.9933 50.8398 48.2999 54.3865C45.6199 56.9732 41.3799 56.9732 38.6866 54.3865C35.0066 50.8398 30.7933 45.0932 32.3266 38.3198Z" stroke="white" stroke-width="1.5" />
                        </svg>



                        <h6 className='h7' >
                            Visit Us
                        </h6>
                        <p className='c7 text-primary-100'>
                            Visit our office
                        </p>
                        <p className='c7 '>
                            View on Google Maps
                        </p>
                    </div>
                    <div className='flex flex-col gap-4 bg-primary-300 p-4 rounded-2xl relative '>
                        <svg width="87" height="86" viewBox="0 0 87 86" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <rect x="0.5" width="86" height="86" rx="12" fill="black" />
                            <path d="M57.2927 51.4403C57.2927 51.9203 57.186 52.4137 56.9593 52.8937C56.7327 53.3737 56.4393 53.827 56.0527 54.2537C55.3993 54.9737 54.6793 55.4937 53.866 55.827C53.066 56.1603 52.1993 56.3337 51.266 56.3337C49.906 56.3337 48.4527 56.0137 46.9193 55.3603C45.386 54.707 43.8527 53.827 42.3327 52.7203C40.7993 51.6003 39.346 50.3603 37.9593 48.987C36.586 47.6003 35.346 46.147 34.2393 44.627C33.146 43.107 32.266 41.587 31.626 40.0803C30.986 38.5603 30.666 37.107 30.666 35.7203C30.666 34.8137 30.826 33.947 31.146 33.147C31.466 32.3337 31.9727 31.587 32.6793 30.9203C33.5327 30.0803 34.466 29.667 35.4527 29.667C35.826 29.667 36.1993 29.747 36.5327 29.907C36.8793 30.067 37.186 30.307 37.426 30.6537L40.5193 35.0137C40.7593 35.347 40.9327 35.6537 41.0527 35.947C41.1727 36.227 41.2393 36.507 41.2393 36.7603C41.2393 37.0803 41.146 37.4003 40.9593 37.707C40.786 38.0137 40.5327 38.3337 40.2127 38.6537L39.1993 39.707C39.0527 39.8537 38.986 40.027 38.986 40.2403C38.986 40.347 38.9993 40.4403 39.026 40.547C39.066 40.6537 39.106 40.7337 39.1327 40.8137C39.3727 41.2537 39.786 41.827 40.3727 42.5203C40.9727 43.2137 41.6127 43.9203 42.306 44.627C43.026 45.3337 43.7193 45.987 44.426 46.587C45.1193 47.1737 45.6927 47.5737 46.146 47.8137C46.2127 47.8403 46.2927 47.8803 46.386 47.9203C46.4927 47.9603 46.5993 47.9737 46.7193 47.9737C46.946 47.9737 47.1193 47.8937 47.266 47.747L48.2793 46.747C48.6127 46.4137 48.9327 46.1603 49.2393 46.0003C49.546 45.8137 49.8527 45.7203 50.186 45.7203C50.4393 45.7203 50.706 45.7737 50.9993 45.8937C51.2927 46.0137 51.5993 46.187 51.9327 46.4137L56.346 49.547C56.6927 49.787 56.9327 50.067 57.0793 50.4003C57.2127 50.7337 57.2927 51.067 57.2927 51.4403Z" stroke="white" stroke-width="1.5" stroke-miterlimit="10" />
                        </svg>
                        <h6 className='h7' >
                            Call Us
                        </h6>
                        <p className='c7 text-primary-100'>
                            Mon to Fri  9:00 am - 10:00 pm
                        </p>
                        <p className='c7 '>
                            0000000000000000
                        </p>
                    </div>
                </div>
            </section>

            <section className='max-w-6xl bg-black  rounded-2xl p-10 mx-auto w-full '>
                <div className='max-w-[450px] mx-auto '>
                    <ContactForm/>
                </div>

            </section>

            <Faqs/>
                
        </div>
    )
}

export default ContactUs




const Hero = () => {
    return (
        <section
            className="flex flex-col min-h-[30vh]  justify-center items-center  bg-portalized bg-no-repeat bg-top bg-[length:700px]  ">
            <div className="max-w-6xl mx-auto flex flex-col gap-6 items-center justify-center">
                <h1 className="h3 font-light text-center">
                    Contact Us Now
                </h1>
                <p className="text-center text-primary-150 c5">
                    Let us know how we can help.
                </p>

            </div>
        </section>
    )
}



