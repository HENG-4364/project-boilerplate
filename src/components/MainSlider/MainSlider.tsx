"use client";
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation'
import "./main-slider.scss"
const sliderData = [
    {
        img: "/camera.png",
        pertitle: 'Special offer',
        titlePart1: "Save 20%",
        titlePart2: "On Your",
        titlePart3: "first order",
        btnText: "Shop now",
    },
    {
        img: "/camera.png",
        pertitle: 'Special offer',
        titlePart1: "Save 20%",
        titlePart2: "On Your",
        titlePart3: "first order",
        btnText: "Shop now",
    },
    {
        img: "/camera.png",
        pertitle: 'Special offer',
        titlePart1: "Save 20%",
        titlePart2: "On Your",
        titlePart3: "first order",
        btnText: "Shop now",
    },
    {
        img: "/camera.png",
        pertitle: 'Special offer',
        titlePart1: "Save 20%",
        titlePart2: "On Your",
        titlePart3: "first order",
        btnText: "Shop now",
    },
]
const MainSlider = () => {
    return (
        <div className='product_slider_container'>
            <Swiper modules={[
                Pagination
            ]}
                loop={true}
                pagination={{
                    clickable: true
                }}
                className='mainSlider grad h-full bg-primary xl:bg-grad xl:h-[500px]  xl:bg-no-repeat max-w-lg lg:max-w-none rounded-[8px] overflow-hidden drop-shadow-2xl'>
                <>
                    {
                        sliderData.map((slide, index) => {
                            return <SwiperSlide key={index}>
                                <div className='flex flex-col lg:flex-row h-full p-[20px] md:p-[60px]'>
                                    {/* text */}
                                    <div className='w-full lg:flex-1'>
                                        <div className='uppercase mb-1 text-center xl:text-left'>{slide.pertitle}</div>
                                        <div className='text-3xl md:text-[46px] font-semibold uppercase leading-none text-center lg:text-left mb-8 xl:mb-20'>
                                            {slide.titlePart1} <br />
                                            {slide.titlePart2} <br />
                                            {slide.titlePart3} <br />
                                            <button className='btn bg-accent text-primary hover:bg-accent-hover transition-all lg:mx-0 mt-[30px] px-[18px]'>
                                                {slide.btnText}
                                            </button>
                                        </div>

                                    </div>
                                    {/* img */}
                                    <div className='flex-1'>
                                        <img className='xl:absolute xl:-right-16 xl:-bottom-12' src={slide.img} alt="" />
                                    </div>
                                </div>
                            </SwiperSlide>
                        })

                    }
                </>
            </Swiper>

        </div>
    )
}

export default MainSlider
