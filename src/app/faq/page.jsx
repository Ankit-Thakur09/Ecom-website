"use client";
import { Minus, Plus } from "lucide-react";
import { useState } from "react";

const faqData = [
  {
    question: "What payment methods do you accept?",
    answer: "We accept Visa, MasterCard, PayPal, and Apple Pay.",
  },
  {
    question: "Do you offer international shipping?",
    answer: "Yes, we ship worldwide. Shipping rates vary based on location.",
  },
  {
    question: "What is your return policy?",
    answer:
      "We offer a 30-day return policy. Items must be in original condition.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      <div className="space-y-2">
        {faqData.map((item, index) => (
          <div key={index} className="border rounded-lg overflow-hidden">
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full text-left p-4 bg-gray-100 font-semibold flex justify-between items-center"
            >
              {item.question}
              <span>{openIndex === index ? <Minus /> : <Plus />}</span>
            </button>
            {openIndex === index && (
              <div className="p-4 bg-white border-t">{item.answer}</div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
