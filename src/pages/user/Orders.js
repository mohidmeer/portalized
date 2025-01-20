import React, { useState } from 'react'
import { Tab, TabGroup, TabList, TabPanel, TabPanels } from '@headlessui/react'
import Button from '../../components/ui/button'

const Orders = () => {

    const mockData = {
        completed: [
            {
                id: '1',
                name: 'Khaleesi Signed T-Shirt',
                price: 150,
                dateOfOrder: 'Thu 19 Feb, 2024 10:30 pm',
                dateOfReceival: 'Thu 19 Feb, 2024 10:30 pm',
                imgSrc: '/assets/product.jpg'
            },
            {
                id: '1',
                name: 'Khaleesi Signed T-Shirt',
                price: 150,
                dateOfOrder: 'Thu 19 Feb, 2024 10:30 pm',
                dateOfReceival: 'Thu 19 Feb, 2024 10:30 pm',
                imgSrc: '/assets/product.jpg'
            },
            {
                id: '1',
                name: 'Khaleesi Signed T-Shirt',
                price: 150,
                dateOfOrder: 'Thu 19 Feb, 2024 10:30 pm',
                dateOfReceival: 'Thu 19 Feb, 2024 10:30 pm',
                imgSrc: '/assets/product.jpg'
            },
        ],
        inProgress: [
            {
                id: '1',
                name: 'Khaleesi Signed T-Shirt',
                price: 150,
                dateOfOrder: 'Thu 19 Feb, 2024 10:30 pm',
                estimatedReceival: 'Thu 19 Feb, 2024 10:30 pm',
                imgSrc: '/assets/product.jpg'
            },
            {
                id: '1',
                name: 'Khaleesi Signed T-Shirt',
                price: 150,
                dateOfOrder: 'Thu 19 Feb, 2024 10:30 pm',
                estimatedReceival: 'Thu 19 Feb, 2024 10:30 pm',
                imgSrc: '/assets/product.jpg'
            },
            {
                id: '1',
                name: 'Khaleesi Signed T-Shirt',
                price: 150,
                dateOfOrder: 'Thu 19 Feb, 2024 10:30 pm',
                estimatedReceival: 'Thu 19 Feb, 2024 10:30 pm',
                imgSrc: '/assets/product.jpg'
            },
        ],
    }



    const [data, setData] = useState(mockData)

    return (
        <div className='flex flex-col gap-y-[100px]' >

            <section className="max-w-7xl mx-auto w-full mt-10">
                <h5 className="h5 ml-2">Orders</h5>

                <div className="mt-10">
                    <TabGroup>
                        <TabList className={'flex gap-10'}>
                            <Tab className="py-1 px-3  focus:outline-none data-[selected]:border-white text-primary-100 data-[selected]:text-white border-transparent h10 border-b-2 " >
                                Completed
                            </Tab>
                            <Tab className="py-1 px-3  focus:outline-none data-[selected]:border-white text-primary-100 data-[selected]:text-white border-transparent h10 border-b-2 " >
                                On Going
                            </Tab>
                            <Tab className="py-1 px-3  focus:outline-none data-[selected]:border-white text-primary-100 data-[selected]:text-white border-transparent h10 border-b-2 " >
                                Canceled
                            </Tab>

                        </TabList>
                        <TabPanels>
                            <TabPanel>
                                <div className='flex flex-col mt-5 gap-6'>
                                    {
                                        data.completed.map((product) => (

                                            <div className='flex justify-between items-center bg-black p-3 rounded-3xl' key={product.id}>
                                                <div className='flex gap-4  overflow-hidden' >
                                                    <div className='w-60  h-60 relative rounded-xl overflow-hidden  '>
                                                        <img src={product.imgSrc} className='fill object-cover w-full h-full' />
                                                    </div>
                                                    <div className='flex flex-col gap-3'>
                                                        <div className='flex gap-10 text-primary-100 h8'>
                                                            <p>Ordered: {product.dateOfOrder}</p>
                                                            <p>Received: {product.dateOfReceival}</p>
                                                        </div>
                                                        <h5 className='h5' >{product.name}</h5>
                                                        <p className='h5'>${product.price}</p>
                                                        <p className='text-green-500' >Received</p>
                                                        <Button className='!text-[17px] !max-w-fit mb-1 ' >
                                                            Buy Again
                                                        </Button>
                                                    </div>

                                                </div>
                                                <div className='flex flex-col gap-2 justify-center items-center'>


                                                    <Button className='!text-[17px] !max-w-fit ' >
                                                        Write Review
                                                    </Button>
                                                    <button className='!text-[17px] !max-w-fit p-4  font-light' >
                                                        Request Refund  
                                                    </button>


                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </TabPanel>
                            <TabPanel>
                                <div className='flex flex-col mt-5 gap-6'>
                                    {
                                        data.inProgress.map((product) => (

                                            <div className='flex justify-between items-center bg-black p-3 rounded-3xl' key={product.id}>
                                                <div className='flex gap-4  overflow-hidden' >
                                                    <div className='w-60  h-60 relative rounded-xl overflow-hidden  '>
                                                        <img src={product.imgSrc} className='fill object-cover w-full h-full' />
                                                    </div>
                                                    <div className='flex flex-col gap-3'>
                                                    <p className='text-primary-100 h8' >Ordered: {product.dateOfOrder}</p>
                                                    <p className='text-primary-100 h8'>Estimated Delivery: {product.estimatedReceival}</p>
                                                        <h5 className='h5' >{product.name}</h5>
                                                        <p className='h5'>${product.price}</p>
                                                        <p className='text-green-500' >On the way</p>
                                                       
                                                    </div>

                                                </div>
                                                <div className='flex flex-col gap-2 justify-center items-center'>


                                                    <Button className='!text-[17px] !max-w-fit ' >
                                                        Track Order
                                                    </Button>
                                                    <button className='!text-[17px] !max-w-fit p-4  font-light text-red-600 ' >
                                                        Cancel Order  
                                                    </button>


                                                </div>
                                            </div>
                                        ))
                                    }

                                </div>
                            </TabPanel>
                            

                        </TabPanels>
                    </TabGroup>
                </div>


            </section>

        </div>
    )
}

export default Orders
