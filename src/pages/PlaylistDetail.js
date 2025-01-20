import React, { useEffect, useRef, useState } from 'react'
import { MdFullscreen } from 'react-icons/md'
import { TbRewindBackward10, TbRewindForward10 } from 'react-icons/tb'
import PodcastCard from '../components/PodcastCard'
import { BiDislike, BiLike } from 'react-icons/bi'
import { PiFlagPennant } from "react-icons/pi";
import Button from '../components/ui/button'
import { Link, useParams } from 'react-router-dom'

const PlaylistDetail = () => {

    const [clampDescription, setClampDescription] = useState(true)
    const [video, setVideo] = useState()

    const { slug } = useParams();


    useEffect(() => {
        const fetchData = async () => {
            try {
                const mockData =  {

                    src: 'http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ElephantsDream.mp4',
                    title: 'Let talk about future of sports and advantages of sports technology',
                    views: '100k',
                    likes: '10k',
                    dislikes: '250   ',
                    owner: {
                        name: 'Khalesi North',
                        followers: '12k'
                    },
                    description: "Neutra kale vice iPhone hell kinfolk. Copper vaporware activated offal aesthetic goth chips keffiyeh 90's mug. Pabst cred squid chillwave heirloom ipsum normcore af adaptogen trust. Paleo hoodie baby hot edison brooklyn. Pug adaptogen pork praxis ipsum pitchfork direct adaptogen 8-bit. Chia retro neutra carry asymmetrical godard unicorn street semiotics. Ipsum sartorial dollar sus vaporware scenester.Leggings LaCroix vinegar cred brooklyn cliche kombucha gluten-free. Kale sustainable coloring hipster loko master chips tbh. Before park mumblecore hammock tumeric same irony mumblecore. Brooklyn roof batch narwhal meggings williamsburg rights. Diy you they migas praxis. Retro chillwave authentic.",
                    comments: [
                        {
                            id: 1,
                            name: 'John Doe',
                            avatar: '/assets/user.avif',
                            comment:
                                'Farm-to-table next xoxo hashtag vice iceland gentrify banh deep. Godard jean normcore williamsburg level sus park bitters bitters artisan.',
                        },
                        {
                            id: 2,
                            name: 'John Doe',
                            avatar: '/assets/user.avif',
                            comment:
                                'Farm-to-table next xoxo hashtag vice iceland gentrify banh deep. Godard jean normcore williamsburg level sus park bitters bitters artisan.',
                        },
                        {
                            id: 3,
                            name: 'John Doe',
                            avatar: '/assets/user.avif',
                            comment:
                                'Farm-to-table next xoxo hashtag vice iceland gentrify banh deep. Godard jean normcore williamsburg level sus park bitters bitters artisan.',
                        },
            
                    ],
                    nextVideos: [
                        { id: 1, name: 'Do’s & Don’ts of Basketball', description: 'Chartreuse hexagon aesthetic jianbing offal craft artisan. Man goth truffaut tousled cardigan. Bodega subway.', owner: 'Khaleesi North' },
                        { id: 2, name: 'Winning Strategies in Soccer', description: 'Vaporware marfa direct chicharrones put quinoa man.', owner: 'Arya Stark' },
                        { id: 3, name: 'Training Like a Pro', description: 'Swag ethical book same food cray four plaid fit.', owner: 'Jon Snow' },
                        { id: 4, name: 'Secrets of the Gym', description: 'Man goth truffaut tousled cardigan. Bodega subway.', owner: 'Daenerys Targaryen' },
                    ],
                
                    
            
            
            
                }
                setVideo(mockData);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, [slug]);



    
    if (!video) return <p>Loading...</p>;

    
    return (
        <div className='my-[32px] flex flex-col gap-6 '>
            <section className='max-w-7xl mx-auto' >
                <div className='grid grid-cols-3 gap-4'>
                    <div className='col-span-2  '>
                        <VideoPlayer src={video.src} />
                        <div className='flex flex-col gap-3 my-8 ' >
                            <h4 className='h4'>{video.title}</h4>
                            <div className='flex gap-6 items-center b3 text-primary-100 '>
                                <p>{video.views} Views</p>
                                <p>1 month ago</p>
                            </div>
                            <div className='flex gap-8'>
                                <button className='flex flex-col justify-center items-center gap-2'>
                                    <BiLike size={24} />
                                    <span className='h9'>{video.likes}</span>
                                </button>
                                <button className='flex flex-col justify-center items-center gap-2'>
                                    <BiDislike size={24} />
                                    <span className='h9'>{video.dislikes}</span>
                                </button>
                                <button className='flex flex-col justify-center items-center gap-2'>
                                    <PiFlagPennant size={24} />
                                    <span className='h9' >Report</span>
                                </button>
                            </div>
                        </div>
                        <div className='flex justify-between items-center'>
                            <Link to={'/channel/khalesi-north'} className='flex gap-2 items-center'>
                                <div className='bg-primary-150 w-[58px] h-[58px] rounded-full overflow-hidden'>
                                    <img src='/assets/user.avif' alt='Khalesi North' className='' />
                                </div>
                                <div>
                                    <p className='h7'>{video.owner.name}</p>
                                    <p className='b7 text-primary-100'>{video.owner.followers} Followers</p>
                                </div>
                            </Link>
                            <Button className='max-w-fit'>
                                Follow
                            </Button>
                        </div>
                        <div className='mt-11'>
                            <h6 className='h7' >About this video</h6>
                            <div className='mt-3'>
                                <p className={` text-primary-100 b6 ${clampDescription && 'line-clamp-2'} `}>
                                    {
                                        video.description.length > 180 && clampDescription ?
                                            video.description.slice(0, 180) :
                                            video.description
                                    }
                                    {

                                        clampDescription ?

                                            <span className='text-white ml-2 cursor-pointer' onClick={() => { setClampDescription(false) }} >
                                                Read More

                                            </span> :
                                            <div className='text-white  cursor-pointer' onClick={() => { setClampDescription(true) }} >
                                                Show less
                                            </div>
                                    }

                                </p>

                            </div>
                        </div>
                        <div className='mt-11'>
                            <div className='flex justify-between'>
                                <h6 className='h7' >Comments ({video.comments.length})</h6>
                                <button className='h7'>
                                    See All
                                </button>
                            </div>
                            <div className='flex flex-col gap-9 mt-10'>
                                {video.comments.map((review) => (
                                    <div key={review.id} className="">
                                        <div className="flex gap-2 items-center">
                                            <div className="w-14 h-14">
                                                <img
                                                    className="rounded-full object-cover"
                                                    src={review.avatar}
                                                    alt={review.name}
                                                />
                                            </div>
                                            <div>
                                                <p className="b5">{review.name}</p>
                                                <p className="b7 text-primary-100">1 month ago</p>

                                            </div>
                                        </div>
                                        <p className="text-primary-100 b6 mt-2">{review.comment}</p>
                                    </div>
                                ))}

                            </div>

                        </div>
                    </div>
                    <div className='flex flex-col gap-3'>
                        <h6 className='h7'>Next</h6>
                        {video.nextVideos.map((podcast) => (
                            <PodcastCard layout={'list'} key={podcast.id} name={podcast.name} description={podcast.description} owner={podcast.owner} />
                        ))}
                    </div>

                </div>
            </section>
          
        </div>
    )
}

export default PlaylistDetail



const VideoPlayer = ({ src }) => {
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
        <section className="relative w-full  ">
            <video
                ref={videoRef}
                className="w-full rounded-3xl"
                src={src}
                onTimeUpdate={handleProgress}
                controls={false}
            >

            </video>

            <div className="absolute bottom-2 left-0 right-0   text-white  px-4 py-2 space-x-4 rounded-lg">
                <div className='relative '>
                    <div className='w-4 rounded-full h-4 bg-white absolute top-[7px] ' style={{
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
                        <p>{formatTime(currentTime)}</p>
                        <button
                            className=" !max-w-fit rounded-full"
                            onClick={togglePlayPause}
                        >
                            {isPlaying ? '❚❚' : '►'}
                        </button>
                        <div className="flex justify-between gap-6">
                            <button className="">
                                <TbRewindBackward10 onClick={rewind10Seconds} size={20} />
                            </button>

                            <button className="">
                                <TbRewindForward10 onClick={Forward10Seconds} size={20} />
                            </button>
                            <div className='text-xs font-bold'>

                            </div>

                        </div>
                    </div>
                    <div className="flex justify-between gap-4 items-center  rounded-xl">
                        <p>{formatTime(duration)}</p>

                        <button className="">
                            <MdFullscreen />
                        </button>
                    </div>
                </div>
            </div>

        </section>
    )
}






