import { VerticalLineContent } from "@components/vertical-line-content";
import { useHeaderDictionary } from "../../../../locales/hooks/use-header-dictionary";
import { useState } from "react";

export function ProjectsSection() {
  const projectsText = useHeaderDictionary("projects");
  const [activeIndex, setActiveIndex] = useState(0);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(null); // For mobile expand

  const projectsList = [
    {
      banner: "https://images.unsplash.com/photo-1581091012184-7e86a354a34f?auto=format&fit=crop&w=800&q=80",
      title: "Project AI",
      description: "AI-powered analytics platform for businesses to optimize performance.",
    },
    {
      banner: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      title: "Space Initiative",
      description: "Exploring satellite technology and space exploration projects.",
    },
    {
      banner: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80",
      title: "Green Energy",
      description: "Implementing renewable energy projects to reduce carbon footprint.",
    },
    {
      banner: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      title: "Climate Action",
      description: "Global initiatives promoting sustainable practices.",
    },
    {
      banner: "https://images.unsplash.com/photo-1581091215367-1b0f49db20f5?auto=format&fit=crop&w=800&q=80",
      title: "Healthcare Innovation",
      description: "Medical breakthroughs improving patient care worldwide.",
    },
  ];

  const handleClick = (index: number) => {
    setActiveIndex(index);
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  return (
    <div className="w-full flex flex-col gap-8 p-4 md:p-12">
      {/* Title */}
      <VerticalLineContent asNormal>
        <span className="text-body-14 md:text-[1.75rem] text-aqua-rnt-dark font-semibold">
          {projectsText as string}
        </span>
      </VerticalLineContent>

      {/* Projects Section */}
      <div className="w-full flex flex-col md:flex-row gap-8">
        {/* Left Column: List */}
        <div className="flex flex-col gap-4 w-full md:w-[36.938rem]">
          {projectsList.map((project, index) => (
            <div key={index} className="flex flex-col">
              <div onClick={() => handleClick(index)} className="cursor-pointer">
                <ProjectCard
                  banner={project.banner}
                  title={project.title}
                  description={project.description}
                  isActive={index === activeIndex}
                />
              </div>

              {/* Mobile expanded view */}
              {expandedIndex === index && (
                <div className="md:hidden bg-white rounded-md shadow-md flex flex-col mt-2 overflow-hidden">
                  {project.banner && (
                    <img
                      src={project.banner}
                      alt={project.title}
                      className="w-full h-56 object-cover"
                    />
                  )}
                  <div className="p-4 flex flex-col gap-2">
                    <h2 className="text-xl font-bold">{project.title}</h2>
                    <p className="text-gray-700">{project.description}</p>
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Right Column: Active Project */}
        <div className="hidden md:flex justify-center w-full">
          <div className="bg-white rounded-md shadow-md flex flex-col w-full max-w-[828px] overflow-hidden">
            {projectsList[activeIndex].banner && (
              <img
                src={projectsList[activeIndex].banner}
                alt={projectsList[activeIndex].title}
                className="w-full h-64 md:h-[40rem] object-cover"
              />
            )}
            <div className="p-6 flex flex-col gap-2">
              <h2 className="text-body-16 md:text-[1.75rem] text-[#3AA8DB] font-normal">{projectsList[activeIndex].title}</h2>
              <p className="text-[#46555C] text-body-12 md:text-body-20">{projectsList[activeIndex].description}</p>
            </div>
          </div>
        </div>
      </div>
      <div className="w-full h-[0.5px] bg-gray-200" />
    </div>
  );
}

// ProjectCard Component
export function ProjectCard({
  banner,
  title,
  description,
  isActive = false,
}: {
  banner?: string;
  title?: string;
  description?: string;
  isActive?: boolean;
}) {
  return (
    <div
      className={`flex items-center gap-4 rounded-md shadow-md border-2 transition-all duration-300 ${
        isActive ? "border-blue-500 scale-105" : "border-transparent"
      } bg-white overflow-hidden`}
    >
      {banner && (
        <img
          src={banner}
          alt={title}
          className="object-cover rounded-l-md w-full md:w-[13.87rem] md:h-[8.69rem]"
        />
      )}
      <div className="flex flex-col gap-2 justify-center p-2 md:p-4">
        {title && <h3 className="font-normal text-body-14 md:text-body-20 text-[#3AA8DB]">{title}</h3>}
        {description && (
          <p className="text-body-12 text-[#3AA8DB] line-clamp-3">{description}</p>
        )}
      </div>
    </div>
  );
}
