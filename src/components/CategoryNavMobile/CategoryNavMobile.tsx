import Link from 'next/link'
import React from 'react'

const CategoryNavMobile = ({ setCatNavMobile }: any) => {
  return (
    <div className='w-full h-full bg-primary p-8'>
      {/* close icon */}
      <div onClick={() => { setCatNavMobile(false) }} className='flex justify-end mb-8 cursor-pointer'>
        <i className="fa-solid fa-x text-3xl"></i>
      </div>
      <div className='flex flex-col gap-y-8 cursor-pointer'>
        <Link href={'/products/1'} className='uppercase font-medium'>Category</Link>
        <Link href={'/products/1'} className='uppercase font-medium'>Category</Link>
        <Link href={'/products/1'} className='uppercase font-medium'>Category</Link>
        <Link href={'/products/1'} className='uppercase font-medium'>Category</Link>
        <Link href={'/products/1'} className='uppercase font-medium'>Category</Link>
        <Link href={'/products/1'} className='uppercase font-medium'>Category</Link>
      </div>
    </div>
  )
}

export default CategoryNavMobile
