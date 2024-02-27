"use client"

import PopularBrands from '@/components/Brands/PopularBrands'
import Hero from '@/components/Hero/Hero'
import LatestProducts from '@/components/LatestProducts/LatestProducts'
import { useContextMe } from '@/context/MeEmployee/EmployeeContext'
import React from 'react'

const HomeScreen = () => {
  return (
    <section>
      <Hero />
      <PopularBrands />
      <LatestProducts />
    </section>
  )
}

export default HomeScreen
