import { AboutUs } from "./about-us";
import { ValuesList } from "./values/values-list";

export function AboutSection() {
  return (
    <div className="w-full h-full flex gap-8 flex-col items-center justify-center p-0 md:p-4">
      <AboutUs />
      <div className="w-full h-[0.5px] bg-gray-200" />
      <ValuesList />
    </div>
  );
}