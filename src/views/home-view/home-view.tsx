import { AboutSection } from "./components/about-section";
import { NewsSection } from "./components/news/news-section";
import { PartnersSection } from "./components/partners-section";
import { ProjectsSection } from "./components/projects/projects-section";
import { Slider } from "./components/slide-component";

export function HomeView() {
  return (
    <div className="w-full h-full stack items-center justify-center gap-2 p-0">
      <div className="w-full stack items-center justify-center gap-2 p-0 md:p-12">
        <Slider />
        <AboutSection />
      </div>
      <NewsSection />
      <ProjectsSection />
      <PartnersSection />
    </div>
  );
}
