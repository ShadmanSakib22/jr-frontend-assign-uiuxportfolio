import Button from "@/components/Button";

export default function Home() {
  return (
    <>
      <div className="mt-8 md:mt-12 lg:mt-16 xl:mt-20 2xl:mt-24 3xl:mt-[120px] container flex justify-between">
        {/* Hero Section */}
        <div>
          <h6>Hi I am</h6>
          <h5>Muhammad Umair</h5>
          <h1>UI & UX/</h1>
          <h1>Designer</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Tristique amet sed massa
            nibh lectus netus in. Aliquet donec morbi convallis pretium. Turpis
            tempus pharetra
          </p>
          <Button href="#">Hire Me</Button>
        </div>
      </div>
    </>
  );
}
