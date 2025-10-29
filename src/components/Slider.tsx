'use client'
import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Navigation, Pagination, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'

function Slider({ images, url }: { images: string[], url: string }) {
    return (
        <div className="relative w-[100%] h-[80%] mx-auto ">
            <style jsx global>{`
                .swiper-button-next,
                .swiper-button-prev {
                    color: white !important;
                }
                .swiper-button-next:after,
                .swiper-button-prev:after {
                    font-size: 30px !important;
                }
            `}</style>
            <Swiper
                modules={[Navigation, Pagination, Autoplay]}
                spaceBetween={0}
                slidesPerView={1}
                navigation
                pagination={{ clickable: true }}
                autoplay={{
                    delay: 3000,
                    disableOnInteraction: false,
                }}
                loop={true}
                className="w-full h-full"
            >
            <a href={url} target="_blank" rel="noopener noreferrer" className="absolute top-4 right-4 z-10 text-black bg-white w-7 h-7 rounded-full hover:bg-gray-200 transition-colors flex items-center justify-center shadow-lg">🡕</a>
                {images.map((image, index) => (
                    <SwiperSlide key={index}>
                        <img 
                            src={image} 
                            alt={`Slide ${index + 1}`} 
                            className="object-cover w-full h-full rounded-2xl" 
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}

export default Slider