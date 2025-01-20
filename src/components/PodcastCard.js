import React from 'react'
import { BsThreeDotsVertical } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const PodcastCard = ({ action = false, name, slug = '/podcast/lets-talk-about-future-of-sports', imgsrc = '/assets/podcast.jpg', description, owner, views = '128k', followers = '12.6k', layout }) => {

    if (layout == 'list') {
        return (
            <Link to={slug} className=" w-full bg-primary-200 flex gap-2 rounded-xl overflow-hidden">
                <div className="relative h-[130px] w-[130px] overflow-hidden ">
                    <img
                        src={imgsrc}
                        alt={name}
                        className="h-full w-full object-cover"
                    />
                </div>
                <div className='py-2'>
                    <div className='flex flex-col  justify-between h-full  '>
                        <h6 className='h9'>{name}</h6>
                        <p className='flex items-center gap-2 b8'>
                            {views} Views
                        </p>

                        <div className='flex  items-center justify-between'>
                            <div className='flex gap-2 items-center'>
                                <div className='bg-primary-150 w-[32px] h-[32px] rounded-full overflow-hidden'>
                                    <img src='/assets/user.avif' alt={owner} className='' />
                                </div>
                                <div>
                                    <p className='b7'>{owner}</p>
                                </div>
                            </div>
                            {
                                action && <button> <BsThreeDotsVertical size={34} /></button>
                            }
                        </div>
                    </div>

                </div>
            </Link>
        )
    }



    return (
        <Link to={slug} className='bg-black overflow-hidden rounded-3xl'>
            <div className='relative h-[250px] overflow-hidden'>
                <img src={imgsrc} alt={name} className='fill' />
            </div>
            <div className='flex flex-col p-4 gap-3'>
                <div className='flex flex-col gap-2'>
                    <h6 className='h7'>{name}</h6>
                    <p className='flex items-center gap-2 b7'>
                        {views} Views
                    </p>
                </div>
                <p className='text-primary-100 c8'>{description}</p>
                <div className='flex items-center justify-between'>
                    <div className='flex gap-2 items-center'>
                        <div className='bg-primary-150 w-[48px] h-[48px] rounded-full overflow-hidden'>
                            <img src='/assets/user.avif' alt={owner} className='' />
                        </div>
                        <div>
                            <p className='b6'>{owner}</p>
                            <p className='b9 text-primary-100'>{followers} Followers</p>
                        </div>
                    </div>
                    {
                        action && <button> <BsThreeDotsVertical size={34} /></button>
                    }
                </div>
            </div>
        </Link>
    )
}

export default PodcastCard
