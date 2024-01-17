import React from 'react'

const page = () => {

  const products = [
    {
      title: "Seeds",
      imageUrl: "https://example.com/images/seeds.jpg",
      link: "https://example.com/products/seeds"
    },
    {
      title: "Farm Machinery",
      imageUrl: "https://example.com/images/farm-machinery.jpg",
      link: "https://example.com/products/farm-machinery"
    },
    // Add more products as needed
  ]

  return (
    <main className='p-5'>
      <div className='mx-10 my-5'>
        <h1 className='text-white font-bold text-3xl'>Agro Products</h1>
      </div>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'space-around' }}>
      {products.map((product, index) => (
        <div key={index} style={{ width: '200px', margin: '10px' }}>
          <img src={product.imageUrl} alt={product.title} style={{ width: '100%' }} />
          <h2>{product.title}</h2>
          <a href={product.link}>Learn More</a>
        </div>
      ))}
    </div>
    </main>
  )
}

export default page