"use client";
import React from "react";
import "swiper/css";
import "swiper/css/navigation";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import Link from "next/link";

const ImageSlider = ({ data }) => {
  console.log(data)
  // const data = [
  //   { img: "/super2.jpg", heading: "Winter Clothes" },
  //   { img: "/super3.webp", heading: "Nike Shoes" },
  //   { img: "/super4.webp", heading: "Puma Shoes" },
  //   { img: "/super5.webp", heading: "Shorts" },
  //   { img: "/super7.webp", heading: "Summer Clothes" },
  //   { img: "/super8.webp", heading: "Jeans" },
  //   { img: "/super9.webp", heading: "Running Shoes" },
  //   { img: "/super10.webp", heading: "Women Collection" },
  // ];

  return (
    <div className="px-6 py-4 md:px-10">
      {/* <div className="flex flex-col justify-center items-center">
        <h1 className="text-[6vh] sm:text-[9vh] md:text-[8vh] font-extrabold text-center">
          You Might Love
        </h1>
        <button className="px-7 py-3 mt-3 bg-black text-white rounded-full hover:bg-gray-900 duration-300">
          Explore
        </button>
      </div> */}{" "}
      <div>
        {/* <h2 className="text-2xl font-bold text-left my-6">
          SuperHero Collection
        </h2> */}
        <div className="relative max-w-screen">
          {/* Swiper Component */}
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={3}
            navigation={{
              nextEl: ".custom-next2",
              prevEl: ".custom-prev2",
            }}
            breakpoints={{
              1024: { slidesPerView: 3 },
              768: { slidesPerView: 2 },
              640: { slidesPerView: 2 },
              440: { slidesPerView: 1 },
              240: { slidesPerView: 1 },
            }}
          >
            {data.map((item, index) => (
              <SwiperSlide key={index}>
                <Link href={`/fashion/${item.name}`}>
                  <div className="relative group rounded-lg overflow-hidden duration-500 shadow-md">
                    {/* Image */}
                    <img
                      src={item.subcategoryImage}
                      alt={item.heading}
                      className="w-full h-screen object-cover rounded-lg scale-100 group-hover:scale-105 duration-500"
                    />
                    {/* Overlay */}
                    <div className="absolute inset-0 bg-black/60 flex flex-col justify-center items-center text-white opacity-0 group-hover:opacity-100 duration-300">
                      <p className="text-2xl font-bold capitalize">
                        {item.name}
                      </p>
                      <p className="text-sm mt-2">Explore this collection</p>
                    </div>
                  </div>
                </Link>
              </SwiperSlide>
            ))}
          </Swiper>

          {/* Navigation Buttons */}
          <button className="z-10 custom-prev2 absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-xl shadow-black cursor-pointer hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
          </button>
          <button className="z-10 custom-next2 absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-10 h-10 bg-white text-black rounded-full flex items-center justify-center shadow-xl shadow-black cursor-pointer hover:bg-gray-200">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="2"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider
