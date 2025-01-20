import React from 'react'
import { MdStar } from 'react-icons/md'
import { Link } from 'react-router-dom'
import { FaHeart } from "react-icons/fa";
import { BsThreeDotsVertical } from "react-icons/bs";

const ProductCard = ({ action=false, isLiked = false, slug = 'khalesi-signed-t-shirt', name, imgsrc = '/assets/product.jpg', description, owner, price, rating = '4.5', comments = '15' }) => {
    return (
        <Link to={'/product/' + slug} className='bg-black overflow-hidden rounded-3xl'>
            <div className='relative h-[250px] overflow-hidden'>
                <img src={imgsrc} alt={name} className='fill' />
            </div>
            <div className='flex flex-col p-4 gap-3'>
                <div className='flex flex-col gap-2'>
                    <div className='flex items-center justify-between'>
                        <h6 className='h7'>{name}</h6>
                        {isLiked && <FaHeart size={34} />}
                    </div>
                    <p className='flex items-center gap-2 b6'>
                        {rating} <span><MdStar className='text-yellow-500' size={24} /> </span>({comments})
                    </p>
                </div>
                <h6 className='h7'>{price}</h6>
                <p className='text-primary-100 c8'>{description}</p>
                <div className='flex gap-2 items-center justify-between'>
                    <div className='flex gap-2 items-center  '>
                        <div className='bg-primary-150 w-[48px] h-[48px] rounded-full overflow-hidden'>
                            <img src={'/assets/user.avif'} alt={owner} className='' />
                        </div>
                        <p className='b6'>{owner}</p>
                    </div>
                    {
                        action && <button> <BsThreeDotsVertical size={34}/></button>
                    }
                </div>
            </div>
        </Link>
    )
}

export default ProductCard
