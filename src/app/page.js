import Button from "@/components/Button";
import SocialIcons from "@/components/SocialIcons";
import ProgressBar from "@/components/ProgressBar/ProgressBar";
import ServiceCards from "@/components/ServiceCards";
import Projects from "@/components/Projects";
import TestimonialSlider from "@/components/Testimonials/TestimonialSlider";


import Image from "next/image";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <div id="home" className="mt-12 lg:mt-16 xl:mt-20 2xl:mt-24 3xl:mt-[120px] container flex flex-col-reverse justify-center md:flex-row items-center gap-6 md:gap-[100px] lg:gap-[148px]">
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
            <SocialIcons/>
        </div>
      </div>

      {/* About Section */}
      <div id="about-me" className="mt-[48px] lg:mt-[69px] container flex flex-col-reverse md:flex-row justify-center items-center gap-6 md:gap-10 lg:gap-20 xl:gap-28">
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
      <div id="services" className="mt-[64px] lg:mt-[140px] container text-center">
        <h2 className="main-h2 mb-2 lg:mb-4">Services</h2>
        <p className="body-text max-w-[80%] lg:max-w-[932px] mx-auto mb-6 lg:mb-10">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
        {/* Services Cards */}
        <ServiceCards />
      </div>

      {/* Projects Section */}
      <div id="projects" className="mt-[64px] lg:mt-[140px] container text-center">
        <h2 className="main-h2 mb-2 lg:mb-4">Projects</h2>
        <p className="body-text max-w-[80%] lg:max-w-[921px] mx-auto mb-6 lg:mb-10">
          Lorem ipsum dolor sit amet consectetur. Mollis erat duis aliquam
          mauris est risus lectus. Phasellus consequat urna tellus
        </p>
        {/* Projects Cards */}
        <Projects />
      </div>

      {/* Testimonials Section */}
      <div id="testimonials" className="mt-[64px] lg:mt-[140px] container text-center">
        <h2 className="main-h2 mb-2 lg:mb-4">Testimonials</h2>
        <p className="body-text max-w-[80%] lg:max-w-[932px] mx-auto mb-6 lg:mb-10">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
      </div>
      {/* Testimonials Cards */}
      <TestimonialSlider />

      {/* Contact Section */}
      <div id="contact" className="my-[64px] lg:my-[140px] container text-center">
        <h2 className="main-h2 mb-2 lg:mb-4">Lets Design Together</h2>
        <p className="body-text max-w-[80%] lg:max-w-[932px] mx-auto mb-6 lg:mb-10">
          Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa nibh
          lectus netus in. Aliquet donec morbi convallis pretium
        </p>
        {/* Will add API later for Form action */}
        <form  className="w-full">
          <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:gap-6 max-w-[80%] mx-auto">
            <input
              type="email"
              placeholder="Enter Your Email"
              className="body-text border border-light3 bg-light1 rounded-[14px] px-5 md:px-6 lg:px-7 py-3 md:py-4 lg:py-5 min-h-[52px] md:h-[61px] lg:h-[71px] lg:max-w-[627px] focus:border-orange focus:outline-none flex-1"
              name="email"
              required
            />
            <Button
              className="rounded-[14px] w-[182px] h-[52px] md:w-[202px] md:h-[61px] lg:w-[222px] lg:h-[71px] font-semibold ter-heading"
              type="submit"
            >
              Contact Me
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}
