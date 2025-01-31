"use client";
import Image from "next/image";
import React, { useState, useRef } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { useSelector } from "react-redux";
import Link from "next/link";

const SectionSlide = ({ data, visit = false, heading }) => {
  const sliderRef = useRef(null);
  const itemWidth = 240;

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
        <div className="text-2xl font-bold">{heading}</div>
        <div
          className={`${
            visit
              ? " cursor-pointer font-semibold text-blue-500 hover:underline"
              : "hidden"
          }`}
        >
          Visit Section
        </div>
      </div>
      <div className="relative flex items-center overflow-hidden ">
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
            <Link
              href={`/${item.path}`}
              key={index}
              className="flex-none w-56 transform transition-transform cursor-pointer hover:scale-105"
            >
              <div className="h-[200px] w-[200px] flex overflow-hidden justify-center items-center bg-gray-100 rounded-lg shadow-md">
                <img
                  src={item.categoryImage}
                  alt={item.name}
                  className="rounded-lg  "
                />
              </div>
              <div className="text-center text-lg font-bold mt-2 capitalize">
                {item.name}
              </div>
            </Link>
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
