"use client"
import React from "react";
import { motion } from "framer-motion";
import Link from "next/link";

const AboutUs = () => {
  return (
    <div className="bg-white py-16 px-6 md:px-20 text-center">
      <div className="max-w-5xl mx-auto">
        <motion.h2
          className="text-5xl font-extrabold text-gray-900 mb-6"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Who We Are
        </motion.h2>
        <p className="text-gray-700 text-lg leading-relaxed mb-6">
          Welcome to{" "}
          <span className="font-bold text-gray-900">
            [Your E-commerce Store]
          </span>
          , your trusted destination for premium{" "}
          <span className="font-semibold">
            [your niche or product category]
          </span>
          . We specialize in offering high-quality products at unbeatable
          prices, ensuring that you get the best value with every purchase.
        </p>
        <div className="grid md:grid-cols-2 gap-8 text-left">
          <motion.div
            className="bg-gray-100 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Our Mission
            </h3>
            <p className="text-gray-700 leading-relaxed">
              We are committed to providing an exceptional shopping experience
              by curating a collection of{" "}
              <span className="font-semibold">[specific products]</span> that
              meet the highest standards of{" "}
              <span className="font-semibold">
                [quality, sustainability, craftsmanship]
              </span>
              .
            </p>
          </motion.div>
          <motion.div
            className="bg-gray-100 p-6 rounded-lg shadow-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.4 }}
          >
            <h3 className="text-xl font-bold text-gray-900 mb-2">
              Why Shop With Us?
            </h3>
            <ul className="text-gray-700 leading-relaxed list-disc pl-6">
              <li>Exclusive deals and offers</li>
              <li>Fast and reliable shipping</li>
              <li>Secure payment methods</li>
              <li>Customer-first support</li>
            </ul>
          </motion.div>
        </div>
        <Link href="/">
          <motion.button
            className="mt-8 px-8 py-3 bg-blue-600 text-white text-lg font-semibold rounded-lg shadow-md hover:bg-blue-700 transition"
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.8 }}
          >
            Start Shopping
          </motion.button>
        </Link>
      </div>
    </div>
  );
};

export default AboutUs;
