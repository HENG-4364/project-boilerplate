"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import Product from '../Product/Product';
import "./product-slider.scss"
const ProductSlider = () => {
    return (
        <div className='main_slider_container container mx-auto'>
            <Swiper modules={[
                Pagination, Navigation
            ]}
                loop={false}
                navigation={true}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    768: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1024: {
                        slidesPerView: 2,
                        spaceBetween: 30
                    },
                    1440: {
                        slidesPerView: 5,
                        spaceBetween: 30
                    },
                }}
                pagination={{
                    clickable: true
                }}
                className='productSlider mx-auto md:max-w-lg xl:max-w-[1410px]'>
                <SwiperSlide><Product /></SwiperSlide>
                <SwiperSlide><Product /></SwiperSlide>
                <SwiperSlide><Product /></SwiperSlide>
                <SwiperSlide><Product /></SwiperSlide>
                <SwiperSlide><Product /></SwiperSlide>
                <SwiperSlide><Product /></SwiperSlide>
                <SwiperSlide><Product /></SwiperSlide>
            </Swiper>

        </div>
    )
}

export default ProductSlider
