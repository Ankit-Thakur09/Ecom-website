"use client";
import { useEffect, useState } from "react";
import StackSlider from "@/components/globleComponent/StackSlider";
import TextParallex from "@/components/globleComponent/TextParallex";
import TopSection from "@/components/globleComponent/TopSection";
import Card from "@/components/homeComponent/Card";
import SectionSlide from "@/components/globleComponent/SectionSlide";
import React from "react";

const HomePage = () => {
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

  // console.log("Categories:", categories);
  // const categoryNames = Object.keys(categories);
  // console.log(categoryNames);
  return (
    <>
      <SectionSlide data={categories} />
    </>
  );
};

export default HomePage;
