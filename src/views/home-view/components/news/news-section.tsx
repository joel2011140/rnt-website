import { VerticalLineContent } from "../../../../components/vertical-line-content";
import { useHeaderDictionary } from "../../../../locales/hooks/use-header-dictionary";
import { NewsCard } from "./news-card";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import { useRef } from "react";

export function NewsSection() {
  const newsText = useHeaderDictionary("news");

  const prevRef = useRef<HTMLDivElement>(null);
  const nextRef = useRef<HTMLDivElement>(null);

  const newsList = [
    {
      banner: "https://images.unsplash.com/photo-1581091012184-7e86a354a34f?auto=format&fit=crop&w=800&q=80",
      title: "AI Revolution",
      description: "Projetos como parques solares e eólicos, aliados a iniciativas de eletrificação rural..."
    },
    {
      banner: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=800&q=80",
      title: "Space Exploration",
      description: "New discoveries in space technology are expanding human understanding."
    },
    {
      banner: "https://images.unsplash.com/photo-1509395176047-4a66953fd231?auto=format&fit=crop&w=800&q=80",
      title: "Green Energy",
      description: "Renewable energy sources are becoming more efficient and accessible."
    },
    {
      banner: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?auto=format&fit=crop&w=800&q=80",
      title: "Climate Action",
      description: "Global initiatives are pushing for faster adoption of climate policies."
    },
    {
      banner: "https://images.unsplash.com/photo-1581091215367-1b0f49db20f5?auto=format&fit=crop&w=800&q=80",
      title: "Healthcare Innovation",
      description: "Breakthroughs in medicine are improving patient care worldwide."
    },
  ];

  return (
    <div className="w-full !bg-opacity-20 bg-gray-300 h-full  flex flex-col items-center justify-center p-2 md:p-12 relative">
      <VerticalLineContent asNormal className="ml-0">
        <span className="text-body-14 md:text-[1.75rem] text-aqua-rnt-dark">
          {newsText as string}
        </span>
      </VerticalLineContent>

      <div className="w-full mt-6 relative">
        {/* Custom Navigation Buttons (desktop only) */}
        <div
          ref={prevRef}
          className="hidden md:flex absolute top-1/2 left-2 z-20 -translate-y-1/2 cursor-pointer p-2 bg-[#1274AE33] rounded-[4px]"
        >
          <ChevronLeft size={24} className="text-white" />
        </div>
        <div
          ref={nextRef}
          className="hidden md:flex absolute top-1/2 right-2 z-20 -translate-y-1/2 cursor-pointer p-2 #1274AE33 rounded-[4px] "
        >
          <ChevronRight size={24} className="text-white" />
        </div>

        <Swiper
          modules={[Navigation]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={{
            prevEl: prevRef.current,
            nextEl: nextRef.current,
          }}
          onBeforeInit={(swiper) => {
            // @ts-ignore
            swiper.params.navigation.prevEl = prevRef.current;
            // @ts-ignore
            swiper.params.navigation.nextEl = nextRef.current;
          }}
          breakpoints={{
            640: { slidesPerView: 1 },
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {newsList.map((news, index) => (
            <SwiperSlide key={index} className="flex justify-center w-full">
              <div className="w-full flex flex-col h-full">
                <NewsCard
                  banner={news.banner}
                  title={news.title}
                  description={news.description}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
}
