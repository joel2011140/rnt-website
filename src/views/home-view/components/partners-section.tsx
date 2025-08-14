import "swiper/css";
import { VerticalLineContent } from "../../../components/vertical-line-content";
import { useHeaderDictionary } from "../../../locales/hooks/use-header-dictionary";
import { Swiper, SwiperSlide } from "swiper/react";
import MemoEngineeringPartner from "./icons/engineering-partner";
import MemoJeraldicPartner from "./icons/jeraldic-partner";
import MemoNextPartner from "./icons/next-partner";
import MemoRedFoxPartner from "./icons/red-fox-partner";
import MemoSolarPowerPartner from "./icons/solar-power-partner";
import { Fragment } from "react/jsx-runtime";

export function PartnersSection() {
  const partnersText = useHeaderDictionary("partners");

  const partnersList = [
    <MemoEngineeringPartner />,
    <MemoJeraldicPartner />,
    <MemoNextPartner />,
    <MemoRedFoxPartner />,
    <MemoSolarPowerPartner />,
  ];

  return (
    <div className="w-full flex flex-col gap-4 md:gap-8 px-4 sm:px-6 md:px-12 lg:px-16 py-6 md:py-12">
      {/* Title */}
      <VerticalLineContent asNormal>
        <span className="text-body-14 sm:text-base md:text-xl lg:text-2xl text-aqua-rnt-dark font-semibold">
          {partnersText as string}
        </span>
      </VerticalLineContent>

      {/* Swiper for partners */}
      <Swiper
        spaceBetween={12}
        slidesPerView={1}
        freeMode={true}
        breakpoints={{
          480: {
            slidesPerView: 1,
            spaceBetween: 12,
          },
          640: {
            slidesPerView: 1,
            spaceBetween: 16,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          1024: {
            slidesPerView: 5,
            spaceBetween: 22,
          },
        }}
        className="w-full"
      >
        {partnersList.map((partner, index) => (
          <SwiperSlide
            key={index}
            className="flex justify-center items-center !w-full h-full md:!w-[200px]"
          >
            <div className="!w-full h-auto ">
              {partner}
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}