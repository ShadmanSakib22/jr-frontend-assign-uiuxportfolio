import React from "react";
import Image from "next/image";

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
    name: "Jane Smith",
    designation: "Product Manager",
    image: {
      src: "/testimonials/person2.png",
      alt: "Jane Smith",
      width: 235,
      height: 235,
    },
  },
];

const TestimonialCard = () => {
  return (
    <div className="bg-light1 max-w-[80%] lg:max-w-[1087px] rounded-lg lg:rounded-[14px] px-8 lg:px-12 py-10 lg:py-14">
      {testimonialsData.map((testimonial) => (
        <div key={testimonial.id} className="flex gap-2">
          <Image
            src={testimonial.image.src}
            alt={testimonial.image.alt}
            width={testimonial.image.width}
            height={testimonial.image.height}
            className="rounded-full"
          />
          <div className="flex flex-col gap-2">
            <p className="body-text">
              <span className="text-orange font-bold sec-heading">"</span>
              {testimonial.quote}
              <span className="text-orange font-bold sec-heading">"</span>
            </p>

            <h5 className="ter-heading font-medium">{testimonial.name}</h5>
            <p className="text-sm md:text-base lg:text-[19px]">
              {testimonial.designation}
            </p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TestimonialCard;
