"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { EffectCube, Autoplay, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-cube";
import "swiper/css/pagination";

const imgData = [
  {
    imgAdderss: "/thumbnails/sports.webp",
    costData: "100000",
    overlayHeading: "Public",
    overlayText: "This is a sample text.",
    rating: "7892",
  },
  {
    imgAdderss: "/thumbnails/sports.webp",
    costData: "120000",
    overlayHeading: "Exclusive",
    overlayText: "Another sample text.",
    rating: "8920",
  },
  {
    imgAdderss: "/thumbnails/sports.webp",
    costData: "95000",
    overlayHeading: "Limited",
    overlayText: "Limited offer available.",
    rating: "6791",
  },
];

const CubeHero = () => {
  return (
    <div
      className="flex flex-col-reverse md:flex-row justify-center items-center gap-3 px-6 py-10 space-y-6 md:space-y-0 md:space-x-8   "
      style={{
        backgroundImage:
          "radial-gradient(circle at 20% 100%, rgba(184, 184, 184, 0.1) 0%, rgba(184, 184, 184, 0.1) 33%, rgba(96, 96, 96, 0.1) 33%, rgba(96, 96, 96, 0.1) 66%, rgba(7, 7, 7, 0.1) 66%, rgba(7, 7, 7, 0.1) 99%), linear-gradient(40deg, #040a22, #162561, #202e64, #677aa6)",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Left Side Content */}
      <div className="md:w-1/2 space-y-4">
        <h2 className="text-3xl font-bold text-white">Welcome</h2>
        <p className="text-white">
          Explore a variety of amazing deals and offers. Find the best prices
          for exclusive items and limited-time offers.
        </p>
        <button className="px-4 py-2 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 transition">
          Click Here
        </button>
      </div>

      {/* Cube Slider Section */}
      <div className="md:w-1/2 max-w-xs">
        <Swiper
          effect="cube"
          grabCursor={true}
          loop={true}
          cubeEffect={{
            shadow: true,
            slideShadows: true,
            shadowOffset: 20,
            shadowScale: 0.94,
          }}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
          }}
          pagination={{ clickable: true }}
          modules={[EffectCube, Autoplay, Pagination]}
          className="w-[70%] h-[230px] md:w-full md:h-[300px] rounded-lg"
        >
          {imgData.map((data, index) => (
            <SwiperSlide
              key={index}
              className="relative flex items-center justify-center"
            >
              <img
                src={data.imgAdderss}
                alt="Slider"
                className="w-full h-full object-cover rounded-lg"
              />
              <div className="absolute bottom-4 left-4 bg-black/60 text-white p-2 rounded-lg">
                <h3 className="text-lg font-semibold">{data.overlayHeading}</h3>
                <p className="text-sm">{data.overlayText}</p>
                <p className="text-sm font-bold">Price: ${data.costData}</p>
                <p className="text-xs opacity-80">⭐ {data.rating}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default CubeHero;
