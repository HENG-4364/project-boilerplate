import React from 'react'
import Products from '../../../app/product/[id]/page'
import Product from '@/components/Product/Product'
import CategoryNav from '@/components/CategoryNav/CategoryNav'

const SearchScreen = () => {
    return (
        <div className='mb-[30px] pt-40  lg:pt-4 xl:pt-0'>
            <div className='container mx-auto'>
                <div className='flex gap-x-[30px]'>
                    {/* category nav */}
                    <CategoryNav />
                    <div>
                        {/* title */}
                        <div className='py-3 text-xl uppercase text-center lg:text-left'>title</div>
                        {/* product grid */}
                        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-[15px] md:gap-[30px]'>
                            <Product />
                            <Product />
                            <Product />
                            <Product />
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}

export default SearchScreen
