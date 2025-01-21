"use client";
import React, { useState } from "react";
import Image from "next/image";

const projectCategories = [
  "All",
  "UI/UX",
  "Web Design",
  "App Design",
  "Graphic Design",
];

const projectsData = [
  {
    id: 1,
    title: "Project One",
    category: "Web Design",
    link: "shadman-portfolio-2024.vercel.app/",
    image: {
      src: "/projects/project1.png",
      alt: "Project One",
      width: 379,
      height: 490,
    },
  },
  {
    id: 2,
    title: "Project Two",
    category: "Web Design",
    link: "shadman-portfolio-2024.vercel.app/",
    image: {
      src: "/projects/project2.png",
      alt: "Project Two",
      width: 379,
      height: 490,
    },
  },
  {
    id: 3,
    title: "Project Three",
    category: "Web Design",
    link: "shadman-portfolio-2024.vercel.app/",
    image: {
      src: "/projects/project3.png",
      alt: "Project Three",
      width: 379,
      height: 490,
    },
  },
  {
    id: 4,
    title: "Project Four",
    category: "App Design",
    link: "shadman-portfolio-2024.vercel.app/",
    image: {
      src: "/projects/project1.png",
      alt: "Project Four",
      width: 379,
      height: 490,
    },
  },
  {
    id: 5,
    title: "Project Five",
    category: "UI/UX",
    link: "shadman-portfolio-2024.vercel.app/",
    image: {
      src: "/projects/project2.png",
      alt: "Project Five",
      width: 379,
      height: 490,
    },
  },
  {
    id: 6,
    title: "Project Six",
    category: "Graphic Design",
    link: "shadman-portfolio-2024.vercel.app/",
    image: {
      src: "/projects/project1.png",
      alt: "Project Six",
      width: 379,
      height: 490,
    },
  },

  // Add more projects as needed
];

const Projects = () => {
    const [activeTab, setActiveTab] = useState("All");
    const [visibleProjects, setVisibleProjects] = useState(3);

    const filteredProjects =
    activeTab === "All"
        ? projectsData
        : projectsData.filter((project) => project.category === activeTab);

    const toggleProjects = () => {
    setVisibleProjects((prev) => (prev === 3 ? filteredProjects.length : 3));
    };

    const displayedProjects = filteredProjects.slice(0, visibleProjects);
    const hasMoreProjects = filteredProjects.length > 3;

  return (
    <>
      {/* Tabs */}
      <div className="flex flex-wrap justify-center items-center gap-4 lg:gap-6 mb-16 lg:mb-24 xl:mb-[105px] ter-heading">
        {projectCategories.map((category) => (
          <button
            key={category}
            onClick={() => {
              setActiveTab(category);
              setVisibleProjects(3); // Reset visible projects when changing category
            }}
            className={`${
              activeTab === category
                ? "bg-orange text-white"
                : "bg-light1 text-black hover:border-orange"
            } rounded-lg lg:rounded-xl border-[0.4px] border-lightBlack px-4 py-2 transition-colors duration-300`}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 xl:gap-5 place-items-center justify-center mx-auto max-w-fit">
        {displayedProjects.map((project) => (
          <div key={project.id} className="flex flex-col items-center">
            <div className="bg-lightOrange w-[325px] lg:w-[445px] h-[370px] lg:h-[490px] mb-4 md:mb-6 lg:mb-8 flex justify-center items-center rounded-xl">
              <Image
                src={project.image.src}
                alt={project.image.alt}
                width={project.image.width}
                height={project.image.height}
                className="object-contain w-[325px] lg:w-[445px] h-[370px] lg:h-[490px]"
              />
            </div>
            <h6 className="text-orange text-base xl:text-lg mb-2 md:mb-3">
              {project.category}
            </h6>
            <h5 className="ter-heading font-bold mb-4 lg:mb-8">
              <a
                href={project.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-orange transition-colors duration-300"
              >
                {project.title}
              </a>
            </h5>
          </div>
        ))}
      </div>

      {/* Toggle Button */}
      {hasMoreProjects && (
        <div className="flex justify-center mt-8">
          <button
            onClick={toggleProjects}
            className="bg-orange text-white px-6 py-3 rounded-lg hover:bg-opacity-90 transition-all duration-300"
          >
            {visibleProjects === 3 ? "Show More" : "Show Less"}
          </button>
        </div>
      )}
    </>
  );
};


export default Projects;
