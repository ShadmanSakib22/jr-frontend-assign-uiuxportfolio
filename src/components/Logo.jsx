import React from "react";
import Image from "next/image";
import Link from "next/link";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-montserrat",
});

const Logo = () => {
  return (
    <Link
      className={`flex items-center text-xl lg:text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-5xl 3xl:leading-[58px] font-bold text-charcoalBlack dark:text-bgGray ${montserrat.className} `}
      href="/"
    >
      <Image
        src="/logo.svg"
        alt="Logo"
        width={67}
        height={67}
        className="mr-1 md:mr-2 lg:mr-3 xl:mr-4 2xl:mr-5 w-[35px] h-[35px] md:w-[39px] md:h-[39px] lg:w-[43px] lg:h-[43px] xl:w-[49px] xl:h-[49px] 2xl:w-[55px] 2xl:h-[55px] 3xl:w-[67px] 3xl:h-[67px]"
      />
      M
      <span className="font-normal text-lightBlack dark:text-bgGray">
        umair
      </span>
    </Link>
  );
};

export default Logo;
