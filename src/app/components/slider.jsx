'use client'

import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Autoplay, Navigation } from 'swiper/modules';

export default function Carousel ({ images }) {

    return (
    
      <Swiper
        modules={[Navigation]}
        // navigation
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        spaceBetween={10}
        slidesPerView={1}
        loop={true}
        className="w-full"
      >
        {images.map((src, index) => (
          <SwiperSlide key={index}>
            <img src={src} alt={`Slide ${index}`} className="w-screen h-[55vh] object-cover" />
          </SwiperSlide>
        ))}
      </Swiper>
  );

}