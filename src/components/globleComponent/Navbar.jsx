"use client";
import {
  ArrowLeft,
  ChevronDown,
  ChevronRightCircleIcon,
  Menu,
  X,
  ShoppingBasket,
  UserCircleIcon,
} from "lucide-react";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import LoginPage from "./Login";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState();
  const [isOpenDropDownElectronics, setIsOpenDropDownElectronics] =
    useState(false);
  const [isOpenFashion, setIsOpenFashion] = useState(false);
  const [openMenuType, setOpenMenuType] = useState(false);

  const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
  const modalRef = useRef(null);

  const closeModal = () => setIsLoginModalOpen(false);
  useEffect(() => {
    if (isLoginModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isLoginModalOpen]);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target) &&
        isLoginModalOpen
      ) {
        closeModal();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isLoginModalOpen]);
  useEffect(() => {
    if (isOpenFashion == true) {
      setIsOpenDropDownElectronics(false);
    }
  }, [isOpenFashion]);
  useEffect(() => {
    if (isOpenDropDownElectronics == true) {
      setIsOpenFashion(false);
    }
  }, [isOpenDropDownElectronics]);

  useEffect(() => {
    const closeDropdowns = () => {
      setIsOpenDropDownElectronics(false);
      setIsOpenFashion(false);
    };

    document.addEventListener("click", closeDropdowns);

    return () => {
      document.removeEventListener("click", closeDropdowns);
    };
  }, []);

  return (
    <>
      <div className="relative flex justify-between px-5 bg-gray-900  text-[#ffffff] h-16 items-center font-bold w-full">
        <div className="text-2xl "> logo</div>
        <div className="flex items-center gap-5">
          {/* full view */}
          <div className="md:flex gap-5 hidden">
            <div className="flex gap-5 items-end  ">
              <Link href="/" className="">
                Home
              </Link>
              <Link
                href="/fashion"
                className="flex items-center"
                onMouseEnter={() => setIsOpenFashion(true)}
                // onMouseLeave={() => setIsOpenFashion(false)}
              >
                <p>Fashion</p>
                <ChevronDown className="ml-1 h-4 w-4 mt-1 " />
              </Link>
              <Link
                href="/electronics"
                className="flex items-center"
                onMouseEnter={() => setIsOpenDropDownElectronics(true)}
                // onMouseLeave={() => setIsOpenDropDownElectronics(false)}
              >
                Electronics <ChevronDown className="ml-1 h-4 w-4 mt-1" />
              </Link>
              <Link href="/grocery" className="flex">
                Grocery
              </Link>
              <Link href="/homedecor" className="flex">
                Home Decor
              </Link>
              <Link href="/sports" className="flex">
                Sports & Fitness
              </Link>
            </div>
          </div>
          <div className="gap-5 flex ">
            <div>
              <ShoppingBasket />
            </div>
            <div onClick={() => setIsLoginModalOpen(true)}>
              <UserCircleIcon />
            </div>
          </div>
          <div
            className="md:hidden"
            onClick={() => {
              setIsOpen(!isOpen);
              setOpenMenuType(null);
            }}
          >
            {isOpen ? <X /> : <Menu />}{" "}
          </div>
        </div>
      </div>

      {isOpenDropDownElectronics && (
        <div
          className="w-full h-40 bg-gray-900 m-0 flex justify-center gap-10 text-white  "
          onMouseEnter={() => setIsOpenDropDownElectronics(true)}
          onMouseLeave={() => setIsOpenDropDownElectronics(false)}
        >
          <div className="px-20 ">
            <div className=" font-bold py-2">Mobile</div>
            <div className="text-sm font-semibold">
              <div className="pt-1">Cloth</div>
              <div className="pt-1">Footwear</div>
              <div className="pt-1">Watches</div>
              <div className="pt-1"></div>
              <div className="pt-1"></div>
            </div>
          </div>
          <div className="border-x-4 px-20 ">
            <div className=" font-bold py-2">Laptop</div>
            <div className="text-sm font-semibold">
              <div className="pt-1">Cloth</div>
              <div className="pt-1">Footwear</div>
              <div className="pt-1">Watches</div>
              <div className="pt-1"></div>
              <div className="pt-1"></div>
            </div>
          </div>
          <div className="px-10">
            <div className=" font-bold py-2">Earphone</div>
            <div className="text-sm font-semibold">
              <div className="pt-1">Cloth</div>
              <div className="pt-1">Footwear</div>
              <div className="pt-1">Watches</div>
              <div className="pt-1"></div>
              <div className="pt-1"></div>
            </div>
          </div>
          <div className="px-20 border-l-4">
            <div className=" font-bold py-2">Speaker</div>
            <div className="text-sm font-semibold">
              <div className="pt-1">Cloth</div>
              <div className="pt-1">Footwear</div>
              <div className="pt-1">Watches</div>
              <div className="pt-1"></div>
              <div className="pt-1"></div>
            </div>
          </div>
        </div>
      )}
      {isOpenFashion && (
        <div
          className="w-full h-40 bg-gray-900 m-0 flex justify-center gap-10 text-white  "
          onMouseEnter={() => setIsOpenFashion(true)}
          onMouseLeave={() => setIsOpenFashion(false)}
        >
          <div className="px-20 ">
            <div className=" font-bold py-2">Men</div>
            <div className="text-sm font-semibold">
              <div className="pt-1">Cloth</div>
              <div className="pt-1">Footwear</div>
              <div className="pt-1">Watches</div>
              <div className="pt-1"></div>
              <div className="pt-1"></div>
            </div>
          </div>
          <div className="border-x-4 px-20 ">
            <div className=" font-bold py-2">Women</div>
            <div className="text-sm font-semibold">
              <div className="pt-1">Cloth</div>
              <div className="pt-1">Footwear</div>
              <div className="pt-1">Watches</div>
              <div className="pt-1"></div>
              <div className="pt-1"></div>
            </div>
          </div>
          <div className="px-20 ">
            <div className=" font-bold py-2">Kids</div>
            <div className="text-sm font-semibold">
              <div className="pt-1">Cloth</div>
              <div className="pt-1">Footwear</div>
              <div className="pt-1">Watches</div>
              <div className="pt-1"></div>
              <div className="pt-1"></div>
            </div>
          </div>
        </div>
      )}
      {/* mobile view */}
      {isOpen && !openMenuType && (
        <div className="absolute md:hidden bg-gray-900  w-1/2 h-screen text-white right-0 font-bold z-50">
          <div className="gap-2 flex flex-col px-5">
            <Link href="/" onClick={() => setIsOpen(false)}>
              Home
            </Link>

            {/* Fashion Menu */}
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setOpenMenuType("Fashion")}
            >
              <p>Fashion</p>
              <ChevronRightCircleIcon className="h-4 w-4 mt-1" />
            </div>

            {/* Electronics Menu */}
            <div
              className="flex items-center justify-between cursor-pointer"
              onClick={() => setOpenMenuType("Electronics")}
            >
              <p>Electronics</p>
              <ChevronRightCircleIcon className="h-4 w-4 mt-1" />
            </div>

            <Link href="/grocery" onClick={() => setIsOpen(false)}>
              Grocery
            </Link>
            <Link href="/homedecor" className="flex">
              Home Decor
            </Link>
            <Link href="/sports" className="flex">
              Sports & Fitness
            </Link>
          </div>
        </div>
      )}

      {/* Full-Screen Menu for Fashion or Electronics */}
      {openMenuType && (
        <div className="absolute md:hidden bg-gray-900  w-1/2 h-screen text-white right-0  z-50 p-2">
          <button
            className="flex items-center  text-sm"
            onClick={() => setOpenMenuType(null)}
          >
            <ArrowLeft className="mr-2" size={18} /> Back
          </button>
          {/* <h2 className="text-2xl font-bold ">{openMenuType} Collection</h2> */}
          <div className="pt-1">
            <p>{openMenuType} Item 1</p>
            <p>{openMenuType} Item 2</p>
            <p>{openMenuType} Item 3</p>
          </div>
        </div>
      )}
      {isLoginModalOpen && (
        <div className="fixed inset-0 z-50 flex w-full h-screen justify-center  rounded-3xl py-[2vw] ">
          <div
            className="w-[80%] md:w-[40vw] overflow-y-auto h-[90%]  rounded-3xl"
            ref={modalRef}
          >
            <LoginPage showImage={false} Xmark={true} closeModal={closeModal} />
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
