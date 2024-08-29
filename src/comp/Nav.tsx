import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

import LogoImg from "../../public/images/Travel-agency-logo-design-template-on-transparent-background-PNG-removebg-preview.png";
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "../components/ui/sheet";
// import FavoriteProducts from "./FavoriteProducts";
// import LogoImg from "public/images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
// import PanierProducts from "./pPanierProducts";
const Nav = () => {
  const [menu, setMenu] = useState("الرئيسية");

  const handleNavClick = (item) => {
    // const section = document.getElementById(id);
    // if (section) {
    //   section.scrollIntoView({ behavior: "smooth" });
    // }
    setMenu(item.label);
  };

  const Navlinks = [
    { label: "Home", id: "home" },
    { label: "Offers", id: "brands" },
    { label: "Tetimonials", id: "vehicles" },
    { label: "Contact", id: "about" },
  ];
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if the page is scrolled more than 50px
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={` border-b-white border-b-[0.3px] ${
        isScrolled ? "bg-white  " : "bg-transparent"
      } fixed top-0 right-0 w-full z-[100] h-fit {} `}
    >
      <div className="  flex h-[70px] lg:h-[90px] container justify-between items-center">
        <div className="logoImg ">
          <Link to={"/"}>
            <img
              src={LogoImg}
              className="cursor-pointer object-contain w-[90px] max-lg:w-[80px] h-fit "
              alt="#"
            />
          </Link>
        </div>

        <div className="  flex justify-center  items-center">
          <Sheet>
            <SheetTrigger>
              <FontAwesomeIcon
                icon={faBars}
                className={`lg:hidden self-center h-6 rounded-full w-6 p-[2px] ${
                  isScrolled ? "text-black  " : "text-white"
                } `}
              />
            </SheetTrigger>
            <SheetContent className="">
              <SheetHeader>
                <SheetDescription className="">
                  <ul className="  flex  xl:justify-center items-center lg:flex-row flex-col justify-around max-lg max-lg:pt-5  px-0 ">
                    {Navlinks.map((item) => (
                      <li
                        key={item.label}
                        className={` group relative inline-block overflow-hidden rounded   border-r-gray-100 text-lg text-black  focus:outline-none focus:ring  active:text-black  `}
                      >
                        <button
                          onClick={() => handleNavClick(item)}
                          className={`pb-3  my-4  font-semibold text-[17px]  hover:text-lg w-[100%]  transition-all ease-in`}
                        >
                          {item.label}
                        </button>
                        {/* <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-violet-600 transition-all duration-200 group-hover:w-full"></span> */}
                        {/* <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-violet-600 transition-all duration-200 group-hover:h-full"></span> */}
                        {/* <span
                          className={`ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-black transition-all duration-200 group-hover:w-full ${
                            menu === item.label ? "  w-full" : "none"
                          } `}
                        ></span> */}
                        {/* <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-violet-600 transition-all duration-200 group-hover:h-full"></span> */}
                      </li>
                    ))}
                  </ul>
                </SheetDescription>
              </SheetHeader>
            </SheetContent>
          </Sheet>
        </div>
        <ul className="max-lg:hidden  flex xl:justify-center items-center lg:flex-row flex-col justify-center  max-lg max-lg:pt-5  px-0 ">
          {Navlinks.map((item) => (
            <li
              key={item.label}
              className={`group relative inline-block  overflow-hidden rounded  border-r-gray-100    text-sm font-normal  ${
                isScrolled ? " text-black  " : "text-white"
              }  focus:outline-none focus:ring `}
            >
              <button
                onClick={() => handleNavClick(item)}
                className={`
             my-4  text-[17px] pl-10  w-[100%] hover:text-blue-400  transition-all ease-in`}
              >
                {item.label}
              </button>
              {/* <span className="ease absolute left-0 top-0 h-0 w-0 border-t-2 border-violet-600 transition-all duration-200 group-hover:w-full"></span> */}
              {/* <span className="ease absolute right-0 top-0 h-0 w-0 border-r-2 border-violet-600 transition-all duration-200 group-hover:h-full"></span> */}
              {/* <span
                className={` ease absolute bottom-0 right-0 h-0 w-0 border-b-2 border-white transition-all duration-200 group-hover:w-full ${
                  menu === item.label && item.label !== "Contact me"
                    ? "w-full"
                    : "none"
                }`}
              ></span> */}
              {/* <span className="ease absolute bottom-0 left-0 h-0 w-0 border-l-2 border-violet-600 transition-all duration-200 group-hover:h-full"></span> */}
            </li>
          ))}
        </ul>
      </div>
    </header>
  );
};

export default Nav;
