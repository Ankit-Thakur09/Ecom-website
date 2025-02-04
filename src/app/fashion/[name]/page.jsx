"use client"
import React from "react";
import { useSelector } from "react-redux";

const AllProduct =  ({ params }) => {
 const { name } = React.use(params);
  console.log(name);
  
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

    console.log(fashionCategory.subcategories);
    const subcategories = fashionCategory.subcategories;





  return (
    <div>
      <h1>My Profile: {name}</h1>
    </div>
  );
};

export default AllProduct;
