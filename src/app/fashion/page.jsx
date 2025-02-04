"use client";
import { useEffect, useState } from "react";
import React from "react";
// import TextParallex from "@/components/globleComponent/TextParallex";
import ImageSlider from "@/components/globleComponent/ImageSlider";
import { useSelector } from "react-redux";

const Fashion = () => {
 
    const AllData = useSelector((state) => state.storeData.allData);
    console.log(AllData);
 
 
 
   if (!AllData || !AllData.categories) {
     return <p>Loading...</p>;
   }
 
   const categories = AllData.categories;
 console.log(categories);
 

const fashionCategory = categories.find(
  (category) => category.name === "fashion"
);

if (!fashionCategory) {
  return <p>Fashion category not found</p>;
}

  // console.log(fashionCategory.subcategories);
  const subcategories = fashionCategory.subcategories;

  return (
    <>
      <ImageSlider data={subcategories} />
    </>
  );
};

export default Fashion;
