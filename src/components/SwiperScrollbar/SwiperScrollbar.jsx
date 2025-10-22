// src/components/HeroSlider/HeroSlider.jsx

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const SwiperScrollbar = () => {
  const slides = [
    {
      id: 1,
      image: "https://images.unsplash.com/photo-1507525428034-b723cf961d3e",
      title: "Learn, Share, and Grow",
      subtitle: "Exchange your skills with your community.",
    },
    {
      id: 2,
      image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c",
      title: "Find Local Experts",
      subtitle: "Connect with talented people nearby.",
    },
    {
      id: 3,
      image: "https://images.unsplash.com/photo-1498050108023-c5249f4df085",
      title: "Teach What You Love",
      subtitle: "Offer your skills and inspire others.",
    },
  ];

  return (
    <div className="relative w-full h-[80vh]">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper h-full"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            <div
              className="h-full bg-cover bg-center flex flex-col justify-center items-center text-white"
              style={{ backgroundImage: `url(${slide.image})` }}
            >
              <div className="bg-black/50 p-5 rounded-xl text-center">
                <h1 className="text-4xl md:text-6xl font-bold mb-2">
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl">{slide.subtitle}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperScrollbar;
