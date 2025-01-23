import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/ui/input'
import Button from '../components/ui/button'
import ContactFrom from '../components/ContactFrom'

const AboutUs = () => {
    return (
        <div className='flex flex-col gap-y-[100px]' >
            <Hero />
            <OurMission />
            <Founder/>  
            <PlayStoreCta />

        </div>
    )
}

export default AboutUs

const Hero = () => {
    return (

        <section className='bg-black max-w-7xl rounded-xl  flex md:flex-row flex-col  mx-auto p-8 mt-[50px] '>
            <div className='flex flex-col gap-10 justify-center w-full order-2 md:order-1  '>
                <h1 className='h3 md:text-left '>Welcome to PORTALIZED: Empowering Student-Athletes in the Transfer Portal</h1>
                <p className='c5 text-primary-100' >At PORTALIZED, we recognize the critical role of the transfer portal in shaping the futures of student-athletes. Our app is designed as the ultimate platform for players to easily and efficiently announce their entry into the transfer portal, all while respecting established processes and guidelines.</p>
                <Link className='btn-link max-w-fit !px-10 !rounded-lg  '>
                    Get Started
                </Link>
            </div>
            <div className='grid grid-cols-8 h-[600px] gap-2  md:gap-8 md:p-4 max-w-lg w-full mx-auto  order-1 md:order-2 '>
                <div className='bg-white relative rounded-xl overflow-hidden col-span-5'>
                    <img src='/assets/about/student1.jpg' className='w-full h-full object-cover' />
                </div>
                <div className='bg-white relative rounded-xl overflow-hidden  md:my-4 col-span-3'>
                    <img src='/assets/about/student2.jpg' className='w-full h-full object-cover' />
                </div>
                <div className='bg-white relative rounded-xl overflow-hidden md:my-4 col-span-3'>
                    <img src='/assets/about/student3.jpg' className='w-full h-full object-cover' />
                </div>
                <div className='bg-white relative rounded-xl overflow-hidden col-span-5'>
                    <img src='/assets/about/student4.jpg' className='w-full h-full object-cover' />
                </div>
            </div>
        </section>
    )
}

const OurMission = () => {
    return (
        <>
            <section className='max-w-7xl mx-auto text-center  px-2 sm:px-0'>
                <h2 className='h2'>Who are we?</h2>
                <p className='c3 text-primary-100' >At PORTALIZED, we recognize the critical role of the transfer portal in shaping the futures of student-athletes. Our app is designed as the ultimate platform for players to easily and efficiently announce their entry into the transfer portal, all while respecting established processes and guidelines.</p>
                <p className='c3 text-primary-100 mt-10' >We are committed to promoting transparency and integrity in collegiate athletics. PORTALIZED not only empowers student-athletes by giving them a voice in their athletic journey but also serves as the ultimate tool for colleges to monitor the portal year-round.</p>

            </section>
            <section className='max-w-7xl mx-auto text-center px-2 sm:px-0'>
                <h2 className='h2'>Our Mission</h2>
                <p className='c3 text-primary-100' >Our mission is to simplify the transfer process for everyone involved, fostering an environment where student-athletes can make informed decisions and institutions can stay connected.</p>
                <p className='c3 text-primary-100' >Join us at PORTALIZED as we transform the transfer landscape—supporting the success and well-being of student-athletes everywhere while upholding the values of collegiate sports.</p>
            </section>
            <section className='bg-primary-300 px-2 sm:px-0'>
                <div className=' md:p-[80px] max-w-8xl  mx-auto'>
                    <h2 className='h2 text-center '>
                        We are a nationwide sports movement, poised to revolutionize the landscape of college sports as a whole. At our core, we are driven by a passion for empowering Student Athletes to claim autonomy over their careers by breaking down systems and institutions that inhibit their right to capitalize on their abilities and make their own decisions and reshaping the way they navigate their collegiate careers.
                        POWER TO THE PLAYERS!
                    </h2>
                </div>
            </section>

        </>
    )

}

function Founder () {


    return (

        <section className='max-w-7xl mx-auto text-center  px-2 sm:px-0'>
            <h2 className='h2 mb-6'>Meet PORTALIZED Founder</h2>
            <div className='grid md:grid-cols-2  w-full gap-10  '>
                <div className='rounded-full flex justify-end relative  ' >
                    <img  src={'/assets/user.avif'}  className='rounded-full md:w-[512px] md:h-[512px] ' />
                </div>
                <div className=''>
                    <h1 className=' text-[50px] sm:text-[100px]  md:text-[140px] font-light text-center  md:text-left'>
                        ADAM <br/> WIILSON
                    </h1>
                    <p className='b3 text-light text-center  md:text-left  ' >Founder OF PORTALIZED</p>
                </div>
            </div>

            <div className='flex flex-col gap-2 text-primary-100     '>
            <p className='c3 mt-5 text-left' >
            Adam Wilson is a globally renowned NBA trainer with over 20 years of experience, recognized for his exceptional ability to coach athletes at every level. 
            With a reputation that spans the globe, Adam has dedicated his career to maximizing player potential and transforming the landscape of basketball training.
            </p>
            <p className='c3 mt-5 text-left' >
                As the founder of PORTALIZED, Adam has embarked on an exciting pivot in his career by creating the "Portal Verse," a revolutionary platform that serves as a comprehensive resource for athletes navigating the NCAA transfer portal. His innovative mobile app provides the most cutting-edge way for players to announce their entry into the transfer portal, while his engaging docuseries stands as the definitive show for college athletics.
            </p>
            <p className='c3 mt-5 text-left' >
                    In addition, PORTALIZED offers a unique line of merchandise designed as the uniform for all athletes, fostering a sense of community and identity. Adam’s podcast serves as a powerful voice for athletes, addressing their experiences and challenges in a rapidly evolving collegiate landscape. With his extensive background and insights, Adam Wilson is at the forefront of the changes in college athletics, leading the charge to empower athletes through the groundbreaking initiatives of PORTALIZED. Join him on this transformative journey!
            </p>


            </div>
         


        </section>
    )
}


const PlayStoreCta = () => {
    return (

        <section className='bg-primary-300 p-8'>
            <div className='max-w-8xl mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2'>
                    <div className='flex flex-col justify-center items-center md:items-start     gap-6'>
                        <h1 className='top-heading font-light'>
                            Love our Application? Download Now
                        </h1>
                        <p className='c6'>Portalized provides a safe platform for Coaches and Athletes.</p>
                        <div className='flex flex-col gap-10'>
                            <div className='flex  gap-4'>
                                <a href='https://apps.apple.com' target='_blank' rel='noopener noreferrer'>
                                    <img src='/assets/apple-store.png' alt='Download on the Apple App Store' />
                                </a>
                                <a href='https://play.google.com/store' target='_blank' rel='noopener noreferrer'>
                                    <img src='/assets/google-store.png' alt='Get it on Google Play' />
                                </a>
                            </div></div>




                    </div>
                    <ContactFrom/>
                </div>
            </div>
        </section>

    )
}
