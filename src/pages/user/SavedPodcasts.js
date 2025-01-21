import React, { useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import SeriesCard from '../../components/SeriesCard'
import PodcastCard from '../../components/PodcastCard'
const SavedPodcasts = () => {



    const mockData = {
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



    const [data,setData] = useState(mockData)




    return (
        <div className='flex flex-col gap-y-[100px]' >
            <section className="max-w-7xl mx-auto w-full mt-10 px-2 md:px-0">
                <h5 className="h5 ml-2">Saved Podcasts</h5>
                <TabGroup>
                    <TabList className={'my-10'} >
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
                                {data.podcasts.map((video) => (
                                    <PodcastCard
                                        key={video.id}
                                        name={video.name}
                                        description={video.description}
                                        owner={video.owner}
                                        followers="12.6k"
                                        views="13M"
                                        action={true}
                                    />
                                ))}
                            </div>
                        </TabPanel>
                        <TabPanel>
                            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-9 gap-y-12 mt-9">
                                {data.series.map((video) => (
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
            </section>

        </div>
    )
}

export default SavedPodcasts
