"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const SectionSlide = () => {
  const data = [
    {
      title: "title1",
      img: "/men/shoes/shoes1.webp",
      price: 1000,
      discrption: "this is a good shoe",
    },
    {
      title: "title2",
      img: "/men/shoes/shoes2.webp",
      price: 1000,
      discrption: "this is a good shoe",
    },
    {
      title: "title3",
      img: "/men/shoes/shoes3.webp",
      price: 1000,
      discrption: "this is a good shoe",
    },
    {
      title: "title4",
      img: "/men/shoes/shoes4.webp",
      price: 1000,
      discrption: "this is a good shoe",
    },
    {
      title: "title5",
      img: "/men/shoes/shoes5.webp",
      price: 1000,
      discrption: "this is a good shoe",
    },
    {
      title: "title6",
      img: "/men/shoes/shoes6.webp",
      price: 1000,
      discrption: "this is a good shoe",
    },
    {
      title: "title7",
      img: "/men/shoes/shoes7.webp",
      price: 1000,
      discrption: "this is a good shoe",
    },
    {
      title: "title8",
      img: "/men/shoes/shoes8.webp",
      price: 1000,
      discrption: "this is a good shoe",
    },
    {
      title: "title9",
      img: "/men/shoes/shoes9.webp",
      price: 1000,
      discrption: "this is a good shoe",
    },
  ];

  const sliderRef = useRef(null);
  const itemWidth = 240; // Adjust based on item width + margin

  const nextSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: itemWidth, behavior: "smooth" });
    }
  };

  const prevSlide = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -itemWidth, behavior: "smooth" });
    }
  };

  return (
    <div className="relative w-full px-4 md:px-10">
      <div className="flex justify-between items-end px-2 md:px-5">
        <div className="text-2xl font-bold">Top Brands</div>
        <div className="cursor-pointer font-semibold text-blue-500 hover:underline">
          Visit Section
        </div>
      </div>
      <div className="relative flex items-center overflow-hidden">
        <button
          onClick={prevSlide}
          className="absolute left-0 z-10 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-900"
        >
          <ChevronLeft size={24} />
        </button>
        <div
          ref={sliderRef}
          className="flex overflow-x-auto gap-5 scrollbar-hide w-full px-10 py-4 scroll-smooth"
        >
          {data.map((item, index) => (
            <div
              key={index}
              className="flex-none w-56 transform transition-transform"
            >
              <div className="h-56 w-56 flex justify-center items-center bg-gray-100 rounded-lg shadow-md">
                <Image
                  src={item.img}
                  width={200}
                  height={200}
                  alt={item.title}
                  className="rounded-lg"
                />
              </div>
              <div className="text-center text-lg font-bold mt-2">
                {item.title}
              </div>
            </div>
          ))}
        </div>
        <button
          onClick={nextSlide}
          className="absolute right-0 z-10 p-2 bg-gray-700 text-white rounded-full hover:bg-gray-900"
        >
          <ChevronRight size={24} />
        </button>
      </div>
    </div>
  );
};

export default SectionSlide;
