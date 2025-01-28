"use client";
import { motion, useScroll, useTransform } from "framer-motion";
import React, { useRef } from "react";

const TextParallax = ({ img, heading, subHeading }) => {
  return (
    <div className="bg-white ">
      {/* Electronics Section */}
      {/* <CategorySection title="Electronics"> */}
      <TxtPlxContent
        img={img}
        heading={heading}
        subHeading={subHeading}
      >
        <Content description="Discover the latest smartphones, laptops, and accessories at unbeatable prices!" />
      </TxtPlxContent>
      {/* </CategorySection> */}

      {/* Fashion Section */}
      {/* <CategorySection title="Fashion">
        <TxtPlxContent
          img="/men/shoes/shoes2.webp"
          heading="Trending Styles"
          subHeading="Exclusive fashion deals"
        >
          <Content description="Shop the latest trends in fashion, from stylish footwear to trendy outfits!" />
        </TxtPlxContent>
      </CategorySection> */}

      {/* Grocery Section */}
      {/* <CategorySection title="Grocery">
        <TxtPlxContent
          img="/men/shoes/shoes3.webp"
          heading="Fresh Groceries"
          subHeading="Everyday essentials at best prices"
        >
          <Content description="Get fresh groceries delivered to your doorstep with amazing discounts!" />
        </TxtPlxContent>
      </CategorySection> */}
    </div>
  );
};
const ImgPadding = 12;
export default TextParallax;

const CategorySection = ({ title, children }) => {
  return (
    <div className="py-10">
      <h2 className="text-center text-3xl font-bold mb-6">{title}</h2>
      {children}
    </div>
  );
};

const TxtPlxContent = ({ img, heading, subHeading, children }) => {
  return (
    <div
      // style={{
      //   paddingLeft: ImgPadding,
      //   paddingRight: ImgPadding,
      // }}
    >
      <div className="relative h-[150vh]">
        <StickyImg img={img}></StickyImg>
        <Overlay heading={heading} subHeading={subHeading} />
      </div>
      {children}
    </div>
  );
};

const StickyImg = ({ img }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["end end", "end start"],
  });

  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.85]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <motion.div
      style={{
        backgroundImage: `url(${img})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: `calc(100vh - ${ImgPadding * 2}px)`,
        top: ImgPadding,
        scale,
      }}
      ref={targetRef}
      className="sticky z-0 overflow-hidden "
    >
      <motion.div
        className="absolute inset-0 bg-neutral-950/70"
        style={{ opacity }}
      />
    </motion.div>
  );
};

const Content = ({ description }) => {
  return (
    <div className=" px-4 text-center">
      {/* <h3 className="text-2xl font-semibold mb-2">Why Choose Us?</h3>
      <p className="text-gray-600">{description}</p>
      <button className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-lg">
        Shop Now
      </button> */}
    </div>
  );
};

const Overlay = ({ heading, subHeading }) => {
  const targetRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: targetRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [250, -250]);
  const opacity = useTransform(scrollYProgress, [0.25, 0.5, 0.75], [0, 1, 0]);

  return (
    <motion.div
      ref={targetRef}
      style={{
        y,
        opacity,
      }}
      className="absolute left-0 top-0 flex flex-col items-center justify-center h-screen w-full text-white text-center"
    >
      <p className="mb-2 text-xl md:mb-4 md:text-3xl">{subHeading}</p>
      <p className="text-4xl font-bold md:text-7xl">{heading}</p>
    </motion.div>
  );
};
