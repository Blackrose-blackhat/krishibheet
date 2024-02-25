import React from 'react'
import { IoMdCart } from 'react-icons/io'

const page = () => {

  const products = [
    {
      title: "Pulses",
      imageUrl: "/assets/images/pulses.jpeg",
      link: "https://example.com/products/seeds"
    },
    {
      title: "Spices",
      imageUrl: "/assets/images/spices.jpeg",
      link: "https://example.com/products/farm-machinery"
    },
    {
      title: "Fruits",
      imageUrl: "/assets/images/fruits.jpeg",
      link: "https://example.com/products/farm-machinery"
    },
    {
      title: "Vegetable",
      imageUrl: "/assets/images/veggies.jpeg",
      link: "https://example.com/products/farm-machinery"
    },
    {
      title: "Nuts ",
      imageUrl: "/assets/images/nuts.jpeg",
      link: "https://example.com/products/farm-machinery"
    },
    {
      title: "Sugars ",
      imageUrl: "/assets/images/Sugar.jpeg",
      link: "https://example.com/products/farm-machinery"
    },
    {
      title: "Rubber ",
      imageUrl: "/assets/images/Rubber.jpeg",
      link: "https://example.com/products/farm-machinery"
    },
    {
      title: "Dairy ",
      imageUrl: "/assets/images/Dairy.jpeg",
      link: "https://example.com/products/farm-machinery"
    },
    // Add more products as needed
  ]

  return (
    <main className='p-5'>
      <div className='mx-10 my-5'>
        <h1 className='text-white font-bold text-3xl'>Agro Products</h1>
      </div>
      <div className='flex flex-wrap justify-start gap-10 p-10'>
      {products.map((product, index) => (
        <div key={index} className=' flex flex-col justify-between w-60 h-52 lg:w-80 lg:h-64  bg-white p-2 rounded-lg shadow-md shadow-neutral-600 hover:scale-105 transition duration-150 cursor-pointer'>
          <img src={product.imageUrl} alt={product.title} className='w-full h-44  rounded-md' />
          <div className='flex flex-row justify-between items-center'>
          <h2 className='text-neutral-800 font-semibold text-sm lg:text-lg py-5 w-full text-left mx-5'>{product.title}</h2>
          <IoMdCart className='text-4xl text-green-600 mx-5' />

          </div>
         
        </div>
      ))}
    </div>
    </main>
  )
}

export default page