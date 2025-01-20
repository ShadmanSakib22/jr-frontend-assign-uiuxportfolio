import Button from "@/components/Button";
import Image from "next/image";

export default function Home() {
  return (
    <>
      <div className="mt-8 md:mt-12 lg:mt-16 xl:mt-20 2xl:mt-24 3xl:mt-[120px] container flex flex-col-reverse justify-center md:flex-row items-center gap-6 md:gap-[100px] lg:gap-[148px]">
        {/* Hero Section */}
        <div className="max-w-[80%] min-w-[340px] md:max-w-[400px] lg:max-w-[480px] xl:max-w-[680px] text-center md:text-left">
          <h6 className="ter-heading font-semibold">Hi I am</h6>
          <h5 className="sec-heading text-orange">Muhammad Umair</h5>
          <h1 className="main-h1">
            UI & UX <span className="inline md:hidden ">Designer</span>{" "}
          </h1>
          <h1 className="main-h1 text-right hidden md:block">Designer</h1>
          <p className="body-text mt-4 md:mt-5 lg:mt-6 xl:mt-7 ">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
          <Button
            className="mt-3 md:mt-4 lg:mt-5 xl:mt-[22px]"
            href="https://shadman-portfolio-2024.vercel.app/"
          >
            Hire Me
          </Button>
        </div>

        <div>
          <Image
            src="/hero-img.png"
            alt="Mumair profile picture"
            width={538}
            height={624}
            className="w-[250px] md:w-[350px] lg:w-[450px] xl:w-[538px] h-auto"
            priority
          />
          {/*Social Media Icons*/}
          <div className="flex justify-center gap-4 lg:gap-6 mt-4 md:mt-6 lg:mt-8 xl:mt-9">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/icons/fb.svg"}
                alt="Facebook"
                width={32}
                height={32}
                className="h-auto w-[28px] md:w-[32px]"
              />
            </a>
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/icons/twitter.svg"}
                alt="Twitter"
                width={32}
                height={32}
                className="h-auto w-[28px] md:w-[32px]"
              />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/icons/instagram.svg"}
                alt="Instagram"
                width={32}
                height={32}
                className="h-auto w-[28px] md:w-[32px]"
              />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={"/icons/linkedin.svg"}
                alt="Linkedin"
                width={32}
                height={32}
                className="h-auto w-[28px] md:w-[32px]"
              />
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
