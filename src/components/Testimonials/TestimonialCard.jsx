"use client";
import React from "react";
import Image from "next/image";

const TestimonialCard = ({ testimonial }) => {
  return (
    <div className="bg-light1 text-black max-w-[80%] lg:max-w-[1087px] mx-auto rounded-lg lg:rounded-[14px] px-8 lg:px-12 py-10 lg:py-14 text-left">
      <div className="flex flex-col md:flex-row gap-4 justify-between items-center">
        <Image
          src={testimonial.image.src}
          alt={testimonial.image.alt}
          width={testimonial.image.width}
          height={testimonial.image.height}
          className="rounded-full w-[175pxx] h-[175px] lg:w-[275px] lg:h-[275px] "
        />
        <div className="flex flex-col gap-2">
          <p className="body-text mb-3">
            <span className="text-orange font-bold sec-heading">"</span>
            <span className="mx-4">{testimonial.quote}</span>
            <span className="text-orange font-bold sec-heading">"</span>
          </p>

          <h5 className="ter-heading font-medium">{testimonial.name}</h5>
          <p className="text-sm md:text-base lg:text-[19px]">
            {testimonial.designation}
          </p>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
