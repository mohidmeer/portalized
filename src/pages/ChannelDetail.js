import React, { useEffect, useRef, useState } from 'react'
import { MdFullscreen } from 'react-icons/md'
import { TbRewindBackward10, TbRewindForward10 } from 'react-icons/tb'
import PodcastCard from '../components/PodcastCard'
import { BiDislike, BiLike } from 'react-icons/bi'
import { PiFlagPennant } from "react-icons/pi";
import Button from '../components/ui/button'
import { useParams } from 'react-router-dom'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import SeriesCard from '../components/SeriesCard'
const ChannelDetail = () => {

    const [channel, setChannel] = useState()

    const { slug } = useParams();
    useEffect(() => {
        const fetchData = async () => {
            try {
                const mockData = {

                    backgroundArt: '/assets/channelbackground.png',
                    name: 'Pablo Sports',
                    followers: '12k',
                    totalVideos: '90',
                    about: "Neutra kale vice iPhone hell kinfolk. Copper vaporware activated offal aesthetic goth chips keffiyeh 90's mug. Pabst cred squid chillwave heirloom ipsum normcore af adaptogen trust. Paleo hoodie baby hot edison brooklyn. Pug adaptogen pork praxis ipsum pitchfork direct adaptogen 8-bit. Chia retro neutra carry asymmetrical godard unicorn street semiotics. Ipsum sartorial dollar sus vaporware scenester.Leggings LaCroix vinegar cred brooklyn cliche kombucha gluten-free. Kale sustainable coloring hipster loko master chips tbh. Before park mumblecore hammock tumeric same irony mumblecore. Brooklyn roof batch narwhal meggings williamsburg rights. Diy you they migas praxis. Retro chillwave authentic.",
                    podcasts: [
                        { id: 1, name: 'Do’s & Don’ts of Basketball', description: 'Chartreuse hexagon aesthetic jianbing offal craft artisan. Man goth truffaut tousled cardigan. Bodega subway.', owner: 'Khaleesi North' },
                        { id: 2, name: 'Winning Strategies in Soccer', description: 'Vaporware marfa direct chicharrones put quinoa man.', owner: 'Arya Stark' },
                        { id: 3, name: 'Training Like a Pro', description: 'Swag ethical book same food cray four plaid fit.', owner: 'Jon Snow' },
                        { id: 4, name: 'Secrets of the Gym', description: 'Man goth truffaut tousled cardigan. Bodega subway.', owner: 'Daenerys Targaryen' },
                        { id: 5, name: 'Secrets of the Gym', description: 'Man goth truffaut tousled cardigan. Bodega subway.', owner: 'Daenerys Targaryen' },
                        { id: 6, name: 'Secrets of the Gym', description: 'Man goth truffaut tousled cardigan. Bodega subway.', owner: 'Daenerys Targaryen' },
                    ],
                    series: [
                        { id: 1, name: 'Health and Wealth', totalVideos: 15 },
                        { id: 2, name: 'Coaching ', totalVideos: 19},
                        { id: 3, name: 'Atheltes', totalVideos: 25},
                
                    ],
                }
                setChannel(mockData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [slug]);

    if (!channel) return <p>Loading...</p>;


    return (
        <div className='my-[32px] flex flex-col gap-6 max-w-7xl mx-auto'>
            <div className=''>
                <div className='h-[30vh] relative rounded-2xl overflow-hidden   ' >
                    <img src={channel.backgroundArt} className='object-cover w-full h-full   ' />
                </div>
                <div className='mt-4 px-6 flex justify-between '>
                    <div className='flex gap-2'>
                        <div className='bg-primary-150 w-[60px] h-[60px] sm:w-[160px] sm:h-[160px] rounded-full overflow-hidden   sm:-translate-y-20  '>
                            <img src='/assets/user.avif' alt={channel.name} className='' />
                        </div>
                        <div>
                            <p className='h4'>{channel.name}</p>
                            <p className='b6 text-primary-100'>{channel.followers} Followers <span className='ml-2'>{channel.totalVideos} Videos</span></p>
                        </div>
                    </div>
                    <Button className='max-w-fit max-h-fit '>
                        Follow
                    </Button>
                </div>
                <div className='mt-4 px-2 md:px-0'>
                    <h6 className='h7' >About this Channel</h6>
                    <div className='mt-3'>
                        <p className={` text-primary-100 b6  `}> {channel.about}</p>

                    </div>
                </div>
            </div>
            <div className='px-2 md:px-0' >
                <TabGroup>
                    <TabList>
                        <Tab className="py-1 px-3  focus:outline-none data-[selected]:border-white data-[selected]:text-white text-primary-100 border-transparent b4 border-b-2 " >
                            Podcasts
                        </Tab>
                        <Tab className="py-1 px-3  focus:outline-none data-[selected]:border-white data-[selected]:text-white text-primary-100 border-transparent b4 border-b-2 " >
                            Series
                        </Tab>

                    </TabList>
                    <TabPanels>
                        <TabPanel>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-9 gap-y-12 mt-9">
                                {channel.podcasts.map((video) => (
                                    <PodcastCard
                                        key={video.id}
                                        name={video.name}
                                        description={video.description}
                                        owner={video.owner}
                                        followers="12.6k"
                                        views="13M"
                                    />
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-9 gap-y-12 mt-9">
                                {channel.series.map((video) => (
                                    <SeriesCard
                                        key={video.id}
                                        name={video.name}
                                        totalVideos={video.totalVideos}
                                    />
                                ))}
                            </div>

                        </TabPanel>
                    </TabPanels>
                </TabGroup>
            </div>
        </div>
    )
}

export default ChannelDetail













