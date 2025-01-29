"use client";
import { useEffect, useState } from "react";
import HomePage from "./home/page";
import { useDispatch } from "react-redux";
import { allStoreData } from "./store/reducer/StoreDataReducer";

export default function Home() {
  const [data, setData] = useState(null);
  const [error, setError] = useState("");
  // const [category, setCategory] = useState("");
 

  useEffect(
    () => {
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
    },
    [],
    
  );

  // // console.log(data );

  if (!data || !data.categories) {
    return <p>Loading...</p>;
  }

  const categories = data.categories;

  console.log("Categories:", categories);
  

  return (
    <>
      <HomePage />
    </>
  );
}
