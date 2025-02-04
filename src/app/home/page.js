"use client";

import TextParallex from "@/components/globleComponent/TextParallex";

import SectionSlide from "@/components/globleComponent/SectionSlide";
import React from "react";
import HeroSection from "@/components/globleComponent/HeroSection";
import { useSelector } from "react-redux";

const HomePage = () => {

   const AllData = useSelector((state) => state.storeData.allData);
   console.log(AllData);



  if (!AllData || !AllData.categories) {
    return <p>Loading...</p>;
  }

  const categories = AllData.categories;
// console.log(categories);

  return (
    <>
      <HeroSection/>
      <SectionSlide data={categories} heading="Find the best" />
      <TextParallex
        heading="Fresh Groceries"
        subHeading="Everyday essentials at the best prices"
        img="/parallex/grocery.webp"
      />
    </>
  );
};

export default HomePage;
