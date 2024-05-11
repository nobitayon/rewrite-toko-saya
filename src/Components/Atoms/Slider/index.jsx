import React from 'react'
import { Swiper, SwiperSlide } from 'swiper/react'
import 'swiper/css'

export default function Slider() {
  return (
    // <div className='w-full my-10 h-60 bg-gray-200'>
      
    // </div>
    <Swiper className='h-100'
      // spaceBetween={50}
      // slidesPerView={3}
      onSlideChange={() => console.log('slide change')}
      onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='h-full'>
        <img className='w-full h-full object-cover object-center' src='https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/4/30/dc517587-aee5-470a-8720-2bc4c8af1b2a.jpg.webp?ect=4g'/>
      </SwiperSlide>
      <SwiperSlide className='h-full'>
        <img className='w-full h-full object-cover object-center' src='https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/5/8/1a4acee9-7bc5-4c21-a17f-76ff080fc95b.jpg.webp?ect=4g'/>
      </SwiperSlide>
      <SwiperSlide className='h-full'>
        <img className='w-full h-full object-cover object-center' src='https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/5/6/d0261df9-a88e-49d9-9838-59e77cb43fd4.jpg.webp?ect=4g'/>
      </SwiperSlide>
      <SwiperSlide className='h-full'>
        <img className='w-full h-full object-cover object-center' src='https://images.tokopedia.net/img/cache/1208/NsjrJu/2024/5/10/80d21091-a7dc-4a7d-8fe3-f5e804ec8d97.jpg.webp?ect=4g'/>
      </SwiperSlide>
    </Swiper>
  )
}
