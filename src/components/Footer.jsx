import React from 'react'
import Logo from "@/components/Logo";
import SocialIcons from "@/components/SocialIcons";
import Link from "next/link";

const Footer = () => {
  return (
    <div className="bg-light1 dark:bg-charcoalBlack flex flex-col items-center">
      <Logo />
      <div className="flex flex-row flex-wrap justify-center mx-4 gap-3 mt-8 md:mt-12 lg:mt-16 mb-4 md:mb-6 lg:mb-10 body-text">
          <Link
            className="py-[10px] px-[14px] border-b-2 border-transparent hover:border-orange"
            href="/"
          >
            Home
          </Link>
          <Link
            className="py-[10px] px-[14px] border-b-2 border-transparent hover:border-orange"
            href="#about-me"
          >
            About Me
          </Link>
          <Link
            className="py-[10px] px-[14px] border-b-2 border-transparent hover:border-orange"
            href="#services"
          >
            Services
          </Link>
          <Link
            className="py-[10px] px-[14px] border-b-2 border-transparent hover:border-orange"
            href="#projects"
          >
            Projects
          </Link>
          <Link
            className="py-[10px] px-[14px] border-b-2 border-transparent hover:border-orange"
            href="#testimonials"
          >
            Testimonials
          </Link>
          <Link
            className="py-[10px] px-[14px] border-b-2 border-transparent hover:border-orange"
            href="#contact"
          >
            Contact
          </Link>      
      </div>
      <SocialIcons />
      <div className="text-center bg-lightBlack dark:bg-footerDark text-white py-5 md:py-6 lg:py-[26px] body-text w-full mt-8 md:mt-12 lg:mt-16">
        © {new Date().getFullYear()} <span className="text-orange">Mumair</span>{" "}
        All Rights Reserved , Inc.
      </div>
    </div>
  );
}

export default Footer