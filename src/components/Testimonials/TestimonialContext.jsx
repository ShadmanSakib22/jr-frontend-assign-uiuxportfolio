import { createContext } from "react";

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

export const TestimonialsContext = createContext(testimonialsData);
