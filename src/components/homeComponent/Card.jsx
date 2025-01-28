"use client"
import Image from 'next/image'
import React from 'react'


const Card = () => {
    const data = [
      {
        title: "title1",
        img: "/men/shoes/shoes1.webp",
        price: 1000,
        discrption: "this is a good shoes1",
      },
      {
        title: "title2",
        img: "/men/shoes/shoes2.webp",
        price: 1000,
        discrption: "this is a good shoes1",
      },
      {
        title: "title3",
        img: "/men/shoes/shoes3.webp",
        price: 1000,
        discrption: "this is a good shoes1",
      },
      {
        title: "title4",
        img: "/men/shoes/shoes4.webp",
        price: 1000,
        discrption: "this is a good shoes1",
      },
      {
        title: "title5",
        img: "/men/shoes/shoes5.webp",
        price: 1000,
        discrption: "this is a good shoes1",
      },
    ];
  return (
    <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 ">
      {data.map((item, index) => (
        <div
          key={index}
          className="place-items-center border m-4 shadow-lg p-4 "
        >
          <div className='h-72 flex justify-items-end'>
            <Image src={item.img} width={200} height={200} alt="image" />
          </div>
          <div>
            <div className=" text-center text-lg font-bold">
             {item.title}
            </div>
            {/* <div>
             ₹{item.price}
            </div> */}
            {/* <div>{item.discrption}</div> */}
          </div>
        </div>
      ))}
    </div>
  );
}

export default Card