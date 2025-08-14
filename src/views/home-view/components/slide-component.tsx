import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useHeaderDictionary } from "../../../locales/hooks/use-header-dictionary";


export function Slider() {
  const firstSlideTitle = useHeaderDictionary("slide.1");
  const slides = [
    {
      title: firstSlideTitle as string,
      image:
        "https://images.unsplash.com/photo-1581093588401-4fe18b6e1f7e?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: firstSlideTitle as string,
      image:
        "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80",
    },
    {
      title: firstSlideTitle as string,
      image:
        "https://images.unsplash.com/photo-1509395062183-67c5ad6faff9?auto=format&fit=crop&w=1600&q=80",
    },
  ];

  return (
    <div className="ptse-slider mt-12 md:mt-0 rounded-none md:rounded-[1rem] overflow-hidden">
      <Swiper
        modules={[Navigation, Pagination, Autoplay]}
        slidesPerView={1}
        autoplay={{
          delay: 4000,
          disableOnInteraction: false,
        }}
        speed={1000}
        pagination={{ el: ".custom-pagination", clickable: true }}
        navigation={{ prevEl: ".custom-prev", nextEl: ".custom-next" }}
      >
        {slides.map((slide, i) => (
          <SwiperSlide key={i}>
            <div className="relative w-full h-[400px] md:h-[550px] overflow-hidden">
              {/* Background Image with Zoom Animation */}
              <div
                className="absolute inset-0 bg-center bg-cover animate-zoomSlow"
                style={{
                  backgroundImage: `url(${slide.image})`,
                }}
              />
              {/* Overlay and Content */}
              <div className="relative z-10 bg-black/40 w-full h-full flex items-center">
                <div className="px-6 md:px-24 flex items-center gap-4">
                  {/* Vertical Line */}
                  <div
                    className="h-[6.6875rem] bg-[#996B00] w-[4px] rounded-full"

                  />
                  {/* Title with wrapping */}
                  <span className="text-[#F3F3F3] text-heading-24 md:text-heading-44 font-normal break-words max-w-[45rem] leading-snug">
                    {slide.title}
                  </span>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Navigation Controls */}
      <div className="slider-controls flex justify-center items-center gap-4 mt-4">
        <button className="nav-btn custom-prev bg-black/40 p-2 rounded-[0.25rem] hover:bg-black/60 transition">
          <ChevronLeft color="white" size={20} />
        </button>

        <div className="custom-pagination" />

        <button className="nav-btn custom-next bg-black/40 p-2 rounded-[0.25rem] hover:bg-black/60 transition">
          <ChevronRight size={20} color="white" />
        </button>
      </div>


    </div>
  );
}
