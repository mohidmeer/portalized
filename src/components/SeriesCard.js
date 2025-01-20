import React from 'react'
import { Link } from 'react-router-dom'

const SeriesCard = ({ name, slug='/podcast/playlist/lets-talk-about-future-of-sports' , imgsrc = '/assets/podcast.jpg',totalVideos }) => {

    return (
        <Link to={slug} className='bg-black overflow-hidden rounded-3xl'>
            <div className='relative h-[250px] overflow-hidden'>
                <img src={imgsrc} alt={name} className='fill' />
            </div>
            <div className='flex flex-col p-4 gap-3'>
                <div className='flex flex-col gap-2'>
                    <h6 className='h7'>{name}</h6>
                </div>

                <div className='flex gap-2 items-center'>
                    <div>
                        <p className='b6'>{totalVideos} Videos</p>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default SeriesCard
