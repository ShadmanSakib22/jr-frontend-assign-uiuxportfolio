import Button from "@/components/Button";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import ServiceCards from "@/components/ServiceCards";
import Projects from "@/components/Projects";
import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div className="mt-12 lg:mt-16 xl:mt-20 2xl:mt-24 3xl:mt-[120px] container flex flex-col-reverse justify-center md:flex-row items-center gap-6 md:gap-[100px] lg:gap-[148px]">
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
            height={617}
            className="w-[250px] md:w-[350px] lg:w-[450px] xl:w-[538px] h-auto max-h-[617px]"
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
                className="h-auto w-[28px] md:w-[32px] dark:invert hover:scale-110"
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
                className="h-auto w-[28px] md:w-[32px] dark:invert hover:scale-110"
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
                className="h-auto w-[28px] md:w-[32px] dark:invert hover:scale-110"
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
                className="h-auto w-[28px] md:w-[32px] dark:invert hover:scale-110"
              />
            </a>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="mt-[48px] lg:mt-[69px] container flex flex-col-reverse md:flex-row justify-center items-center gap-6 md:gap-10 lg:gap-20 xl:gap-28">
        <Image
          src="/about-img.png"
          alt="Mumair profile picture 2"
          width={545}
          height={675}
          className="w-[245px] md:w-[345px] lg:w-[445px] xl:w-[545px] h-auto max-h-[675px] "
          priority
        />
        {/* About Section Text */}
        <div className="flex flex-col gap-4 max-w-[80%] min-w-[320px] md:max-w-[520px] lg:max-w-[640px] xl:max-w-[750px] text-center md:text-left">
          <h2 className="main-h2  mb-2 lg:mb-4">About Me</h2>
          <p className="body-text">
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
          {/*Skills*/}
          <ProgressBar subject="UX" percentage={92} />
          <ProgressBar subject="Website Design" percentage={88} />
          <ProgressBar subject="App Design" percentage={96} />
          <ProgressBar subject="Graphic Design" percentage={92} />
        </div>
      </div>

      {/* Services Section */}
      <div className="mt-[64px] lg:mt-[140px] container text-center">
        <h2 className="main-h2 mb-2 lg:mb-4">Services</h2>
        <p className="body-text max-w-[80%] lg:max-w-[932px] mx-auto mb-6 lg:mb-10">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
        {/* Services Cards */}
        <ServiceCards />
      </div>

      {/* Projects Section */}
      <div className="mt-[64px] lg:mt-[140px] container text-center">
        <h2 className="main-h2 mb-2 lg:mb-4">Projects</h2>
        <p className="body-text max-w-[80%] lg:max-w-[921px] mx-auto mb-6 lg:mb-10">
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam mauris est risus lectus. Phasellus consequat urna tellus
        </p>
        {/* Projects Cards */}
        <Projects />
      </div>

      {/* Testimonials Section */}
      <div className="mt-[64px] lg:mt-[140px] container text-center">
        <h2 className="main-h2 mb-2 lg:mb-4">Testimonials</h2>
        <p className="body-text max-w-[80%] lg:max-w-[932px] mx-auto mb-6 lg:mb-10">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh lectus netus in. Aliquet donec morbi convallis pretium</p>
        {/* Testimonials Cards */}
       Testing Remote Origin
        </div>
    </>
  );
}
