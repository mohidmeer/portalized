import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/ui/input'
import Button from '../components/ui/button'
import { IoSearch } from 'react-icons/io5'
import PodcastCard from '../components/PodcastCard'

const Listen = () => {


    return (
        <div className='flex flex-col gap-y-[100px] ' >
            <Hero />
            <Podcasts />
        </div>
    )
}

export default Listen




const Hero = () => {
    return (
        <section
            className="flex flex-col min-h-[50vh]  justify-center items-center  bg-portalized bg-no-repeat bg-top bg-[length:700px] sm:px-0 px-2  ">
            <div className="max-w-6xl mx-auto flex flex-col gap-6 items-center justify-center">
                <h1 className="h1 font-light text-center">
                    Listen to our conversation with Atheletes,<br/> Coaches and Parents
                </h1>
                {/* <p className="text-center text-primary-150 c5">
                    Elevate your skills with expert advice and step-by-step guides tailored for athletes at every level. From training drills to mental strategies, these videos are your ultimate playbook to success.
                </p> */}
                <div className='max-w-3xl w-full'>
                    <Input Icon={IoSearch} placeholder='Search for your favorite athlete, coach or Topic' className='bg-primary-200 w-full' />
                </div>
            </div>
        </section>
    )
}



const Podcasts = () => {

    const sections = [
        {
            id: 1,
            title: "Trending Topics",
            podcasts: [
                { id: 1, name: 'Do’s & Don’ts of Basketball', description: 'Chartreuse hexagon aesthetic jianbing offal craft artisan. Man goth truffaut tousled cardigan. Bodega subway.', owner: 'Khaleesi North' },
                { id: 2, name: 'Winning Strategies in Soccer', description: 'Vaporware marfa direct chicharrones put quinoa man.', owner: 'Arya Stark' },
                { id: 3, name: 'Training Like a Pro', description: 'Swag ethical book same food cray four plaid fit.', owner: 'Jon Snow' },
            ],
        },
        {
            id: 2,
            title: "From Top Creators",
            podcasts: [
                { id: 4, name: 'Secrets of the Gym', description: 'Man goth truffaut tousled cardigan. Bodega subway.', owner: 'Daenerys Targaryen' },
                { id: 5, name: 'Mastering Tennis Techniques', description: 'Offal craft artisan. Man goth truffaut tousled cardigan.', owner: 'Tyrion Lannister' },
                { id: 6, name: 'Mental Strength in Sports', description: 'Chartreuse hexagon aesthetic jianbing offal craft artisan.', owner: 'Sansa Stark' },
            ],
        },
        {
            id: 3,
            title: "Other Podcast",
            podcasts: [
                { id: 7, name: 'Do’s & Don’ts of Basketball', description: 'Chartreuse hexagon aesthetic jianbing offal craft artisan. Man goth truffaut tousled cardigan. Bodega subway.', owner: 'Khaleesi North' },
                { id: 8, name: 'Winning Strategies in Soccer', description: 'Vaporware marfa direct chicharrones put quinoa man.', owner: 'Arya Stark' },
                { id: 9, name: 'Training Like a Pro', description: 'Swag ethical book same food cray four plaid fit.', owner: 'Jon Snow' },
            ],
        },
    ];

    return (
        <>
            {sections.map((section) => (
                <section className="max-w-7xl mx-auto w-full sm:px-0 px-4">
                    <div key={section.id}>
                        <h3 className="h5">{section.title}</h3>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-9 gap-y-12 mt-9">
                            {section.podcasts.map((podcast) => (
                                <PodcastCard
                                    key={podcast.id}
                                    name={podcast.name}
                                    description={podcast.description}
                                    owner={podcast.owner}
                                    followers="12.6k"
                                    views="13M"
                                />
                            ))}
                        </div>
                    </div>
                </section>
            ))}
        </>
    )
}




