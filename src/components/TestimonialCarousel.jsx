"use client"

import { Swiper, SwiperSlide } from "swiper/react"
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules"
import TestimonialCard from "./TestimonialCard"

// Import Swiper styles
import "swiper/css"
import "swiper/css/effect-coverflow"
import "swiper/css/pagination"

const TestimonialCarousel = ({ testimonials }) => {
  return (
    <>
      <Swiper
        initialSlide={3}
        effect={"coverflow"}
        grabCursor={true}
        slidesPerView={"auto"}
        centeredSlides={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
        }}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide key={index} className="max-w-md h-[350px] my-8 mx-2">
            <TestimonialCard key={index} {...testimonial} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  )
}

export default TestimonialCarousel

