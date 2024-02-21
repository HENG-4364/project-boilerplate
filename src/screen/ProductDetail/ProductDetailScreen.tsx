"use client"
import LatestProducts from '@/components/LatestProducts/LatestProducts'
import RelatestProducts from '@/components/RelatestProducts/RelatestProducts'
import { CartContext } from '@/context/CartContext/CartContext'
import { useParams } from 'next/navigation'
import React, { useContext } from 'react'

const ProductDetailScreen = () => {
    const { addToCart } = useContext(CartContext);
    const { id } = useParams();
    return (
        <div className='mb-16 pt-44 lg:pt-[30px] xl:pt-0'>
            <div className='container mx-auto'>
                {/* text */}
                <div className='flex flex-col lg:flex-row gap-[30px] mb-[30px]'>
                    <div className='flex-1 lg:max-w-[40%] lg:h-[540px] grad rounded-lg flex justify-center items-center'>
                        <img src="/1.png" alt="" className='w-full max-w-[65%]' />
                    </div>
                    <div className='flex-1 bg-primary p-12 xl:p-20 rounded-lg flex flex-col justify-center'>
                        {/*category title*/}
                        <div className='uppercase text-accent text-lg font-medium mb-2'>
                            Category Name
                        </div>
                        {/* product tittle */}
                        <h2 className='h2 mb-4'>
                            Product Name
                        </h2>
                        {/* description */}
                        <p className='mb-12'>
                            Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
                        </p>
                        {/* price & btn */}
                        <div className='flex items-center gap-x-8'>
                            {/* price */}
                            <div className='text-3xl text-accent font-semibold'>
                                $199
                            </div>
                            <button onClick={() => addToCart({ id: Number(id), amount: 199, qty: 1 })} className='btn bg-accent text-primary hover:bg-accent-hover transition-all lg:mx-0 px-[18px]'>Add to cart</button>
                        </div>

                    </div>
                </div>

                {/* relatest products */}
                <RelatestProducts />
            </div>
        </div>
    )
}

export default ProductDetailScreen
