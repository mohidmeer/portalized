import React, { useState } from 'react'
import Button from '../../components/ui/button'

const Followings = () => {


    const mockData = [

        { id: 1, name: "John Doe", follower: "150k", totalVideos: 120, title: "vlogger", backgroundArt: "/assets/podcast.jpg", profileImg: "/assets/user.avif" },
        { id: 2, name: "Jane Smith", follower: "220k", totalVideos: 85, title: "coach", backgroundArt: "/assets/podcast.jpg", profileImg: "/assets/user.avif" },
        { id: 3, name: "Alex Johnson", follower: "95k", totalVideos: 45, title: "blogger", backgroundArt: "/assets/podcast.jpg", profileImg: "/assets/user.avif" },
        { id: 4, name: "Emily Davis", follower: "330k", totalVideos: 200, title: "traveler", backgroundArt: "/assets/podcast.jpg", profileImg: "/assets/user.avif" },
        { id: 5, name: "Chris Lee", follower: "200k", totalVideos: 65, title: "streamer", backgroundArt: "/assets/podcast.jpg", profileImg: "/assets/user.avif" },
        { id: 6, name: "Sophia Brown", follower: "180k", totalVideos: 50, title: "artist", backgroundArt: "/assets/podcast.jpg", profileImg: "/assets/user.avif" },
        { id: 7, name: "Liam Wilson", follower: "250k", totalVideos: 90, title: "creator", backgroundArt: "/assets/podcast.jpg", profileImg: "/assets/user.avif" },
        { id: 8, name: "Olivia Martinez", follower: "400k", totalVideos: 300, title: "chef", backgroundArt: "/assets/podcast.jpg", profileImg: "/assets/user.avif" },
        { id: 9, name: "Noah Anderson", follower: "75k", totalVideos: 35, title: "musician", backgroundArt: "/assets/podcast.jpg", profileImg: "/assets/user.avif" },
        

    ]


    const [data, setData] = useState(mockData)
    return (
        <div className='flex flex-col gap-y-[100px]' >
            <section className="max-w-7xl mx-auto w-full mt-10">
                <h5 className="h5 ml-2">Followings</h5>
                <div className='grid grid-cols-3 gap-9 mt-10'>
                    {data.map((item) => (
                        <div className="overflow-hidden flex flex-col justify-center items-center w-full  rounded-2xl shadow-md hover:shadow-lg bg-black" key={item.id} >
                            <div className='h-[150px] overflow-hidden relative w-full'>
                                <img src={item.backgroundArt} className='object-cover w-full h-full ' />
                            </div>
                            <div className='w-28 h-28 rounded-full overflow-hidden  -translate-y-12 -mb-6 '>
                                <img className='' src={item.profileImg} />
                            </div>
                            <div className='p-4 '>
                                <h3 className="text-center h8">{item.name}</h3>
                                <div className="mt-2 flex gap-2 b7 whitespace-nowrap justify-center items-center   ">
                                    <p>{item.follower} Followers</p>•
                                    <p>Total Videos: {item.totalVideos}</p>•
                                    <p className="">{item.title}</p>
                                </div>
                                <Button className='!w-full py-2 px-4 mt-4 !bg-primary-200 !text-[17px] text-white'>
                                    Unfollow
                                </Button>
                            </div>
                        </div>
                    ))}


                </div>
            </section>


        </div>
    )
}

export default Followings
