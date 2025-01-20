import React from "react";

const Button = ({ children, className = "", href, ...props }) => {
  const baseClasses = `relative inline-block text-center min-w-[144px] xl:min-w-[186px] min-h-[36px] xl:min-h-[52px] bg-orange py-[6px] px-[18.5px] md:py-[10px] md:px-[22.5px] text-sm md:text-base lg:text-lg xl:text-[21px] xl:leading-[31.5px] rounded-md text-white overflow-hidden group ${className}`;

  const content = (
    <>
      <span className="relative z-10">{children}</span>
      <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform delay-300 duration-1000 bg-gradient-to-r from-transparent via-white/50 to-transparent"></div>
    </>
  );

  return href ? (
    <a
      href={href}
      className={baseClasses}
      target="_blank"
      rel="noopener noreferrer"
      {...props}
    >
      {content}
    </a>
  ) : (
    <button className={baseClasses} {...props}>
      {content}
    </button>
  );
};

export default Button;
