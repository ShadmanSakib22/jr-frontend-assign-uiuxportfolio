"use client";
import React, { useState, useEffect, useRef } from "react";
import Logo from "@/components/Logo";
import Button from "./Button";
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
      <div className="flex items-center gap-2 md:gap-3 lg:gap-4 xl:gap-6">
        {/* Desktop Menu */}
        <div className="hidden nav:flex gap-3 body-text">
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
        <Button href="https://docs.google.com/document/u/3/d/17s6injUlvj12B-Wituc63HStdwiz7nAB/edit?usp=sharing&ouid=115944811398564221680&rtpof=true&sd=true">
          Download CV
        </Button>

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
          className={`fixed z-[49] top-0 right-0 h-screen w-[234px] ter-heading font-bold bg-orange lg:hidden transition-transform duration-300 ${
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
              href="#about-me"
            >
              About Me
            </Link>
            <Link
              className="py-[10px] px-[14px] border-y-2 border-transparent bg-background hover:border-foreground dark:hover:border-foreground"
              href="#services"
            >
              Services
            </Link>
            <Link
              className="py-[10px] px-[14px] border-y-2 border-transparent bg-background hover:border-foreground dark:hover:border-foreground"
              href="#projects"
            >
              Projects
            </Link>
            <Link
              className="py-[10px] px-[14px] border-y-2 border-transparent bg-background hover:border-foreground dark:hover:border-foreground"
              href="#testimonials"
            >
              Testimonials
            </Link>
            <Link
              className="py-[10px] px-[14px] border-y-2 border-transparent bg-background hover:border-foreground dark:hover:border-foreground"
              href="#contact"
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
