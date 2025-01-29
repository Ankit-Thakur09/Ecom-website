"use client";
import { useEffect, useState } from "react";
import React from "react";
// import TextParallex from "@/components/globleComponent/TextParallex";
import ImageSlider from "@/components/globleComponent/ImageSlider";
import { useSelector } from "react-redux";

const Fashion = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  // const [category, setCategory] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/itemsData.json"); // Fetch from public folder
        if (!response.ok) throw new Error("Failed to load data");

        const jsonData = await response.json();
        setData(jsonData);
      } catch (err) {
        setError(err.message);
      }
    };

    fetchData();
  }, []);

  // // console.log(data );

  if (!data || !data.categories) {
    return <p>Loading...</p>;
  }

  const categories = data.categories;
const fashionCategory = categories.find(
  (category) => category.name === "fashion"
);

if (!fashionCategory) {
  return <p>Fashion category not found</p>;
}

  console.log(fashionCategory.subcategories);
  const subcategories = fashionCategory.subcategories;

  return (
    <>
      <ImageSlider data={subcategories} />
    </>
  );
};

export default Fashion;
