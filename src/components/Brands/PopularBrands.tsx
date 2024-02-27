import React from 'react'
import "./popular_brands.scss"
const PopularBrands = () => {
  return (
    <div className='mb-16 mt-16'>
      <div className='container mx-auto'>
        <h2 className='h2 mb-6 text-center xl:text-left'>Popular Brands</h2>
        <div className='grid grid-cols-9 gap-5'>
          <img src="/brands/canon.png" alt="" className='brands' />
          <img src="/brands/nikon.png" alt="" className='brands' />
          <img src="/brands/sony.png" alt="" className='brands' />
          <img src="/brands/fujifilm.png" alt="" className='brands' />
          <img src="/brands/panasonic.png" alt="" className='brands' />
          <img src="/brands/olympus.png" alt="" className='brands' />
          <img src="/brands/pantax.png" alt="" className='brands' />
          <img src="/brands/gopro.png" alt="" className='brands' />
        </div>
      </div>
    </div>
  )
}

export default PopularBrands
