import Link from 'next/link'
import React from 'react'

const AppFooter = () => {
  return (
    <footer className='pt-16 bg-primary'>
      <div className='container mx-auto'>
        <div className='text-center'>
          <h2 className='h2 uppercase mb-6 font-semibold'>Subscribe to our newsletter</h2>
          <p className='text-white/70'>Be the first to get the latest news about trends, promotions and much more!</p>
        </div>
        {/* form */}
        <form action="" className='w-full max-w-3xl mx-auto flex flex-col md:flex-row gap-5 my-14'>
          <input type="text" placeholder='Your email address' className='input' />
          <button className='btn bg-accent text-primary hover:bg-accent-hover transition-all lg:mx-0 px-[18px] min-w-[150px]'>Join</button>
        </form>
        {/* link */}
        <div className='text-base text-white/60 flex gap-x-6 capitalize max-w-max mx-auto mb-9
        '>
          <Link href={''} className='hover:text-white transition-all'>
            Return policy
          </Link>
          <Link href={''} className='hover:text-white transition-all'>
            Track your order
          </Link>
          <Link href={''} className='hover:text-white transition-all'>
            Shopping & delivery
          </Link>
        </div>
        {/* socials */}
        <div className='flex gap-x-6 max-w-max mx-auto text-lg mb-16'>
          <Link href={''} className='hover:text-white transition-all'>
            <i className="fa-brands fa-youtube"></i>
          </Link>
          <Link href={''} className='hover:text-white transition-all'>
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link href={''} className='hover:text-white transition-all'>
            <i className="fa-brands fa-twitter"></i>
          </Link>
          <Link href={''} className='hover:text-white transition-all'>
            <i className="fa-brands fa-facebook"></i>
          </Link>
        </div>
      </div>
      {/* copyright */}
      <div className='py-10 border-t border-t-white/10'>
        <div className='container mx-auto'>
          <div className='text-center text-sm text-white/60'>
            Copyrignt &copy; Photoand 2023. All rights reserved.
          </div>
        </div>
      </div>
    </footer>
  )
}

export default AppFooter
