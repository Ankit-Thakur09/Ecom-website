import React from "react";
import {
  Accordion,
  AccordionItem,
  AccordionTrigger,
  AccordionContent,
} from "@/components/ui/accordion";

const FilterSlide = () => {
  return (
    <div className="w-full p-4 bg-white shadow-md rounded-lg">
      <h2 className="font-bold text-lg mb-3">Filters</h2>

      <Accordion type="multiple" className="space-y-2">
        {/* Sort Accordion */}
        <AccordionItem value="sort">
          <AccordionTrigger>Sort</AccordionTrigger>
          <AccordionContent>
            <div className="space-y-2">
              <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                Price: High to Low
              </div>
              <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                Price: Low to High
              </div>
              <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                Newly Arrived
              </div>
              <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-md">
                Most Sold
              </div>
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Brand Accordion */}
        <AccordionItem value="brand">
          <AccordionTrigger>Brand</AccordionTrigger>
          <AccordionContent>
            <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              Nike
            </div>
            <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              Adidas
            </div>
            <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              Puma
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Size Accordion */}
        <AccordionItem value="size">
          <AccordionTrigger>Size</AccordionTrigger>
          <AccordionContent>
            <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              Small
            </div>
            <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              Medium
            </div>
            <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              Large
            </div>
          </AccordionContent>
        </AccordionItem>

        {/* Price Accordion */}
        <AccordionItem value="price">
          <AccordionTrigger>Price</AccordionTrigger>
          <AccordionContent>
            <input type="range" min="0" max="5000" className="w-full mt-2" />
          </AccordionContent>
        </AccordionItem>

        {/* Customer Rating Accordion */}
        <AccordionItem value="rating">
          <AccordionTrigger>Customer Rating</AccordionTrigger>
          <AccordionContent>
            <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              4 & above
            </div>
            <div className="cursor-pointer hover:bg-gray-100 p-2 rounded-md">
              3 & above
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
    </div>
  );
};

export default FilterSlide;
