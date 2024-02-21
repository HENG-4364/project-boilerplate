import Link from 'next/link'
import React from 'react'

const Product = () => {
    return (
        <Link href={`/product/1`}>
            <div className='grad w-full h-[362px] rounded-[8px] overflow-hidden relative group'>
                {/* badge */}
                <div className='absolute bg-accent text-primary text-[12px] font-extrabold uppercase top-4 right-4 px-2 rounded-full z-10'>New</div>
                {/* badge */}
                <div>
                    <div className='w-full h-[200px] flex items-center justify-center relative '>
                        <img className='w-[160px] h-[160px] group-hover:scale-90 transition-all' src="/1.png" alt="" />
                    </div>
                    <div className='px-6 pb-8 flex flex-col'>
                        <div className='text-sm text-accent capitalize mb-2'>Professional</div>
                        <div className='text-[15px] mb-4 lg:mb-9'>Nikon D850 Camera DSLR 45.7MP CMOS Body</div>
                        <div className='text-lg text-accent'>$199</div>
                    </div>
                </div>
            </div>
        </Link>
    )
}

export default Product
