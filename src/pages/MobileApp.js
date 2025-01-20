import React from 'react'
import { Link } from 'react-router-dom'
import { MdStar } from 'react-icons/md'
import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'

const MobileApp = () => {
    return (
        <div className='flex flex-col gap-y-[100px]' >
            <Hero />
            <Working />
            <Hero2 />
            <Features />
            <Testimonials />
            <Download/>


        </div>
    )
}

export default MobileApp

const Hero = () => {
    return (
        <>
            <section
                className="flex flex-col min-h-[50vh]  justify-center items-center  bg-portalized bg-no-repeat bg-top bg-[length:700px]  ">
                <div className="max-w-6xl mx-auto flex flex-col gap-6 items-center justify-center">
                    <h1 className="top-heading font-light text-center">
                        Are you ready to take control of your athletic journey
                    </h1>
                    <p className="text-center text-primary-150 c5">
                        Start your journey without any hustle, documentation. Register yourself and get started with the new beginning.
                    </p>
                    <Link to={'/login'} className="btn-link !max-w-fit !rounded-full !px-10">
                        Enter the Portal
                    </Link>
                </div>
            </section>
            <section className="flex flex-col   justify-center items-center h-[40vh]  ">
                <div className='relative'>
                    <img src="/assets/portalized.svg" alt="Example SVG" className="mt-10 h-[100px]" />
                    <img src="/assets/iphone.png" alt="Example SVG" className="absolute top-0 translate-y-[-45%] mx-auto" />
                </div>
            </section>

        </>
    )
}
const Hero2 = () => {
    return (

        <section className="flex flex-col justify-center items-center h-[60vh]">
            <div className="relative">
                <img
                    src="/assets/portalized.svg"
                    alt="Example SVG"
                    className="mt-10 h-[100px]"
                />
                <img
                    src="/assets/iphoneblack.png"
                    alt="iPhone Black"
                    className="absolute inset-0 mx-auto top-1/2 transform -translate-y-1/2"
                />
            </div>
        </section>
    )
}

