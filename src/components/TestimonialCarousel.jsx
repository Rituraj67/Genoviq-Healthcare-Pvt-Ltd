import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

// import required modules
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";
import { useAppData } from "../context/AppDataContext";



const TestimonialCarousel = () => {

  const {testimonials}= useAppData()

  const items = testimonials.map((testimonial, index) => (
    <TestimonialCard key={index} {...testimonial} index={index} />
  ));

  return (
    <>
      <Swiper
        initialSlide={1}
        effect={"coverflow"}
        grabCursor={true}
        slidesPerView={"auto"} // Change "auto" to a fixed number for better control
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        loop={true}
        navigation={true} // Ensure navigation buttons are enabled
        
        pagination={{ clickable: true }} // Enable pagination
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
          <SwiperSlide key={index}>
            <TestimonialCard key={index} {...testimonial} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TestimonialCarousel;
