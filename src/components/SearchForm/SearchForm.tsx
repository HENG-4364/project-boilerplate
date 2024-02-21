import { useRouter } from 'next/navigation';
import React, { ChangeEvent, useEffect, useState } from 'react'

const SearchForm = () => {
  const [searchItem, setSearchItem] = useState();
  const router = useRouter();
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsAnimating(false);
    }, 1000);
    return () => clearTimeout(timeout);
  })
  const handleSearchInput = (e: any) => {
    setSearchItem(e.target.value);
  };
  const handleSumbit = (e: any) => {
    e.preventDefault();
    if (searchItem) {
      router.push(`/search?query=${searchItem}`);
    } else {
      setIsAnimating(true);
    }
  }
  return (
    <form onSubmit={handleSumbit} className={` ${isAnimating ? "animate-shake" : "animate-none"} w-full relative `}>
      <input onChange={handleSearchInput} value={searchItem} className='input' type="text" placeholder='Search for a product...' />
      <button className='btn bg-accent text-primary hover:bg-accent-hover transition-all absolute top-0 right-0 px-[30px] rounded-bl-none rounded-tl-none'>
        <i className="fa-solid fa-magnifying-glass text-xl"></i>
      </button>
    </form>
  )
}

export default SearchForm
