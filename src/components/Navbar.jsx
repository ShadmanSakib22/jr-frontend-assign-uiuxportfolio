"use client";
import React, { useState, useEffect, useRef } from "react";
import Logo from "@/components/Logo";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const buttonRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        menuRef.current &&
        !menuRef.current.contains(event.target) &&
        buttonRef.current &&
        !buttonRef.current.contains(event.target)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div className="container flex justify-between items-center mt-[18px] md:mt-[24px] lg:mt-[30px] xl:mt-[36px] 2xl:mt-[48px] 3xl:mt-[61px]">
      <Logo />
      <div className="flex items-center gap-2 lg:gap-3 xl:gap-4 3xl:gap-6">
        {/* Desktop Menu */}
        <div className="hidden nav:flex gap-3 text-base lg:text-lg 2xl:text-xl 3xl:text-[21px] 3xl:leading-[31.5px]">
          <Link
            className="py-[10px] px-[14px] border-b-2 border-transparent hover:border-orange"
            href="/"
          >
            Home
          </Link>
          <Link
            className="py-[10px] px-[14px] border-b-2 border-transparent hover:border-orange"
            href="#"
          >
            About Me
          </Link>
          <Link
            className="py-[10px] px-[14px] border-b-2 border-transparent hover:border-orange"
            href="#"
          >
            Services
          </Link>
          <Link
            className="py-[10px] px-[14px] border-b-2 border-transparent hover:border-orange"
            href="#"
          >
            Projects
          </Link>
          <Link
            className="py-[10px] px-[14px] border-b-2 border-transparent hover:border-orange"
            href="#"
          >
            Testimonials
          </Link>
          <Link
            className="py-[10px] px-[14px] border-b-2 border-transparent hover:border-orange"
            href="#"
          >
            Contact
          </Link>
        </div>
        <a
          href="#"
          className="relative bg-orange py-[8px] px-[18px] md:py-[10px] md:px-[21px] text-base lg:text-lg 2xl:text-xl 3xl:text-[21px] 3xl:leading-[31.5px] rounded-md text-white overflow-hidden group"
        >
          <span className="relative z-10">Download CV</span>
          <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform delay-300 duration-1000 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
        </a>

        {/* Hamburger Button */}
        <button
          ref={buttonRef}
          className="nav:hidden z-50 group bg-foreground rounded-md px-1.5 py-2 md:px-2 md:py-2.5 "
          onClick={() => setIsOpen(!isOpen)}
        >
          <div
            className={`w-6 h-0.5 bg-background hover:bg-orange mb-1.5 transition-all group-hover:bg-orange ${
              isOpen ? "rotate-45 translate-y-2" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-background hover:bg-orange mb-1.5 transition-all group-hover:bg-orange ${
              isOpen ? "opacity-0" : ""
            }`}
          ></div>
          <div
            className={`w-6 h-0.5 bg-background hover:bg-orange transition-all group-hover:bg-orange ${
              isOpen ? "-rotate-45 -translate-y-2" : ""
            }`}
          ></div>
        </button>
        {/* Mobile Menu */}
        <div
          ref={menuRef}
          className={`fixed z-[49] top-0 right-0 h-screen w-[234px] font-bold bg-orange lg:hidden transition-transform duration-300 ${
            isOpen ? "translate-x-0" : "translate-x-full"
          }`}
        >
          <div className="flex flex-col gap-2 mt-[100px]">
            <Link
              className="py-[10px] px-[14px] border-y-2 border-transparent bg-background hover:border-foreground dark:hover:border-foreground"
              href="/"
            >
              Home
            </Link>
            <Link
              className="py-[10px] px-[14px] border-y-2 border-transparent bg-background hover:border-foreground dark:hover:border-foreground"
              href="#"
            >
              About Me
            </Link>
            <Link
              className="py-[10px] px-[14px] border-y-2 border-transparent bg-background hover:border-foreground dark:hover:border-foreground"
              href="#"
            >
              Services
            </Link>
            <Link
              className="py-[10px] px-[14px] border-y-2 border-transparent bg-background hover:border-foreground dark:hover:border-foreground"
              href="#"
            >
              Projects
            </Link>
            <Link
              className="py-[10px] px-[14px] border-y-2 border-transparent bg-background hover:border-foreground dark:hover:border-foreground"
              href="#"
            >
              Testimonials
            </Link>
            <Link
              className="py-[10px] px-[14px] border-y-2 border-transparent bg-background hover:border-foreground dark:hover:border-foreground"
              href="#"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
