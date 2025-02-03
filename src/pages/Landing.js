import React, { useEffect, useRef, useState } from 'react'
import Button from '../components/ui/button'
import { Link } from 'react-router-dom'
import { IoMdVolumeHigh } from "react-icons/io";
import { FaRegClosedCaptioning } from "react-icons/fa";
import { MdArrowForward, MdFullscreen, MdOutline1xMobiledata, MdStar } from "react-icons/md";
import { MdOutlineSettings } from "react-icons/md";
import { TbRewindBackward10, TbRewindForward10 } from "react-icons/tb";
import { BsFillQuestionCircleFill } from "react-icons/bs";
import PodcastCard from '../components/PodcastCard';
import ProductCard from '../components/ProductCard';
import Faqs from '../components/Faqs';

const Landing = () => {
    return (
        <div className='flex flex-col gap-y-[100px]' >
            <Hero />
            <VideoPlayer />
            <Cta />
            <Merchandise />
            <Trending />
            {/* <Vision/> */}
            {/* <Faqs/> */}
        </div>
    )
}

export default Landing

const Hero = () => {
    return (
        <section
            className="flex flex-col min-h-[80vh]  justify-center items-center  bg-portalized bg-no-repeat bg-top bg-[length:700px]  ">
            <div className="max-w-6xl mx-auto flex flex-col gap-6 items-center justify-center">
                <h1 className="top-heading font-light text-center">
                        Your Journey, Your Platform, Your Future
                </h1>
                <p className="text-center text-primary-150 c5">
                    Create your college account, add coaches, and unlock opportunities to connect with talented athletes. Empower sponsorships and build lasting success together.
                </p>
                <Link to={'/login'} className="btn-link !max-w-fit !rounded-full !px-10">
                    Let’s Get Started 
                </Link>
            </div>
            <img src="/assets/portalized.svg" alt="Example SVG" className="mt-10 h-[100px] md:px-0 px-4 " />
        </section>
    )
}
const VideoPlayer = () => {
    const videoRef = useRef(null);
    const [isPlaying, setIsPlaying] = useState(false);
    const [progress, setProgress] = useState(0);
    const [currentTime, setCurrentTime] = useState(0);
    const [duration, setDuration] = useState(0);

    useEffect(() => {
        if (videoRef.current) {
            const video = videoRef.current;

            const updateTime = () => {
                setCurrentTime(video.currentTime);
                setDuration(video.duration);
            };
            video.addEventListener('timeupdate', updateTime);
            return () => {
                video.removeEventListener('timeupdate', updateTime);
            };
        }
    }, []);

    const formatTime = (time) => {
        const minutes = Math.floor(time / 60);
        const seconds = Math.floor(time % 60);
        return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
    };

    const togglePlayPause = () => {
        if (isPlaying) {
            videoRef.current.pause();
        } else {
            videoRef.current.play();
        }
        setIsPlaying(!isPlaying);
    };

    const handleProgress = () => {
        const video = videoRef.current;
        const currentTime = video.currentTime;
        const duration = video.duration;
        setProgress((currentTime / duration) * 100);
    };

    const handleSeek = (e) => {
        const video = videoRef.current;
        const newTime = (e.target.value / 100) * video.duration;
        video.currentTime = newTime;
        setProgress(e.target.value);
    };


    const rewind10Seconds = () => {
        if (videoRef.current) {
            videoRef.current.currentTime -= 10;
        }
    };

    const Forward10Seconds = () => {
        if (videoRef.current) {
            videoRef.current.currentTime += 10;
        }
    };

    return (
        <section className="relative w-full bg-primary-300 mx-auto py-[50px]">
            <div className='max-w-7xl w-full mx-auto relative '>
                <video
                    ref={videoRef}
                    className="w-full rounded-lg"
                    src="http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4"
                    onTimeUpdate={handleProgress}
                    controls={false}
                >

                </video>

                <div className="absolute bottom-2 left-0 right-0   text-white  px-4 py-2 space-x-4 rounded-lg">
                    <div className='relative '>
                        <div className='w-1 rounded-full h-4 bg-white absolute top-[7px] ' style={{
                            left: progress + '%'
                        }} />
                        <input
                            type="range"
                            className="w-full h-1 appearance-none bg-gray-300 rounded-lg overflow-hidden"
                            value={progress}
                            onChange={handleSeek}
                            onInput={handleSeek}
                            style={{
                                background: `linear-gradient(to right, white ${progress}%, gray ${progress}%)`,
                            }}
                        />
                    </div>
                    <div className='justify-between flex items-center '>
                        <div className='flex items-center gap-6'>
                            <button
                                className=" text-white sm:text-black sm:py-2 sm:px-4 rounded-xl focus:ring-2 ring-white/30   !max-w-fit sm:bg-white   "
                                onClick={togglePlayPause}
                            >
                                {isPlaying ? '❚❚' : '►'}
                            </button>
                            <div className="flex justify-between gap-2 sm:gap-4 items-center sm:py-4 sm:px-6 bg-primary-300/30 sm:bg-primary-300 rounded-xl">
                                <button className="">
                                    <TbRewindBackward10 onClick={rewind10Seconds} size={20} />
                                </button>

                                <button className="">
                                    <TbRewindForward10 onClick={Forward10Seconds} size={20} />
                                </button>
                                <div className='text-xs font-bold'>
                                    <p>{`${formatTime(currentTime)} / ${formatTime(duration)}`}</p>
                                </div>

                            </div>
                        </div>
                        <div className="flex justify-between gap-2 sm:gap-4 items-center sm:py-4 sm:px-6 bg-primary-300/30 sm:bg-primary-300 rounded-xl">
                            <button className="">
                                <IoMdVolumeHigh />
                            </button>
                            <button className="">
                                <FaRegClosedCaptioning />
                            </button>
                            <button className="">
                                <MdOutline1xMobiledata />
                            </button>
                            <button className="">
                                <MdOutlineSettings />
                            </button>
                            <button className="">
                                <MdFullscreen />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
const Cta = () => {
    return (
        <section className=' md:h-[60vh] max-w-8xl mx-auto px-6 md:px-[80px] ' >
            <div className='grid grid-cols-1 md:grid-cols-2 w-full h-full '>
                <div className='h-full   flex flex-col gap-4   justify-center ' >
                    <h1 className='h1'>Portalized is here to bridge the gap between College, Athlete and Coaches.</h1>
                    <p className='b6'>Whether you're part of a college or not, there is an opportunity waiting for you through Portalized.</p>
                    <Link to={'/sign-up'} className="btn-link !max-w-fit !rounded-full !px-10">
                        Register Now
                    </Link>

                </div>
                <div className='h-full bg-portalizedcta bg-no-repeat bg-cover' />
            </div>

        </section>

    )

}
const Merchandise = () => {
    const products = [
        { id: 1, name: 'Khaleesi Signed T-Shirt', price: '$150', description: 'Chartreuse hexagon aesthetic jianbing offal craft artisan. Man goth truffaut tousled cardigan. Bodega subway.', owner: 'Khaleesi North' },
        { id: 2, name: 'Arya Stark Hoodie', price: '$120', description: 'Vaporware marfa direct chicharrones put quinoa man.', owner: 'Arya Stark' },
        { id: 3, name: 'Jon Snow Jacket', price: '$180', description: 'Swag ethical book same food cray four plaid fit.', owner: 'Jon Snow' },
        { id: 4, name: 'Daenerys Targaryen Cap', price: '$90', description: 'Man goth truffaut tousled cardigan. Bodega subway.', owner: 'Daenerys Targaryen' },
        { id: 5, name: 'Tyrion Lannister Shoes', price: '$130', description: 'Offal craft artisan. Man goth truffaut tousled cardigan.', owner: 'Tyrion Lannister' },
        { id: 6, name: 'Sansa Stark Scarf', price: '$70', description: 'Chartreuse hexagon aesthetic jianbing offal craft artisan.', owner: 'Sansa Stark' },
    ];

    return (
        <section className='bg-primary-300 py-12'>
            <div className='max-w-8xl mx-auto flex flex-col justify-center items-center'>
                <h1 className='text-center h1 p-2'>Portalized Merchandise</h1>
                <p className='p-2 c3 text-primary-100 text-center'>Swag ethical book same food cray four plaid fit. Vaporware marfa direct chicharrones put quinoa man. </p>

                <div className='grid  grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-[60px] sm:px-0 p-3 '>
                    {products.map((product) => (
                        <ProductCard key={product.id} name={product.name} price={product.price} description={product.description} owner={product.owner} />
                    ))}
                </div>

                <button className='flex items-center gap-4 bg-black text-white py-4 px-8 h7 mt-10 rounded-xl border mx-w-fit '>
                    Explore All <span> <MdArrowForward />    </span>
                </button>
            </div>
        </section>
    );
}

const Trending = () => {
    const podcasts = [
        { id: 1, name: 'Do’s & Don’ts of Basketball', description: 'Chartreuse hexagon aesthetic jianbing offal craft artisan. Man goth truffaut tousled cardigan. Bodega subway.', owner: 'Khaleesi North' },
        { id: 2, name: 'Winning Strategies in Soccer', description: 'Vaporware marfa direct chicharrones put quinoa man.', owner: 'Arya Stark' },
        { id: 3, name: 'Training Like a Pro', description: 'Swag ethical book same food cray four plaid fit.', owner: 'Jon Snow' },
        { id: 4, name: 'Secrets of the Gym', description: 'Man goth truffaut tousled cardigan. Bodega subway.', owner: 'Daenerys Targaryen' },
        { id: 5, name: 'Mastering Tennis Techniques', description: 'Offal craft artisan. Man goth truffaut tousled cardigan.', owner: 'Tyrion Lannister' },
        { id: 6, name: 'Mental Strength in Sports', description: 'Chartreuse hexagon aesthetic jianbing offal craft artisan.', owner: 'Sansa Stark' },
    ];

    return (
        <section className='bg-primary-300 py-12'>
            <div className='max-w-8xl mx-auto flex flex-col justify-center items-center'>
                <h1 className='text-center h1 p-2'>Portal News</h1>
                <p className='c3 text-primary-100 text-center p-2'>Listen to engaging discussions and insights from top athletes, coaches, and experts worldwide.</p>

                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-[60px] sm:px-0 p-3'>
                    {podcasts.map((podcast) => (
                        <PodcastCard key={podcast.id} name={podcast.name} description={podcast.description} owner={podcast.owner} />
                    ))}
                </div>
                <button className='flex items-center gap-4 bg-black text-white py-4 px-8 h7 mt-10 rounded-xl border max-w-fit'>
                    Explore All <span><MdArrowForward /></span>
                </button>
            </div>
        </section>
    );
}



const Vision = () => {

    return (
        <>
            {/* VISIOSN */}
            <section className='bg-primary-300 sm:p-0 p-3'>
                <div className='max-w-8xl mx-auto  py-12 '>
                    <div className='flex flex-col items-center justify-center'>
                        <h4 className='h8 text-center bg-white px-8 py-4 rounded-full max-w-fit text-black'>OUR VISION</h4>
                        <h5 className='h5 text-center mt-4 mb-[50px] text-primary-100'>
                            To Empower student athletes to claim autonomy over their careers by breaking down systems and institutions that inhibit their right to capitalize on their abilities and make their own decisions.
                        </h5>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-7 gap-8">
                        <div className="bg-black rounded-2xl col-span-1 md:col-span-2 flex flex-col justify-center items-center gap-6 p-8">
                            <img src="/assets/clients.svg" alt="Coaches" />
                            <h6 className="h8">Coaches</h6>
                            <p className="b6 text-primary-100">Coaches reach out to Athletes</p>
                        </div>

                        <div className="flex flex-col gap-8 col-span-1 md:col-span-3">
                            <div className="bg-black rounded-2xl w-full h-full flex gap-6 justify-center items-center p-8">
                                <img src="/assets/goals.svg" alt="Goals" />
                                <div className="flex flex-col gap-6">
                                    <h6 className="h8">Goals</h6>
                                    <p className="b6 text-primary-100">Together our platform helps you reach your goals.</p>
                                </div>
                            </div>

                            <div className="bg-black rounded-2xl w-full h-full flex gap-6 justify-center items-center p-8">
                                <img src="/assets/athlete.svg" alt="Athletes" />
                                <div className="flex flex-col gap-6">
                                    <h6 className="h8">Athletes</h6>
                                    <p className="b6 text-primary-100">Our platform provides a space for athletes to grow.</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-black rounded-2xl col-span-1 md:col-span-2 flex flex-col justify-center items-center gap-6 p-8">
                            <img src="/assets/achivements.svg" alt="Achievements" />
                            <h6 className="h8">Achievements</h6>
                            <p className="b6 text-center text-primary-100">Collaboration between coaches and athletes.</p>
                        </div>
                    </div>

                </div>
            </section>
            {/* ABOUT */}
            <section className='bg-primary-300'>
                <div className='p-2 sm:p-[80px] max-w-8xl  mx-auto'>
                    <h2 className='h2  text-center '>
                        We are a nationwide sports movement, poised to revolutionize the landscape of college sports as a whole. At our core, we are driven by a passion for empowering Student Athletes to claim autonomy over their careers by breaking down systems and institutions that inhibit their right to capitalize on their abilities and make their own decisions and reshaping the way they navigate their collegiate careers.
                        POWER TO THE PLAYERS!
                    </h2>
                </div>


            </section>

        </>



    )


}




