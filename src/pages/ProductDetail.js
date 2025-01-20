import React, { useEffect, useState } from 'react'
import { MdStar } from 'react-icons/md';
import { useParams } from 'react-router-dom';
import Button from '../components/ui/button';
import { TfiReload } from 'react-icons/tfi';
import { useDispatch, useSelector } from 'react-redux';
import { addToCart } from '../store/slices/cartSlice';

const ProductDetail = () => {
    const dispatch = useDispatch();
    const cartItems = useSelector((state) => state.cart.cartItems);
    const { slug } = useParams();
    const [product, setProduct] = useState(null);
    const [productImage, setProductImage] = useState(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const mockProduct = {
                    id: 1,
                    name: 'Khaleesi Signed T-Shirt',
                    price: '150',
                    description: 'Farm-to-table next xoxo hashtag vice iceland gentrify banh deep. Godard jean normcore williamsburg level sus park bitters bitters artisan. Bushwick gluten-free trust toast schlitz. Semiotics bag cloud pop-up air blue hashtag activated same. Hella crucifix listicle charcoal slow-carb vexillologist bottle braid. Semiotics book salvia you etsy. Godard pack pin jianbing plant park vice gentrify. Taiyaki yolo carry fit portland ',
                    owner: 'Khaleesi North',
                    rating: '4.5',
                    totalReviews: '15',
                    images: ['/assets/product.jpg', '/assets/product2.png', '/assets/product.jpg', '/assets/product2.png'],
                    reviews: [
                        {
                            id: 1,
                            reviewerName: 'John Doe',
                            rating: 4.5,
                            avatar: '/assets/user.avif',
                            reviewText:
                                'Farm-to-table next xoxo hashtag vice iceland gentrify banh deep. Godard jean normcore williamsburg level sus park bitters bitters artisan.',
                        },
                        {
                            id: 2,
                            reviewerName: 'Jane Smith',
                            rating: 4.0,
                            avatar: '/assets/user.avif',
                            reviewText:
                                'Bushwick gluten-free trust toast schlitz. Semiotics bag cloud pop-up air blue hashtag activated same. Hella crucifix listicle charcoal slow-carb vexillologist bottle braid.',
                        },
                        {
                            id: 3,
                            reviewerName: 'Emily Davis',
                            rating: 5.0,
                            avatar: '/assets/user.avif',
                            reviewText:
                                'Semiotics book salvia you etsy. Godard pack pin jianbing plant park vice gentrify. Taiyaki yolo carry fit portland.',
                        },
                    ]
                };
                setProduct(mockProduct);
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchData();
    }, [slug]);

    useEffect(() => {
        if (product) {
            setProductImage(product.images[0]);
        }
    }, [product]);

    const handleLoadMore = () => {
        const duplicatedReviews = [...product.reviews, ...product.reviews];
        setProduct({ ...product, reviews: duplicatedReviews });
    }

    const handleAddToCart = () => {
        dispatch(addToCart({ id: product.id, name: product.name, price: product.price, quantity: 1 , image:product.images[0] }));
        
        console.log(cartItems)
      };

    if (!product) return <p>Loading...</p>;
    return (
        <div className='flex flex-col gap-y-[100px]' >
            <section className='max-w-7xl mx-auto w-full py-20' >
                <div className='grid grid-cols-3 gap-x-20'>
                    <div className='col-span-2'>
                        <div className='h-[500px] relative flex items-start justify-start rounded-2xl overflow-hidden'>
                            <img src={productImage} className='h-full w-full object-cover' />
                        </div>
                        <div className="mt-4 flex gap-4">
                            {product?.images.map((image, index) => (
                                <button
                                    key={index}
                                    onClick={() => setProductImage(image)}
                                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 ${productImage === image ? 'border-primary-200' : 'border-gray-300'
                                        }`}
                                >
                                    <img src={image} alt={`Thumbnail ${index + 1}`} className="h-full w-full object-cover" />
                                </button>
                            ))}
                        </div>

                    </div>
                    <div className='flex flex-col gap-3'>
                        <h4 className='h4'>{product.name}</h4>
                        <p className='b4 flex items-center gap-2 '>{product.rating} <MdStar className='text-yellow-500' /> ({product.totalReviews})</p>
                        <h4 className='h4'>${product.price}</h4>
                        <p className='b6 text-primary-100'>{product.description}</p>
                        <Button onClick={handleAddToCart} className='!bg-black !text-white' >
                            Add to Cart
                        </Button>
                        <Button>
                            Buy Now
                        </Button>
                    </div>

                </div>
            </section>
            {/* REVIEWS */}
            <section className='max-w-7xl mx-auto w-full  ' >
                <div className='flex justify-between items-center' >
                    <div>
                        <h5 className='h5'>Reviews</h5>
                        <p className='b4 flex items-center gap-2 '>{product.rating} <MdStar className='text-yellow-500' /> ({product.totalReviews})</p>
                    </div>
                    <button  className='flex items-center gap-4 bg-black text-white py-4 px-8 h7 mt-10 rounded-xl border mx-w-fit '>
                        Add Review  
                    </button>
                </div>
                <div className='flex flex-col gap-9 mt-10'>
                    {product.reviews.map((review) => (
                        <div key={review.id} className="">
                            <div className="flex gap-2 items-center">
                                <div className="w-14 h-14">
                                    <img
                                        className="rounded-full object-cover"
                                        src={review.avatar}
                                        alt={review.reviewerName}
                                    />
                                </div>
                                <div>
                                    <p className="b5">{review.reviewerName}</p>
                                    <p className="b7 flex items-center gap-1">
                                        {review.rating} <MdStar className="text-yellow-500" />
                                    </p>
                                </div>
                            </div>
                            <p className="text-primary-100 b6 mt-6">{review.reviewText}</p>
                        </div>
                    ))}

                </div>

                <div className='flex justify-center items-center'>
                    <button onClick={handleLoadMore} className='flex items-center gap-4 bg-black text-white py-4 px-8 h7 mt-10 rounded-xl border mx-w-fit '>
                        Read More <span> <TfiReload />    </span>
                    </button>
                </div>

            </section>

        </div>
    )
}

export default ProductDetail


