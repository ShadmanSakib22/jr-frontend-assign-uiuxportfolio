import Image from "next/image";

const serviceCardsData = [
  {
    id: 1,
    title: "UI/UX",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    image: {
      src: "/services/uiux.png",
      alt: "UI/UX",
      width: 70,
      height: 70,
    },
  },
  {
    id: 2,
    title: "Web Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    image: {
      src: "/services/webdesign.png",
      alt: "Web Design",
      width: 72,
      height: 82,
    },
  },
  {
    id: 3,
    title: "App Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    image: {
      src: "/services/appdesign.png",
      alt: "Web Design",
      width: 47,
      height: 83,
    },
    },
  {
    id: 4,
    title: "Graphic Design",
    description:
      "Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam interdum",
    image: {
      src: "/services/graphicdesign.png",
      alt: "Graphic Design",
      width: 82,
      height: 70,
    },
  }
];

const ServiceCards = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 md:gap-6 lg:gap-8 xl:gap-5 place-items-center justify-center mx-auto max-w-fit  text-left">
      {serviceCardsData.map((card) => (
        <div
          key={card.id}
          className="relative w-[330px] h-[260px] lg:h-[346px] bg-light1 dark:text-black rounded-lg lg:rounded-[14px] transition-all duration-300 px-5 group"
        >
          <div className="absolute top-3 right-3 w-6 h-6 rounded-full bg-white transition-all duration-300 group-hover:bg-orange border-2 border-transparent group-hover:shadow-lg group-hover:border-black"></div>

          <div className="absolute bottom-6 lg:bottom-8 flex flex-col justify-center gap-4">
            <Image
              src={card.image.src}
              alt={card.image.alt}
              width={card.image.width}
              height={card.image.height}
            />
            <h4 className="ter-heading font-semibold">{card.title}</h4>
            <p className="body-text">{card.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};


export default ServiceCards;
