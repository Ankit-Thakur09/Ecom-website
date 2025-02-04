"use client";
import CubeHero from "@/components/globleComponent/CubeHero";
import FilterSlide from "@/components/productComponents/FilterSlide";
import React from "react";
import { useSelector } from "react-redux";


const Product = () => {

  const AllData = useSelector((state) => state.storeData.allData);
  console.log(AllData);

  return (
    <div>
      <div className=" w-full ">
        <CubeHero />
      </div>
      <div className="h-[100vh] relative overflow-y-hidden flex">
        <div className=" w-1/4 h-full overflow-y-auto ">
          <div className="h-auto">
            <FilterSlide />
          </div>
        </div>
        <div className=" w-3/4 overflow-y-auto h-[100vh]">
          <div className="bg-slate-400 h-[400vh] ">
            <div className="h-[100vh] bg-cyan-400"></div>
            <div className="h-[100vh] bg-pink-700"></div>
            <div className="h-[100vh]"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;
