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

const testimonials = [
  {
    quote:
      "Working at Genoviq has been an incredible journey of growth and innovation. The collaborative environment and cutting-edge research opportunities have allowed me to make a real impact in healthcare.",
    name: "Dr. Sarah Chen",
    position: "Senior Research Scientist",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "What sets Genoviq apart is our unwavering commitment to patient care. Every day, we work towards making healthcare more accessible and effective for people worldwide.",
    name: "James Rodriguez",
    position: "Clinical Development Manager",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "The culture of innovation at Genoviq is extraordinary. We're encouraged to think outside the box and pursue breakthrough solutions that can transform lives.",
    name: "Dr. Emily Thompson",
    position: "Head of R&D",
    image: "/placeholder.svg?height=100&width=100",
  },
  {
    quote:
      "Being part of Genoviq means being part of a family that's dedicated to making a difference. The support and opportunities for growth are unmatched.",
    name: "Michael Chang",
    position: "Quality Assurance Director",
    image: "/placeholder.svg?height=100&width=100",
  },
];

const TestimonialCarousel = () => {
  const items = testimonials.map((testimonial, index) => (
    <TestimonialCard key={index} {...testimonial} index={index} />
  ));

  return (
    <>
      <Swiper
        initialSlide={1}
        effect={"coverflow"}
        grabCursor={true}
        slidesPerView={"auto"}
        autoplay={{ delay: 3000, disableOnInteraction: true }} 
        loop 
      
        coverflowEffect={{
          rotate: 50,
          stretch: 0,
          depth: 100,
          modifier: 1,
          slideShadows: true,
          
        }}
        pagination={true}
        modules={[EffectCoverflow, Pagination, Autoplay]}
        className="mySwiper"
      >
        {testimonials.map((testimonial, index) => (
          <SwiperSlide>
            <TestimonialCard key={index} {...testimonial} index={index} />
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
};

export default TestimonialCarousel;
