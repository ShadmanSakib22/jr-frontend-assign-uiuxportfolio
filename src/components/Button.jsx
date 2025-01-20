import React from "react";

const Button = ({ children, className = "", ...props }) => {
  return (
    <button
      className={`relative min-w-[144px] 3xl:min-w-[186px] bg-orange py-[6px] px-[18.5px] md:py-[10px] md:px-[22.5px] text-base lg:text-lg 2xl:text-xl 3xl:text-[21px] 3xl:leading-[31.5px] rounded-md text-white overflow-hidden group ${className}`}
      {...props}
    >
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform delay-300 duration-1000 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
    </button>
  );
};

export default Button;
