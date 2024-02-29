"use client";
import React from 'react'
import "./profile.scss"
import Cookies from "js-cookie"
const ProfileScreen = () => {
  const handleLogout = () => {
    Cookies.remove("token");
    window.location.replace("/");
  };

  return (
    <>
      <section className='mb-[30px] pt-36 lg:pt-0'>
        <div className='container mx-auto'>
          <div className='grid grid-cols-1 xl:grid-cols-5'>
            <div className='col-span-1 xl:col-span-1 border border-gray-600 rounded-md'>
              <div className='grad'>
                <div className='grid grid-cols-10 bg-black rounded-t-md gap-1 px-5 items-center border-b border-gray-600' >
                  <div className='col-span-3'>
                    <img src="/1.png" alt="" className='w-28' />
                  </div>
                  <div className='col-span-7'>
                    LyHeng Seng
                    senglyheng2001@gmail.com
                  </div>
                </div>
                <div className=''>
                  <div className=' border-b border-gray-600 cursor-pointer'>
                    <div className='py-3 px-5 flex items-center'>
                      <div className='mr-5 w-7 h-7 rounded-full bg-black flex justify-center items-center'>
                        <i className="fa-solid fa-cart-shopping text-xs"></i>
                      </div>
                      <div> My Order</div>
                    </div>
                  </div>
                  <div className=' border-b border-gray-600 cursor-pointer'>
                    <div className='py-3 px-5 flex items-center'>
                      <div className='mr-5 w-7 h-7 rounded-full bg-black flex justify-center items-center'>
                        <i className="fa-solid fa-ticket-simple text-xs"></i>
                      </div>
                      <div>My Coupon</div>
                    </div>
                  </div>
                  <div className='border-b border-gray-600 cursor-pointer'>
                    <div className='py-3 px-5 flex items-center'>
                      <div className='mr-5 w-7 h-7 rounded-full bg-black flex justify-center items-center'>
                        <i className="fa-solid fa-heart text-xs"></i>
                      </div>
                      <div>Favorite</div>
                    </div>
                  </div><div className='border-b border-gray-600 cursor-pointer'>
                    <div className='py-3 px-5 flex items-center'>
                      <div className='mr-5 w-7 h-7 rounded-full bg-black flex justify-center items-center'>
                        <i className="fa fa-user text-xs"></i>
                      </div>
                      <div>Personal Information</div>
                    </div>
                  </div>
                </div>
                <div className=' border-b border-gray-600 cursor-pointer'>
                  <div className='py-3 px-5 flex items-center'>
                    <div className='mr-5 w-7 h-7 rounded-full bg-black flex justify-center items-center'>
                      <i className="fa fa-lock text-xs"></i>
                    </div>
                    <div>Change Password</div>
                  </div>

                </div>
                <div className=' border-b border-gray-600 cursor-pointer'  onClick={handleLogout}>
                  <div className='py-3 px-5 flex items-center'>
                    <div className='mr-5 w-7 h-7 rounded-full bg-black flex justify-center items-center'>
                      <i className="fa-solid fa-right-from-bracket text-xs"></i>                  
                    </div>
                    <div>Logout</div>
                  </div>
                </div>     
              </div>
            </div>

            <div className='col-span-1'>
              <div className='mt-10 text-2xl'>
                Personal Information
              </div>
            </div>
          </div>
        </div >
      </section >
    </>
  )
}

export default ProfileScreen