const Working = () => {
    return (
        <>
                <section className='max-w-7xl mx-auto mt-[100px] '>
                    <h2 className='h2 text-center'>How it Works</h2>
                    <p className='b4 text-primary-100 text-center'>Mustache loko af street chartreuse. Taxidermy bicycle vaporware a plaid disrupt vexillologist mug. Flannel copper. </p>
                    <div className='grid grid-cols-3 gap-24 my-8 '>
                        <div className='flex flex-col gap-4 bg-primary-300 p-4 rounded-2xl relative   '>
                            <svg width="118" height="110" viewBox="0 0 118 110" className='border rounded-xl ' fill="none" xmlns="http://www.w3.org/2000/svg">
                                <rect width="117.333" height="110" rx="20" fill="#151515" />
                                <g clip-path="url(#clip0_10220_1830)">
                                    <path d="M58.6665 31.5996L31.6665 44.1996L38.8665 47.4396V53.5596C36.7065 54.2796 35.2665 56.4396 35.2665 58.5996C35.2665 60.7596 36.7065 62.9196 38.8665 63.6396V63.9996L35.6265 71.5596C34.5465 74.7996 35.2665 78.3996 40.6665 78.3996C46.0665 78.3996 46.7865 74.7996 45.7065 71.5596L42.4665 63.9996C44.6265 62.9196 46.0665 61.1196 46.0665 58.5996C46.0665 56.0796 44.6265 54.2796 42.4665 53.5596V49.2396L58.6665 56.7996L85.6665 44.1996L58.6665 31.5996ZM74.5065 54.9996L58.3065 62.1996L49.6665 58.2396V58.5996C49.6665 61.1196 48.5865 63.2796 46.7865 65.0796L48.9465 70.1196V70.4796C49.3065 71.9196 49.6665 73.3596 49.3065 74.7996C51.8265 75.8796 54.7065 76.5996 58.3065 76.5996C70.1865 76.5996 74.5065 69.3996 74.5065 65.7996V54.9996Z" fill="white" />
                                </g>
                                <defs>
                                    <clipPath id="clip0_10220_1830">
                                        <rect width="54" height="54" fill="white" transform="translate(31.6665 28)" />
                                    </clipPath>
                                </defs>
                            </svg>
                            <h6 className='h7' >
                                College
                            </h6>
                            <p className='c7 text-primary-100'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            </p>
                            <img src='/assets/arrow.png' className=' z-10 absolute  top-1/2  -translate-y-1/2 right-[-30%]  ' />
                        </div>
                        <div className='flex flex-col gap-4 bg-primary-300 p-4 rounded-2xl relative '>
                            <svg width="118" height="110" viewBox="0 0 118 110" fill="none" className='border rounded-xl' xmlns="http://www.w3.org/2000/svg">
                                <rect width="117.333" height="110" rx="20" fill="#151515" />
                                <path fill-rule="evenodd" clip-rule="evenodd" d="M41.6377 60.0636C42.279 59.2237 42.4695 58.1626 42.3167 57.1387C42.1071 55.719 42.1071 54.279 42.3167 52.8593C42.4695 51.8354 42.279 50.7761 41.6377 49.9344L40.4814 48.4171L40.4512 48.3782C39.9476 47.7186 39.5269 47.1651 39.2138 46.6806C38.8875 46.1748 38.6272 45.6673 38.5027 45.0872C38.3094 44.1883 38.3911 43.2565 38.7385 42.3993C38.9648 41.844 39.31 41.3843 39.7212 40.9351C40.1136 40.5071 40.6266 40.0261 41.2378 39.4532L41.2755 39.4178L42.047 38.6946L42.0847 38.6592C42.694 38.088 43.2089 37.6052 43.6635 37.2374C44.1426 36.8519 44.635 36.5283 45.2254 36.3179C46.1395 35.9916 47.1335 35.9144 48.0925 36.095C48.7131 36.2117 49.2544 36.4558 49.7939 36.7635C50.3089 37.0553 50.9011 37.4514 51.6047 37.9218L51.6462 37.9501L53.2646 39.0341C54.1625 39.6353 55.2924 39.8139 56.3845 39.6725C57.8989 39.476 59.4349 39.476 60.9493 39.6725C62.0433 39.8139 63.1713 39.6353 64.0692 39.0341L65.6876 37.9501L65.731 37.9218C66.4327 37.4514 67.025 37.0553 67.5399 36.7635C68.0794 36.4558 68.6208 36.2117 69.2395 36.095C70.1991 35.914 71.1937 35.9913 72.1085 36.3179C72.6989 36.5283 73.1912 36.8519 73.6684 37.2374C74.1249 37.6052 74.6399 38.0862 75.2491 38.6592L75.2869 38.6946L76.0602 39.4196L76.0961 39.4532C76.7072 40.0261 77.2203 40.5071 77.6126 40.9351C78.0238 41.3843 78.369 41.844 78.5935 42.3975C78.9415 43.2546 79.0238 44.1864 78.8312 45.0855C78.7067 45.669 78.4464 46.1748 78.12 46.6823C77.8069 47.1651 77.3844 47.7186 76.8826 48.3782L76.8525 48.4171L75.6962 49.9344C75.0548 50.7761 74.8643 51.8354 75.0152 52.8593C75.2248 54.279 75.2248 55.719 75.0152 57.1387C74.8643 58.1644 75.0548 59.2219 75.6962 60.0636L76.8525 61.5809L76.8826 61.6216C77.3863 62.2812 77.8069 62.8347 78.12 63.3175C78.4464 63.8232 78.7067 64.3307 78.8312 64.9108C79.0242 65.8104 78.9418 66.7429 78.5935 67.6005C78.369 68.154 78.0238 68.6155 77.6126 69.0647C77.2203 69.4926 76.7072 69.9736 76.0942 70.5466L76.0583 70.582L75.2869 71.3035L75.2491 71.3388C74.6399 71.9118 74.1249 72.3928 73.6684 72.7606C73.1912 73.1461 72.6989 73.4715 72.1085 73.6802C71.1945 74.007 70.2005 74.0848 69.2414 73.9047C68.6189 73.788 68.0794 73.5422 67.5381 73.2363C67.025 72.9445 66.4327 72.5466 65.731 72.078L65.6876 72.0479L64.0692 70.9657C63.1713 70.3644 62.0415 70.1841 60.9493 70.3255C59.4349 70.522 57.8989 70.522 56.3845 70.3255C55.2905 70.1841 54.1625 70.3644 53.2646 70.9657L51.6462 72.0497L51.6028 72.0762C50.9011 72.5484 50.3089 72.9427 49.7939 73.2363C49.2544 73.5422 48.7131 73.788 48.0944 73.9047C47.1348 74.0857 46.1401 74.0085 45.2254 73.6819C44.635 73.4697 44.1426 73.1461 43.6654 72.7606C43.1203 72.3042 42.5924 71.83 42.0828 71.3388L42.0451 71.3035L41.2755 70.5802L41.2378 70.5466C40.7139 70.0694 40.2081 69.5752 39.7212 69.0647C39.31 68.6155 38.9648 68.154 38.7404 67.6005C38.3924 66.7434 38.31 65.8116 38.5027 64.9125C38.6272 64.3307 38.8875 63.8232 39.2138 63.3175C39.5269 62.8347 39.9495 62.2812 40.4512 61.6198L40.4814 61.5809L41.6377 60.0654V60.0636ZM58.6669 60.3041C60.1677 60.3041 61.6071 59.7452 62.6683 58.7503C63.7295 57.7554 64.3257 56.406 64.3257 54.999C64.3257 53.592 63.7295 52.2426 62.6683 51.2477C61.6071 50.2528 60.1677 49.6939 58.6669 49.6939C57.1661 49.6939 55.7268 50.2528 54.6655 51.2477C53.6043 52.2426 53.0081 53.592 53.0081 54.999C53.0081 56.406 53.6043 57.7554 54.6655 58.7503C55.7268 59.7452 57.1661 60.3041 58.6669 60.3041Z" fill="white" />
                            </svg>

                            <h6 className='h7' >
                                Coach
                            </h6>
                            <p className='c7 text-primary-100'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            </p>
                            <img src='/assets/arrow.png' className=' z-10 absolute  top-1/2  -translate-y-1/2 right-[-30%] scale-y-[-1]  ' />
                        </div>
                        <div className='flex flex-col gap-4 bg-primary-300 p-4 rounded-2xl relative '>
                            <svg width="118" height="110" viewBox="0 0 118 110" fill="none" className='border rounded-xl ' xmlns="http://www.w3.org/2000/svg">
                                <rect width="117.333" height="110" rx="20" fill="#151515" />
                                <path d="M63.1665 43.75C66.2731 43.75 68.7915 41.2316 68.7915 38.125C68.7915 35.0184 66.2731 32.5 63.1665 32.5C60.0599 32.5 57.5415 35.0184 57.5415 38.125C57.5415 41.2316 60.0599 43.75 63.1665 43.75Z" fill="white" />
                                <path d="M64.2919 58.7125L53.9419 54.1C52.8169 53.5375 52.2544 55.225 51.6919 56.35C51.1294 57.475 47.0794 64.45 47.4169 65.6875C47.7544 66.7 48.6544 67.2625 49.5544 67.2625C49.7794 67.2625 50.0044 67.2625 50.2294 67.15L64.0669 62.875C64.9669 62.65 65.6419 61.75 65.6419 60.85C65.6419 59.95 65.0794 59.05 64.2919 58.7125Z" fill="white" />
                                <path d="M61.8161 45.0996L59.3411 43.9746C57.8786 43.2996 56.0786 43.9746 55.4036 45.4371L42.0161 74.2371C41.4536 75.3621 42.0161 76.7121 43.1411 77.2746C43.4786 77.3871 43.8161 77.4996 44.1536 77.4996C45.0536 77.4996 45.8411 77.0496 46.1786 76.2621C46.1786 76.2621 56.9786 61.2996 57.8786 59.4996C58.7786 57.6996 63.3911 49.0371 63.3911 49.0371C63.9536 47.5746 63.3911 45.7746 61.8161 45.0996Z" fill="white" />
                                <path d="M77.229 45.6625C76.4415 44.7625 74.979 44.5375 74.079 45.325L68.454 50.05L61.254 46.1125C60.0165 45.4375 58.329 45.6625 57.5415 47.125C56.6415 48.5875 57.0915 50.3875 58.4415 50.95L67.779 54.775C68.1165 54.8875 68.454 55 68.7915 55C69.354 55 69.804 54.775 70.254 54.4375L77.004 48.8125C77.904 48.025 78.0165 46.675 77.229 45.6625ZM44.829 53.9875L48.654 48.25L53.829 48.925L55.5165 45.4375C55.9665 44.425 56.8665 43.8625 57.879 43.75H47.529C46.7415 43.75 46.0665 44.0875 45.6165 44.7625L41.1165 51.5125C40.4415 52.525 40.6665 53.9875 41.7915 54.6625C42.0165 54.8875 42.4665 55 42.9165 55C43.5915 55 44.379 54.6625 44.829 53.9875Z" fill="white" />
                            </svg>

                            <h6 className='h7' >
                                Athlete
                            </h6>
                            <p className='c7 text-primary-100'>
                                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt
                            </p>

                        </div>

                    </div>
                    <div className='flex flex-col justify-center items-center'>
                        <Link className='flex items-center gap-2'>
                            <span>Learn More </span>
                            <svg width="28" height="26" viewBox="0 0 28 26" fill="none" className='' xmlns="http://www.w3.org/2000/svg">
                                <path d="M27.3332 13C27.3332 6.09476 21.3654 0.5 13.9998 0.5C6.63425 0.5 0.666504 6.09476 0.666504 13C0.666504 19.9052 6.63425 25.5 13.9998 25.5C21.3654 25.5 27.3332 19.9052 27.3332 13ZM3.24715 13C3.24715 7.43044 8.05898 2.91935 13.9998 2.91935C19.9407 2.91935 24.7525 7.43044 24.7525 13C24.7525 18.5696 19.9407 23.0806 13.9998 23.0806C8.05898 23.0806 3.24715 18.5696 3.24715 13ZM7.11812 14.0081V11.9919C7.11812 11.6593 7.40844 11.3871 7.76328 11.3871H13.9998V8.01008C13.9998 7.47077 14.6934 7.20363 15.102 7.58165L20.4246 12.5716C20.6773 12.8085 20.6773 13.1915 20.4246 13.4284L15.102 18.4183C14.6934 18.8014 13.9998 18.5292 13.9998 17.9899V14.6129H7.76328C7.40844 14.6129 7.11812 14.3407 7.11812 14.0081Z" fill="white" />
                            </svg>


                        </Link>
                    </div>
                </section>

                <section className='bg-primary-300  '>

                    <h2 className='h2 mx-auto max-w-7xl py-20 ' >Our goal is to give everyone the opportunity to take advantage of the most cutting-edge Platform on the market.</h2>

                </section>


        </>
    )
}

