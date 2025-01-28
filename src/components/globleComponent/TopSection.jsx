"use client"

import { useState, useEffect } from "react";
// import { NavLink } from "react-router-dom";
import { ChevronLeft, ChevronRight } from "lucide-react";

function TopSection() {
  const slides = [
    {
      src: "/parallex/electro.webp",
      text: "Discover the Latest Trends",
      subtext: "Shop the newest arrivals now",
    },
    {
      src: "/parallex/electro.webp",
      text: "Exclusive Discounts",
      subtext: "Save big on top brands",
    },
    {
      src: "/parallex/electro.webp",
      text: "Fast & Free Shipping",
      subtext: "On all orders over $50",
    },
    {
      src: "/parallex/electro.webp",
      text: "Shop Smart, Live Better",
      subtext: "Find the best deals here",
    },
    {
      src: "/parallex/electro.webp",
      text: "New Arrivals Weekly",
      subtext: "Stay ahead of the trends",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [slides.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden flex items-center justify-center">
      <button
        onClick={prevSlide}
        className="absolute left-4 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900"
      >
        <ChevronLeft size={24} />
      </button>
      <div className="flex space-x-4 overflow-hidden w-3/4">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`flex-none w-1/3 transition-transform duration-700 ease-in-out transform ${
              index >= currentIndex && index < currentIndex + 3
                ? "opacity-100"
                : "opacity-0"
            }`}
          >
            <img
              src={slide.src}
              alt={`Slide ${index + 1}`}
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
            <div className="text-center text-white mt-2">
              <h2 className="text-lg font-bold">{slide.text}</h2>
              <p className="text-sm">{slide.subtext}</p>
            </div>
          </div>
        ))}
      </div>
      <button
        onClick={nextSlide}
        className="absolute right-4 bg-gray-700 text-white p-2 rounded-full hover:bg-gray-900"
      >
        <ChevronRight size={24} />
      </button>
    </div>
  );
}

export default TopSection;
