"use client";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { allStoreData } from "../store/reducer/StoreDataReducer";
import {
  setCategories,
  setSubcategories,
  setItems,
} from "../store/reducer/DataSlice"; // Import additional actions

export default function DataFetcher() {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("/data/itemsData.json");
        if (!response.ok) {
          throw new Error("Failed to fetch data");
        }

        const data = await response.json();
        if (!data?.categories) {
          throw new Error("No categories found");
        }

        // Dispatch entire data
        dispatch(allStoreData(data));

        // Dispatch categories separately
        dispatch(setCategories(data.categories));

        // Flatten subcategories and dispatch
        const subcategories = data.categories.flatMap(
          (category) => category.subcategories || []
        );
        dispatch(setSubcategories(subcategories));

        // Flatten items inside each subcategory and dispatch
        const items = subcategories.flatMap(
          (subcategory) => subcategory.fashionType?.items || []
        );
        dispatch(setItems(items));

        console.log("Data dispatched:", {
          categories: data.categories,
          subcategories,
          items,
        });
      } catch (error) {
        console.error("Error fetching data:", error);
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [dispatch]);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return null;
}
