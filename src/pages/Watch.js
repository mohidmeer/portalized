import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/ui/input'
import Button from '../components/ui/button'
import { IoSearch } from "react-icons/io5";
import { TfiReload } from "react-icons/tfi";

const Watch = () => {
    return (
        <div className='flex flex-col gap-y-[100px]' >
            <Hero />
            <FeaturedVideo />
            <TrendingTopics />
            <OurVideos />
        </div>
    )
}

export default Watch




const Hero = () => {
    return (
        <section
            className="flex flex-col min-h-[50vh]  justify-center items-center  bg-portalized bg-no-repeat bg-top bg-[length:700px] p-2  md:p-0  ">
            <div className="max-w-6xl mx-auto flex flex-col gap-6 items-center justify-center">
                <h1 className="top-heading font-light text-center">
                 Coming soon on YouTube<br/>
                </h1>
                <p className="text-center text-primary-150 c5">
                    Elevate your skills with expert advice and step-by-step guides tailored for athletes at every level. From training drills to mental strategies, these videos are your ultimate playbook to success.
                </p>
                <div className='max-w-3xl w-full'>
                    <Input Icon={IoSearch} placeholder='Search for your favorite athlete, coach or Topic' className='bg-primary-200 w-full' />
                </div>
            </div>
        </section>
    )
}


const FeaturedVideo = () => {
    return (
        <section className=" bg-primary-300 p-1 sm:p-8 ">
            <div className="relative max-w-7xl mx-auto w-full h-[50vh]  md:h-[70vh] rounded-xl overflow-hidden ">
                <iframe
                    src="https://youtu.be/HWx53vm4SZA"
                    title="Featured Video"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className=" w-full h-full"
                ></iframe>

            </div>
            <div className="w-full p-4  max-w-7xl mx-auto">
                <h3 className="h5 font-semibold">
                    What is PORTALIZED? How it can help athletes achieve their goals.
                </h3>
                <p className="text-sm b6 text-primary-100">
                    2 months ago • 150k Views • 20k Likes
                </p>
            </div>

        </section>
    )
}


const TrendingTopics = () => {

    const trendingtopics = [
        {
            title: "What is PORTALIZED? How it can help athletes achieve their goals.",
            time: "2 months ago",
            views: "150k Views",
            likes: "20k Likes",
            embedLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
            title: "Top 10 Exercises to Boost Your Athletic Performance.",
            time: "1 month ago",
            views: "200k Views",
            likes: "25k Likes",
            embedLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
            title: "The Science Behind Speed and Endurance Training.",
            time: "3 weeks ago",
            views: "100k Views",
            likes: "15k Likes",
            embedLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
       
    ];
    return (
        <section className='bg-primary-300 py-10'>
            <div className='text-center'>
                <h3 className='h3'>Trending Topics</h3>
                <p className='text-primary-100 c5'>Watch our most trending videos of all time.</p>
            </div>
            <div className='max-w-8xl mx-auto w-full mt-[50px]'>
                <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:px-0 px-3 '>
                    {trendingtopics.map((video, index) => (
                        <div key={index}>
                            <div className="relative mx-auto w-full rounded-xl overflow-hidden h-[380px]">
                                <iframe
                                    src={video.embedLink}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                            <div className="w-full p-4 max-w-7xl mx-auto">
                                <h6 className="h8 font-semibold">{video.title}</h6>
                                <p className="b6 text-primary-100">
                                    {video.time} • {video.views} • {video.likes}
                                </p>
                            </div>
                        </div>
                    ))}
                   

                </div>
            </div>
        </section>
    )
}
const OurVideos = () => {

    const [videos, setVideos] = useState([
        {
          title: "What is PORTALIZED? How it can help athletes achieve their goals.",
          time: "2 months ago",
          views: "150k Views",
          likes: "20k Likes",
          embedLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          title: "Top 10 Exercises to Boost Your Athletic Performance.",
          time: "1 month ago",
          views: "200k Views",
          likes: "25k Likes",
          embedLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
        {
          title: "The Science Behind Speed and Endurance Training.",
          time: "3 weeks ago",
          views: "100k Views",
          likes: "15k Likes",
          embedLink: "https://www.youtube.com/embed/dQw4w9WgXcQ",
        },
      ]);
    
      const handleLoadMore = () => {
        setVideos((prevVideos) => [...prevVideos, ...prevVideos]);
      };
    return (
        <section className='bg-primary-300 py-10'>
            <div className='text-center'>
                <h3 className='h3'>Watch our Videos</h3>
                <p className='text-primary-100 c5'>Watch our most trending videos of all time.</p>
            </div>
            <div className='max-w-8xl mx-auto w-full mt-[50px]'>
                <div className='grid grid-cols-1  sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:px-0 px-3'>
                    {   videos.map((video, index) => (
                        <div key={index}>
                            <div className="relative mx-auto w-full rounded-xl overflow-hidden h-[380px]">
                                <iframe
                                    src={video.embedLink}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    allowFullScreen
                                    className="w-full h-full"
                                ></iframe>
                            </div>
                            <div className="w-full p-4 max-w-7xl mx-auto">
                                <h6 className="h8 font-semibold">{video.title}</h6>
                                <p className="b6 text-primary-100">
                                    {video.time} • {video.views} • {video.likes}
                                </p>
                            </div>
                        </div>
                    ))}
                   

                </div>
            </div>
           <div className='flex justify-center items-center'>
                <button onClick={handleLoadMore}  className='flex items-center gap-4 bg-black text-white py-4 px-8 h7 mt-10 rounded-xl border mx-w-fit '>
                    Load More <span> <TfiReload/>    </span>
                </button>
           </div>
        </section>
    )
}