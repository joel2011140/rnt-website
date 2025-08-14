import { AboutSection } from "./components/about-section";
import { Slider } from "./components/slide-component";

export function HomeView() {
  return (
    <div className="w-full h-full stack items-center justify-center gap-2 p-0 md:p-12">
      <Slider />
      <AboutSection />
    </div>
  );
}