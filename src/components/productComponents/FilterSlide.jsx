import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "../ui/accordion";

const FilterSlide = () => {
  return (
    <div className="w-full p-6 bg-gray-50 shadow-lg rounded-lg">
      <h2 className="font-bold text-xl mb-4 text-gray-800">Filters</h2>

      <Accordion type="multiple" className="space-y-4">
        {/* Sort Accordion */}
        <AccordionItem value="sort">
          <AccordionTrigger className="text-lg font-semibold ">
            Sort
          </AccordionTrigger>
          <AccordionContent className="bg-white p-3 rounded-md shadow-sm">
            <div className="space-y-3">
              <div className="cursor-pointer hover:bg-indigo-100 p-2 rounded-md text-gray-700">
                Price: High to Low
              </div>
              <div className="cursor-pointer hover:bg-indigo-100 p-2 rounded-md text-gray-700">
                Price: Low to High
              </div>
              <div className="cursor-pointer hover:bg-indigo-100 p-2 rounded-md text-gray-700">
                Newly Arrived
              </div>
              <div className="cursor-pointer hover:bg-indigo-100 p-2 rounded-md text-gray-700">
                Most Sold
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Brand Accordion */}
        <AccordionItem value="brand">
          <AccordionTrigger className="text-lg font-semibold ">
            Brand
          </AccordionTrigger>
          <AccordionContent className="bg-white p-3 rounded-md shadow-sm">
            <div className="space-y-3">
              <div className="cursor-pointer hover:bg-indigo-100 p-2 rounded-md text-gray-700">
                Nike
              </div>
              <div className="cursor-pointer hover:bg-indigo-100 p-2 rounded-md text-gray-700">
                Adidas
              </div>
              <div className="cursor-pointer hover:bg-indigo-100 p-2 rounded-md text-gray-700">
                Puma
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Size Accordion */}
        <AccordionItem value="size">
          <AccordionTrigger className="text-lg font-semibold ">
            Size
          </AccordionTrigger>
          <AccordionContent className="bg-white p-3 rounded-md shadow-sm">
            <div className="space-y-3">
              <div className="cursor-pointer hover:bg-indigo-100 p-2 rounded-md text-gray-700">
                Small
              </div>
              <div className="cursor-pointer hover:bg-indigo-100 p-2 rounded-md text-gray-700">
                Medium
              </div>
              <div className="cursor-pointer hover:bg-indigo-100 p-2 rounded-md text-gray-700">
                Large
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Price Range Accordion */}
        <AccordionItem value="price">
          <AccordionTrigger className="text-lg font-semibold ">
            Price Range
          </AccordionTrigger>
          <AccordionContent className="bg-white p-3 rounded-md shadow-sm">
            <div className="space-y-3">
              <div className="cursor-pointer hover:bg-green-100 p-2 rounded-md text-gray-700">
                1000 - 2000
              </div>
              <div className="cursor-pointer hover:bg-green-100 p-2 rounded-md text-gray-700">
                2000 - 3000
              </div>
              <div className="cursor-pointer hover:bg-green-100 p-2 rounded-md text-gray-700">
                3000 - 4000
              </div>
              <div className="cursor-pointer hover:bg-green-100 p-2 rounded-md text-gray-700">
                4000 - 5000
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Customer Rating Accordion */}
        <AccordionItem value="rating">
          <AccordionTrigger className="text-lg font-semibold ">
            Customer Rating
          </AccordionTrigger>
          <AccordionContent className="bg-white p-3 rounded-md shadow-sm">
            <div className="space-y-3">
              <div className="cursor-pointer hover:bg-indigo-100 p-2 rounded-md text-gray-700">
                4 & above
              </div>
              <div className="cursor-pointer hover:bg-indigo-100 p-2 rounded-md text-gray-700">
                3 & above
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FilterSlide;
