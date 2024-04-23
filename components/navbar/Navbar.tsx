"use client";

import { useState } from "react";
import Link from "next/link";

import { AiOutlineClose } from "react-icons/ai";
import { RiMenu3Line } from "react-icons/ri";

const Navbar = () => {
  const [navbar, setNavbar] = useState(false);
  return (
    <nav className="w-full fixed top-0 left-0 right-0 z-10 lg:px-10">
      <div className="mt-5 mx-auto flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6 w-full max-w-6xl lg:bg-sky-600 lg:shadow-sm shadow-black px-3 rounded-lg">
        <div className="flex items-center justify-between lg:mx-0 px-3 py-3 md:py-5 lg:block h-[9vh] lg:h-auto  rounded-md bg-sky-600 shadow-sm shadow-black lg:bg-transparent lg:shadow-none">
          <Link href="#home">
            <h2 className="text-xl md:text-2xl font-extrabold">BLUE</h2>
          </Link>
          <div className="lg:hidden py-2 cursor-pointer">
            <div onClick={() => setNavbar((prev) => !prev)}>
              {navbar ? (
                <AiOutlineClose size={30} color="black" />
              ) : (
                <RiMenu3Line size={30} color="black" />
              )}
            </div>
          </div>
        </div>

        <div>
          <div
            className={`flex-1 justify-self-center pb-3 lg:block lg:pb-0 bg-sky-600 ${
              navbar ? " lg:p-0 block rounded-md" : "hidden"
            }`}
          >
            <ul className="h-[85vh] lg:h-auto items-center justify-evenly flex flex-col lg:flex-row lg:gap-10">
              <li
                className={`text-center font-semibold hover:text-amber-800 duration-500 cursor-pointer`}
              >
                <Link href="#about" onClick={() => setNavbar(!navbar)}>
                  About
                </Link>
              </li>
              <li
                className={`text-center font-semibold hover:text-amber-800 cursor-pointer duration-500`}
              >
                <Link href="#experience" onClick={() => setNavbar(!navbar)}>
                  Experience
                </Link>
              </li>
              <li
                className={`lg:py-0 text-center font-semibold hover:text-amber-800 duration-500 cursor-pointer`}
              >
                <Link href="#projects" onClick={() => setNavbar(!navbar)}>
                  Projects
                </Link>
              </li>
              <li
                className={`lg:py-0 text-center font-semibold hover:text-amber-800 duration-500 cursor-pointer`}
              >
                <Link href="#contact" onClick={() => setNavbar(!navbar)}>
                  Connect
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
