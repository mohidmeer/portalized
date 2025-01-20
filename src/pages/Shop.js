import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/ui/input'
import Button from '../components/ui/button'
import { IoSearch } from 'react-icons/io5'
import ProductCard from '../components/ProductCard'

const  Shop  = () => {
    return (
        <div className='flex flex-col gap-y-[100px]' >
            <Hero />
            <Merchandise/>
        
        </div>
    )
}

export default Shop




const Hero = () => {
    return (
        <section
            className="flex flex-col min-h-[50vh]  justify-center items-center  bg-portalized bg-no-repeat bg-top bg-[length:700px]  ">
            <div className="max-w-6xl mx-auto flex flex-col gap-6 items-center justify-center">
                <h1 className="h3 font-light text-center">
                    Find your favorite athlete or coach, Buy your favorite stuff to show your love.
                </h1>
                <p className="text-center text-primary-150 c5">
                Create your college account, add coaches, and unlock opportunities to connect with talented athletes. Empower sponsorships and build lasting success together.
                </p>
                <div className='max-w-3xl w-full'>
                    <Input Icon={IoSearch} placeholder='Search for your favorite athlete, coach or Topic' className='bg-primary-200 w-full' />
                </div>
            </div>
        </section>
    )
}


const Merchandise = () => {
    const sections = [
      {
        id: 1,
        title: "Trending Merchandise from Athletes",
        products: [
          {
            id: 1,
            name: "Khaleesi Signed T-Shirt",
            price: "$150",
            description:
              "Chartreuse hexagon aesthetic jianbing offal craft artisan. Man goth truffaut tousled cardigan. Bodega subway.",
            owner: "Khaleesi North",
          },
          {
            id: 2,
            name: "Jon Snow Training Hoodie",
            price: "$200",
            description:
              "Swag ethical book same food cray four plaid fit. Lightweight and perfect for cold weather workouts.",
            owner: "Jon Snow",
          },
          {
            id: 3,
            name: "Arya's Fitness Tracker Band",
            price: "$90",
            description:
              "Track your fitness with precision, featuring Arya's branding and top-notch durability.",
            owner: "Arya Stark",
          },
          {
            id: 4,
            name: "Khaleesi Signed T-Shirt",
            price: "$150",
            description:
              "Chartreuse hexagon aesthetic jianbing offal craft artisan. Man goth truffaut tousled cardigan. Bodega subway.",
            owner: "Khaleesi North",
          },
          {
            id: 5,
            name: "Jon Snow Training Hoodie",
            price: "$200",
            description:
              "Swag ethical book same food cray four plaid fit. Lightweight and perfect for cold weather workouts.",
            owner: "Jon Snow",
          },
          {
            id: 6,
            name: "Arya's Fitness Tracker Band",
            price: "$90",
            description:
              "Track your fitness with precision, featuring Arya's branding and top-notch durability.",
            owner: "Arya Stark",
          },
        ],
      },
      {
        id: 2,
        title: "Trending Merchandise from Coaches",
        products: [
          {
            id: 4,
            name: "Coach Playbook Notebook",
            price: "$25",
            description: "Premium notebook for planning strategies and game tactics.",
            owner: "Coach Lannister",
          },
          {
            id: 5,
            name: "Training Cap by Daenerys",
            price: "$30",
            description:
              "Stylish and comfortable cap, perfect for outdoor activities and training sessions.",
            owner: "Daenerys Targaryen",
          },
          {
            id: 6,
            name: "Coach Training Hoodie",
            price: "$60",
            description: "Lightweight hoodie for intense workouts, endorsed by coaches.",
            owner: "Coach Stark",
          },
          {
            id: 14,
            name: "Coach Playbook Notebook",
            price: "$25",
            description: "Premium notebook for planning strategies and game tactics.",
            owner: "Coach Lannister",
          },
          {
            id: 15,
            name: "Training Cap by Daenerys",
            price: "$30",
            description:
              "Stylish and comfortable cap, perfect for outdoor activities and training sessions.",
            owner: "Daenerys Targaryen",
          },
          {
            id: 16,
            name: "Coach Training Hoodie",
            price: "$60",
            description: "Lightweight hoodie for intense workouts, endorsed by coaches.",
            owner: "Coach Stark",
          },
        ],
      },
      {
        id: 3,
        title: "Other Merchandise",
        products: [
          {
            id: 7,
            name: "Custom Gym Bag",
            price: "$50",
            description: "Spacious bag for all your gym essentials, durable and stylish.",
            owner: "Merch Team",
          },
          {
            id: 8,
            name: "Sports Water Bottle",
            price: "$15",
            description: "Stay hydrated with this durable and eco-friendly water bottle.",
            owner: "Merch Team",
          },
          {
            id: 9,
            name: "Fitness Tracker Band",
            price: "$89",
            description: "Track your fitness goals effortlessly with this high-tech band.",
            owner: "Merch Team",
          },
          {
            id: 17,
            name: "Custom Gym Bag",
            price: "$50",
            description: "Spacious bag for all your gym essentials, durable and stylish.",
            owner: "Merch Team",
          },
          {
            id: 18,
            name: "Sports Water Bottle",
            price: "$15",
            description: "Stay hydrated with this durable and eco-friendly water bottle.",
            owner: "Merch Team",
          },
          {
            id: 19,
            name: "Fitness Tracker Band",
            price: "$89",
            description: "Track your fitness goals effortlessly with this high-tech band.",
            owner: "Merch Team",
          },
        ],
      },
    ];
  
    return (
      <section className="max-w-7xl mx-auto w-full">
        {sections
          .map((section) => (
            <div key={section.id} className="mb-12">
              <h3 className="h5">{section.title}</h3>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-x-9 gap-y-12 mt-9">
                {section.products.map((product) => (
                  <ProductCard
                    key={product.id}
                    name={product.name}
                    price={product.price}
                    description={product.description}
                    owner={product.owner}
                  />
                ))}
              </div>
            </div>
          ))}
      </section>
    );
  };