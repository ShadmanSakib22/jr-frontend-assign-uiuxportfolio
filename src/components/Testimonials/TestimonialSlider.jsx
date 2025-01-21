"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import TestimonialCard from "./TestimonialCard";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const testimonialsData = [
  {
    id: 1,
    quote:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    name: "John Doe",
    designation: "Senior Designer at Company",
    image: {
      src: "/testimonials/person1.png",
      alt: "John Doe",
      width: 235,
      height: 235,
    },
  },
  {
    id: 2,
    quote:
      "In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    name: "Jame Smith",
    designation: "Product Manager",
    image: {
      src: "/testimonials/person2.png",
      alt: "Jane Smith",
      width: 235,
      height: 235,
    },
  },
  {
    id: 3,
    quote:
      "Lorem ipsum dolor sit amet consectetur. In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    name: "John Boe",
    designation: "Senior Programer at Company",
    image: {
      src: "/testimonials/person1.png",
      alt: "John Boe",
      width: 235,
      height: 235,
    },
  },
  {
    id: 4,
    quote:
      "In enim cursus odio accumsan. Id leo urna velit neque mattis id tellus arcu condimentum. Augue dictum dolor elementum convallis dignissim malesuada commodo ultrices.",
    name: "Willie Smith",
    designation: "Youtuber",
    image: {
      src: "/testimonials/person2.png",
      alt: "Willie Smith",
      width: 235,
      height: 235,
    },
  },
];

const TestimonialSlider = () => {
  return (
    <div className="relative pb-12">
      <Swiper
        modules={[Pagination]}
        grabCursor={true}
        centeredSlides={true}
        slidesPerView={1.35}
        spaceBetween={-50}
        initialSlide={1}
        breakpoints={{
          320: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          1280: {
            slidesPerView: 1.35,
            spaceBetween: 40,
          },
        }}
        pagination={{
          clickable: true,
          el: ".swiper-custom-pagination",
        }}
        className="mySwiper"
      >
        {testimonialsData.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} />
          </SwiperSlide>
        ))}
      </Swiper>
      <div className="swiper-custom-pagination absolute bottom-0 w-full flex justify-center" />
    </div>
  );
};

export default TestimonialSlider;