const Features = () => {
    return (
        <>
            <section className='bg-black '>
                <div className='max-w-8xl mx-auto   '>
                    <div className='grid grid-cols-10    ' >
                        <div className='col-span-6  flex flex-col gap-4 justify-center'>
                            <p className='b6 text-primary-100' >Features</p>
                            <h1 className='h1'>Coaches feature heading</h1>
                            <p className='text-primary-100'> Swag actually photo bun actually food seitan party vexillologist. Hashtag selfies poke vape flannel chicken mukbang. A listicle plant listicle tbh letterpress chia air bicycle. Food affogato iceland boys crucifix 8-bit vibecession waistcoat. Them pabst letterpress tousled chillwave. Skateboard palo sus sustainable yr microdosing a pin twee aesthetic. It green shoreditch gastropub beer portland book bread lo-fi lumbersexual. Af narwhal batch jianbing williamsburg. Glossier adaptogen vhs 90's same pork. V.</p>

                            <Link className='btn-link max-w-fit' to={'/login'} >
                                Get Started
                            </Link>
                        </div>
                        <div className='col-span-4 flex flex-col items-end' >
                            <img src='/assets/feature1.png' />
                        </div>
                    </div>
                </div>
            </section>
            <section className='bg-black '>
                <div className='max-w-8xl mx-auto   '>
                    <div className='grid grid-cols-10    ' >
                        <div className='col-span-4 flex flex-col items-start' >
                            <img src='/assets/feature2.png' />
                        </div>
                        <div className='col-span-6  flex flex-col gap-4 justify-center'>
                            <p className='b6 text-primary-100' >Features</p>
                            <h1 className='h1'>Athlete feature heading</h1>
                            <p className='text-primary-100'> Swag actually photo bun actually food seitan party vexillologist. Hashtag selfies poke vape flannel chicken mukbang. A listicle plant listicle tbh letterpress chia air bicycle. Food affogato iceland boys crucifix 8-bit vibecession waistcoat. Them pabst letterpress tousled chillwave. Skateboard palo sus sustainable yr microdosing a pin twee aesthetic. It green shoreditch gastropub beer portland book bread lo-fi lumbersexual. Af narwhal batch jianbing williamsburg. Glossier adaptogen vhs 90's same pork. V.</p>
                            <Link className='btn-link max-w-fit' to={'/login'} >
                                Get Started
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}


const Testimonials = () => {


    const testimonies = [
        {
            testimony: 'Build your financial literacy within a transparent community. Follow other investors, share insights with people from different professional backgrounds, and never be alone.',
            name: 'Jony Scotty',
            title: 'Football Player'
        },
        {
            testimony: 'This platform has helped me connect with like-minded individuals who share their valuable insights. It’s a great space for learning and growth.',
            name: 'Sarah Lee',
            title: 'Marketing Specialist'
        },
        {
            testimony: 'I’ve never felt more empowered with my financial decisions. The community’s transparency and support are unmatched!',
            name: 'Michael Green',
            title: 'Software Engineer'
        },
        {
            testimony: 'The ability to learn from professionals in different fields has expanded my perspective. I’m investing smarter because of this community.',
            name: 'Olivia Brown',
            title: 'Data Scientist'
        },
        {
            testimony: 'Being able to follow others and share ideas in a supportive environment has boosted my confidence as an investor.',
            name: 'James Dawson',
            title: 'Entrepreneur'
        },
        {
            testimony: 'I’ve gained so much knowledge from the discussions here. It’s been an invaluable resource for anyone looking to improve their financial literacy.',
            name: 'Emily Wang',
            title: 'Financial Analyst'
        },
        {
            testimony: 'This community is filled with people who genuinely want to help each other succeed. It’s a place where collaboration thrives.',
            name: 'David Kim',
            title: 'Project Manager'
        },
        {
            testimony: 'The transparency of the discussions and the quality of insights have helped me make informed decisions and build a solid investment strategy.',
            name: 'Rachel Adams',
            title: 'Product Designer'
        },
        {
            testimony: 'What I love most is the diverse range of professionals here. It makes the learning experience more comprehensive and enriching.',
            name: 'William Clark',
            title: 'Content Creator'
        },
        {
            testimony: 'This platform has truly transformed the way I approach investing. I feel more connected and informed every day.',
            name: 'Sophia Martinez',
            title: 'Financial Planner'
        }
    ];
    const positions = [
        { colStart: 7, rowStart: 8 },
        { colStart: 5, rowStart: 2 },
        { colStart: 3, rowStart: 4 },
        { colStart: 10, rowStart: 2 },
        { colStart: 12, rowStart: 1 },
        { colStart: 12, rowStart: 9 },
        { colStart: 7, rowStart: 1 },
    ];
    return (
        <section className=''>
            <p className='text-center flex justify-center items-center gap-2'>
                Trusted by 20,000+ Athletes & Coaches<span className='flex text-purple-700'>{Array(5).fill(<MdStar />).map((star, index) => star)} </span>
            </p>
            <h1 className='text-center h1 '>What our Users think about us?</h1>
            <div className='max-w-7xl mx-auto bg-dotmap h-[60vh]  bg-cover  bg-center flex flex-col justify-center items-center relative '>
                <div className=' h-[500px] w-[500px]  border-4 rounded-full justify-center items-center flex  '>
                    <TestimonialItem
                        name={testimonies[0].name}
                        testimony={testimonies[0].testimony}
                        title={testimonies[0].title}
                    />
                </div>
                <div className="grid grid-cols-12 absolute inset-0 grid-rows-8 gap-2">
                    {testimonies.map((testimonial, index) => {
                        const position = positions[index % positions.length];

                        return (
                            <div
                                key={index}
                                className=" p-2"
                                style={{
                                    gridColumnStart: position.colStart,
                                    gridRowStart: position.rowStart,
                                }}
                            >
                                <TestimonialItem
                                    name={testimonial.name}
                                    testimony={testimonial.testimony}
                                    title={testimonial.title}
                                />
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    )
}

const TestimonialItem = ({ testimony, name, title }) => {
    return (

        <Popover className={'realtive z-10'}  >
            <PopoverButton className="block  focus:outline-none data-headlessui-state  z-10 ">
                <div className=' rounded-full overflow-hidden border-2 bg-purple-500 ' >
                    <img src='/assets/user2.png' />
                </div>
            </PopoverButton>
            <PopoverPanel
                transition
                anchor="bottom"
                className=" transition duration-200 ease-in-out [--anchor-gap:var(--spacing-5)] data-[closed]:-translate-y-1 data-[closed]:opacity-0 max-w-xl mt-8  !overflow-visible">
                <div className='bg-white  text-black max-w-xl mx-auto p-4 rounded-xl flex flex-col gap-4 justify-center items-center relative z-20 ' >
                    <div className='bg-white rounded-xl p-8 rotate-45 absolute -top-4 left-1/2 transform -translate-x-1/2  ' />
                    <p className='c7 text-primary-100  text-center z-10' >{testimony}</p>
                    <h6 className='h7'>{name}</h6>
                    <p className='c8' >{title}</p>
                </div>
            </PopoverPanel>
        </Popover>

    )
}


const Download = () => {
    return (
        <section className='bg-download bg-cover '>
            <div className='flex flex-col gap-6 max-w-3xl mx-auto py-20 justify-center items-center'>
                <h1 className='top-heading font-light text-center'>
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
                    </div>
                </div>
            </div>
        </section>
    )
}

