import Link from 'next/link'
import React, { useContext } from 'react'
import Qty from '../Qty/Qty'
import { CartContext } from '@/context/CartContext/CartContext';


const CartItem = ({ item }: any) => {
    const { removeFromCart } = useContext(CartContext);
    return (
        <div className='flex gap-x-8'>
            <Link href={`/product/${item.id}`} className='w-[70px] h-[70px]'>
                <img src="/1.png" alt="" />
            </Link>
            <div className='flex-1'>
                {/* title & remove icon */}
                <div className='flex gap-x-4 mb-3'>
                    <Link href={`/product/${item.id}`}>
                        Sony A7 III Body Photo Camera Mirrorless 24MP Full Frame 4K
                    </Link>
                    <div onClick={() => removeFromCart(item.id)} className='cursor-pointer text-[24px] hover:text-accent transition-all '>
                        <i className="fa-solid fa-x "></i>
                    </div>
                </div>
                <div className='flex items-center gap-x-12'>
                    {/* qty */}
                    <div className='flex gap-x-4 mb-2'>
                        <Qty item={item} />
                    </div>
                    <div className='text-accent text-xl'>${item.amount * item.qty}</div>
                </div>
                {/* price*/}
                <div>
                    <div>
                        <span className='text-accent'>$199 per price</span>
                    </div>
                </div>

            </div>
        </div>
    )
}

export default CartItem
