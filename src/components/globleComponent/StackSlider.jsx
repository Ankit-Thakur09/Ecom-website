"use client";
// small screen k liye alag slider bnana hai
import React, { useEffect, useRef, useState } from "react";

const StackSlider = () => {
  const [rotationAngles, setRotationAngles] = useState([]);
  const [cardZIndexes, setCardZIndexes] = useState([]);
  const [awayCards, setAwayCards] = useState([]);
  const [activeCardIndex, setActiveCardIndex] = useState(0); // Track active card

  const cardsData = [
    { id: 1, color: "bg-blue-600", text: "Card 1 content" },
    { id: 2, color: "bg-purple-600", text: "Card 2 content" },
    { id: 3, color: "bg-teal-500", text: "Card 3 content" },
    { id: 4, color: "bg-amber-500", text: "Card 4 content" },
    { id: 5, color: "bg-rose-500", text: "Card 5 content" },
  ];

  const stackAreaRef = useRef(null);
  const cardsRef = useRef([]);

  // Initialize the card angles and zIndexes
  useEffect(() => {
    setRotationAngles(cardsData.map((_, index) => -index * 10));
    setCardZIndexes(cardsData.map((_, index) => cardsData.length - index));
  }, []);

  // Handle scroll event
  const handleScroll = () => {
    const stackArea = stackAreaRef.current;
    const cards = cardsRef.current;
    if (!stackArea || !cards) return;

    let distance = window.innerHeight / 2;
    let topVal = stackArea.getBoundingClientRect().top;
    let index = Math.floor(-(topVal / distance + 1));

    const newAwayCards = cards.map((_, cardIndex) => cardIndex <= index);
    setAwayCards(newAwayCards);
    setActiveCardIndex(index); // Update active card index

    // Update rotations and z-indexes for cards
    let angle = 0;
    let newRotationAngles = [];
    let newZIndexes = [];
    cards.forEach((card, cardIndex) => {
      if (newAwayCards[cardIndex]) {
        card.style.transform = `translateY(-120vh) rotate(-48deg)`;
      } else {
        card.style.transform = `rotate(${angle}deg)`;
        angle -= 10;
      }
      newRotationAngles.push(angle);
      newZIndexes.push(cardsData.length - cardIndex);
    });

    setRotationAngles(newRotationAngles);
    setCardZIndexes(newZIndexes);
  };

  // Attach scroll listener
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      ref={stackAreaRef}
      className="w-full flex   bg-gradient-to-b from-gray-900 to-gray-700 text-white h-[300vh] border"
    >
      <div className="w-1/2 sticky top-0 h-screen hidden  p-10 sm:flex  items-center justify-center">
        {/* Update the adjacent column content based on the active card */}
        <div className="text-xl font-bold">
          <p>{cardsData[activeCardIndex + 1]?.text}</p>
        </div>
      </div>
      <div className="sm:w-1/2 w-full sticky top-0 h-screen flex flex-col justify-center items-center">
        {cardsData.map((card, index) => (
          <div
            key={card.id}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`h-[220px] w-[220px] sm:h-[200px] sm:w-[200px]  md:h-[350px] md:w-[350px] rounded-3xl  absolute transition-all duration-500 ease-in-out flex items-center justify-center text-white font-bold text-xl  md:top-[ calc(50% - 175px)] md:left-[ calc(50% - 175px)] ${card.color}`}
            style={{
              
              transform: `rotate(${rotationAngles[index]}deg)`,
              zIndex: cardZIndexes[index],
            }}
          >
            {card.text}
          </div>
        ))}
      </div>
    </div>
  );
};

export default StackSlider;
