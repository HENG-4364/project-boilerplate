import Cart from '@/components/Cart/Cart'
import CategoryNavMobile from '@/components/CategoryNavMobile/CategoryNavMobile'
import SearchForm from '@/components/SearchForm/SearchForm'
import { CartContext } from '@/context/CartContext/CartContext'
import { useContextMe } from '@/context/MeEmployee/EmployeeContext'
import Link from 'next/link'
import React, { useContext, useState } from 'react'
import Cookies from "js-cookie"
import "./navbar.scss"
const AppNavbar = () => {
  const { isOpen, setIsOpen, itemsAmount } = useContext(CartContext);
  const [catNavMobile, setCatNavMobile] = useState(false);
  const [isShowBtnSearch, setIsShowBtnSearch] = useState(false);
  const { me } = useContextMe()
  const handleLogout = () => {
    Cookies.remove("token");
    window.location.replace("/");
  };

  return (
    <>
      <header className='bg-primary py-6 fixed w-full top-0 z-40 lg:relative '>
        <div className='container mx-auto'>
          <div className='flex flex-row gap-4 lg:items-center justify-between mb-4 xl:mb-0'>
            {/* Menu */}
            <div className='xl:hidden'>
              <i onClick={() => setCatNavMobile(true)} className="fa-solid fa-bars text-3xl  cursor-pointer"></i>
            </div>
            {/* category  nav mobile*/}
            <div className={`${catNavMobile ? "left-0" : "-left-full"} fixed top-0 bottom-0 z-30 w-full h-screen transition-all duration-200`}>
              <CategoryNavMobile setCatNavMobile={setCatNavMobile} />
            </div>
            {/* logo */}

            <Link href={'/'}>
              <img src="/logo.png" alt="" />
            </Link>
            {/* searchform - show only on desktop */}
            <div className='hidden w-full xl:flex xl:max-w-[734px] '>
              <SearchForm />
            </div>

            {/* phone & cart*/}
            <div className='flex items-center gap-x-[10px]'>
              {/* phone */}
              <div className='hidden xl:flex uppercase'>Need help? 123 456 789</div>
              {/* btn search moblie only */}
              <div onClick={() => setIsShowBtnSearch(!isShowBtnSearch)} className='flex items-center xl:hidden cursor-pointer mr-[18px]'>
                <i className="fa-solid fa-magnifying-glass text-xl"></i>
              </div>
              {/* cart */}
              <div onClick={() => setIsOpen(!isOpen)} className='relative cursor-pointer'>
                {/* cart icon */}
                <i className="fa-solid fa-bag-shopping text-2xl"></i>
                {/* amount */}
                <div className='bg-accent text-primary absolute w-[18px] h-[18px] rounded-full top-3 -right-1 text-[13px] flex justify-center items-center font-bold tracking-[-0.1em]'>{itemsAmount}</div>
              </div>
              {/* cart */}
              <div className={`
            ${isOpen ? 'right-0' : '-right-full'}
            bg-[#0e0f10] shadow-xl fixed top-0 bottom-0 w-full z-10 md:max-w-[500px] translate-all duration-300`}>
                <Cart />
              </div>
              {/* Profile */}
              {
                me ? (<>
                  <div className='ms-5'>
                    <div className="dropdown dropdown-end">
                      <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                        <div className="w-10 rounded-full">
                          <img alt="Tailwind CSS Navbar component" src={me?.profile ? me?.profile : "https://surgassociates.com/wp-content/uploads/610-6104451_image-placeholder-png-user-profile-placeholder-image-png.jpg"} />
                        </div>
                      </div>
                      <ul tabIndex={0} className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52 text-black">
                        <li>
                          <Link className="justify-between" href={'#'}>
                            Profile
                            <span className="badge">New</span>
                          </Link>
                        </li>
                        <li><Link href={'/setting'}>Settings</Link></li>
                        <li><Link onClick={handleLogout} href={'#'}>Logout</Link></li>
                      </ul>
                    </div>
                  </div>
                </>
                ) : (
                  <>
                    <Link href={'/login'}>
                      <div className='ms-5 py-2 px-3 bg-accent hover:bg-accent-hover rounded-md text-black'>
                        Login
                      </div>
                    </Link>
                  </>
                )
              }

            </div>

            {/* searchform show on mobile only */}

          </div>
          <div className={`${isShowBtnSearch ? "" : "hidden"} xl:hidden transition-all duration-300 delay-5000`}>
            <SearchForm />
          </div>
        </div>

      </header >
      <div className='bg-accent xl:mb-[30px] '>
        <div className='container mx-auto flex text-black'>
          <div className=' text-lg hover:bg-accent-hover c'>
            <Link href={''} className='flex items-center py-3 px-5'>
              Products <i className="fa-solid fa-chevron-down ml-1 text-base"></i>
            </Link>
            <div className="dropdown-content grad">
              <a href="#" className='hover:bg-accent-hover'>Link 1</a>
              <a href="#" className='hover:bg-accent-hover'>Link 2</a>
              <a href="#" className='hover:bg-accent-hover'>Link 3</a>
            </div>
          </div>
          <div className='text-lg hover:bg-accent-hover c'>
            <Link href={''} className='flex items-center py-3 px-5 '>
              Accessories  <i className="fa-solid fa-chevron-down ml-1 text-base"></i>
            </Link>
            <div className="dropdown-content grad">
              <a href="#" className='hover:bg-accent-hover'>Link 1</a>
              <a href="#" className='hover:bg-accent-hover'>Link 2</a>
              <a href="#" className='hover:bg-accent-hover'>Link 3</a>
            </div>
          </div>
          <div className=' text-lg hover:bg-accent-hover c'>
            <Link href={''} className='flex items-center px-5 py-3 '>
              Secondhand  <i className="fa-solid fa-chevron-down ml-1 text-base"></i>
            </Link>
            <div className="dropdown-content grad">
              <a href="#" className='hover:bg-accent-hover'>Link 1</a>
              <a href="#" className='hover:bg-accent-hover'>Link 2</a>
              <a href="#" className='hover:bg-accent-hover'>Link 3</a>
            </div>
          </div>
          <div className=' text-lg hover:bg-accent-hover'>
            <Link href={''} className='flex items-center px-5 py-3 '>
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default AppNavbar
