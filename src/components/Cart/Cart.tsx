import { CartContext } from '@/context/CartContext/CartContext'
import React, { useContext } from 'react'
import CartItem from '../CartItem/CartItem';

const Cart = () => {
  const { setIsOpen, cart, totalAmount, clearCart } = useContext(CartContext);
  return (
    <div className='w-full h-full px-4 text-white'>
      <div className='overflow-y-auto overflow-x-hidden h-[75vh]'>
        {/* close icon */}
        <div onClick={() => setIsOpen(false)} className='text-4xl w-20 h-[98px] flex justify-start items-center cursor-pointer'>
          <i className="fa-solid fa-x "></i>
        </div>
        <div className='flex flex-col gap-y-10 px-2'>
          {cart.map((item) => {
            return <CartItem item={item} key={item.id} />
          })}
        </div>
      </div>
      {/* subtotal & total */}
      {cart.length >= 1 && <div className=''>
        <div className='px-6 py-10 flex flex-col'>
          <div className='flex justify-between text-lg'>
            <div>Subtotal</div>
            <div>$ {totalAmount}</div>
          </div>
          <div className='flex justify-between text-2xl'>
            <div>Total</div>
            <div>$ {totalAmount}</div>
          </div>
        </div>
      </div>}
      <div className='px-6'>
        {cart.length >= 1 ?
          <div className='flex justify-between gap-x-4'>
            <button onClick={clearCart} className='btn bg-accent text-primary hover:bg-accent-hover transition-all lg:mx-0 mt-[30px] px-[18px]'>Clear Cart</button>
            <button className='btn bg-accent text-primary hover:bg-accent-hover transition-all lg:mx-0 mt-[30px] flex-1 px-2 gap-2'>
              Checkout
              <i className="fa-solid fa-arrow-right text-lg"></i>
            </button>
          </div> :
          <div className='h-full absolute top-0 left-0 right-0 flex justify-center items-center -z-10 flex-col text-white/30'>
            <div className='text-2xl mb-2'>
              Your cart is empty
            </div>
            <div className='text-6xl'>
              <i className="fa-solid fa-cart-shopping"></i>
            </div>
          </div>
        }
      </div>
    </div>
  )
}

export default Cart
