import React from 'react'
import { Link } from 'react-router-dom'
import Input from '../components/ui/input'
import Button from '../components/ui/button'
import { IoSearch } from 'react-icons/io5'
import ProductCard from '../components/ProductCard'

const Shop = () => {
  return (
    <div className='flex flex-col gap-y-[100px]' >
      <Hero />
      <Merchandise />

    </div>
  )
}

export default Shop




const Hero = () => {
  return (
    <section
      className="flex flex-col min-h-[50vh]  justify-center items-center  bg-portalized bg-no-repeat bg-top bg-[length:700px] sm:px-0 px-2  ">
      <div className="max-w-6xl mx-auto flex flex-col gap-6 items-center justify-center">
        <h1 className="h3 font-light text-center">
          Shop Our Exclusive Portalized Merchandise
        </h1>
        {/* <p className="text-center text-primary-150 c5">
          Create your college account, add coaches, and unlock opportunities to connect with talented athletes. Empower sponsorships and build lasting success together.
        </p> */}
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
          name: "Khaleesi Hoodie",
          price: "$150",
          description: "A premium hoodie signed by Khaleesi, designed for ultimate comfort and style. Soft fabric with a regal touch.",
          owner: "Khaleesi North",
          image: "/assets/products/p1.jpg",
        },
        {
          id: 2,
          name: "Jon Snow Training Hoodie",
          price: "$200",
          description: "Stay warm during harsh winters with this thick, breathable hoodie inspired by Jon Snow's resilience.",
          owner: "Jon Snow",
          image: "/assets/products/p2.jpg",
        },
        {
          id: 3,
          name: "Arya Stark Hoodie",
          price: "$90",
          description: "Lightweight yet durable, this hoodie embodies Arya’s fearless spirit. Perfect for everyday wear and training.",
          owner: "Arya Stark",
          image: "/assets/products/p3.jpg",
        },
        {
          id: 4,
          name: "Daenerys Targaryen Hoodie",
          price: "$150",
          description: "A fiery yet elegant hoodie inspired by Daenerys. Soft cotton blend with an embroidered dragon emblem.",
          owner: "Daenerys Targaryen",
          image: "/assets/products/p4.jpg",
        },
        {
          id: 5,
          name: "Tyrion Lannister Hoodie",
          price: "$130",
          description: "Smart and stylish, this hoodie reflects Tyrion’s wit and charm. A must-have for those who ‘drink and know things.’",
          owner: "Tyrion Lannister",
          image: "/assets/products/p1.jpg",
        },
        {
          id: 6,
          name: "Sansa Stark Hoodie",
          price: "$120",
          description: "Elegantly designed with a touch of northern grace. A cozy hoodie inspired by Sansa’s resilience and poise.",
          owner: "Sansa Stark",
          image: "/assets/products/p2.jpg",
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
          image: "/assets/products/p1.jpg ",
        },
        {
          id: 5,
          name: "Training Cap by Daenerys",
          price: "$30",
          description: "Stylish and comfortable cap, perfect for outdoor activities and training sessions.",
          owner: "Daenerys Targaryen",
          image: "/assets/products/p2.jpg ",
        },
        {
          id: 6,
          name: "Coach Training Hoodie",
          price: "$60",
          description: "Lightweight hoodie for intense workouts, endorsed by coaches.",
          owner: "Coach Stark",
          image: "/assets/products/p3.jpg ",
        },
        {
          id: 14,
          name: "Coach Playbook Notebook",
          price: "$25",
          description: "Premium notebook for planning strategies and game tactics.",
          owner: "Coach Lannister",
          image: "/assets/products/p4.jpg ",
        },
        {
          id: 15,
          name: "Training Cap by Daenerys",
          price: "$30",
          description: "Stylish and comfortable cap, perfect for outdoor activities and training sessions.",
          owner: "Daenerys Targaryen",
          image: "/assets/products/p1.jpg ",
        },
        {
          id: 16,
          name: "Coach Training Hoodie",
          price: "$60",
          description: "Lightweight hoodie for intense workouts, endorsed by coaches.",
          owner: "Coach Stark",
          image: "/assets/products/p2.jpg",
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
          image: "/assets/products/p1.jpg",
        },
        {
          id: 8,
          name: "Sports Water Bottle",
          price: "$15",
          description: "Stay hydrated with this durable and eco-friendly water bottle.",
          owner: "Merch Team",
          image: "/assets/products/p2.jpg",
        },
        {
          id: 9,
          name: "Fitness Tracker Band",
          price: "$89",
          description: "Track your fitness goals effortlessly with this high-tech band.",
          owner: "Merch Team",
          image: "/assets/products/p3.jpg",
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
          image: "/assets/products/p4.jpg",
        },
        {
          id: 19,
          name: "Fitness Tracker Band",
          price: "$89",
          description: "Track your fitness goals effortlessly with this high-tech band.",
          owner: "Merch Team",
          image: "/assets/products/p1.jpg",
        },
      ],
    },
  ];

  return (
    <section className="max-w-7xl mx-auto w-full sm:px-0 px-4">
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
                  imgsrc={product.image}
                />
              ))}
            </div>
          </div>
        ))}
    </section>
  );
};