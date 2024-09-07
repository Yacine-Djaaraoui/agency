import React, { useContext, useEffect } from "react";
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
import fr from "../../public/images/fr.jpg";
import ar from "../../public/images/Flag_of_Algeria.svg.png";

// import FavoriteProducts from "./FavoriteProducts";
// import LogoImg from "public/images/logo.png";
import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Context } from "./Context";
// import PanierProducts from "./pPanierProducts";
const Nav = () => {
  const { language } = useContext(Context);
  const { setLanguage } = useContext(Context);

  const handleNavClick = (item) => {
    // const section = document.getElementById(id);
    // if (section) {
    //   section.scrollIntoView({ behavior: "smooth" });
    // }
    setMenu(item.label);
  };

  const Navlinks = [
    { label: "Home", labelAR: "الرئيسية" },
    { label: "Travels", labelAR: "الرحلات" },
    { label: "Tetimonials", labelAR: "ردود زبائننا" },
    { label: "Contact", labelAR: "تواصل معنا" },
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
      className={`     ${
        isScrolled ? "bg-white  shadow-lg " : "bg-transparent"
      } fixed top-0 right-0 w-full z-[100] h-fit {} `}
    >
      {language === "FR" ? (
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
                      <div>
                        <Select
                          value={language}
                          defaultValue={language}
                          onValueChange={setLanguage}
                        >
                          <SelectTrigger
                            className={`w-[84px] bg-transparent outline-none focus:outline-none ${
                              isScrolled ? "" : "text-black"
                            } `}
                          >
                            <SelectValue placeholder="" className="" />
                          </SelectTrigger>

                          <SelectContent className="w-full ">
                            <SelectGroup className="w-full">
                              <SelectItem value="FR" className="">
                                <div className="flex items-center  w-full text-center gap-1">
                                  <img src={fr} alt="" className="h-3" />
                                  <p>FR</p>
                                </div>
                              </SelectItem>
                              <SelectItem value="AR" className="">
                                <div className="flex items-center gap-1">
                                  <img src={ar} alt="" className="h-3" />
                                  <span className="text-sm">AR</span>
                                </div>
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </ul>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex items-center justify-center gap-3 max-lg:hidden ">
            <ul className="max-lg:hidden  flex xl:justify-center gap-8 items-center lg:flex-row flex-col justify-center  max-lg max-lg:pt-5  px-0 ">
              {Navlinks.map((item) => (
                <li
                  key={item.label}
                  className={`group relative inline-block  overflow-hidden rounded  border-r-gray-100    text-sm font-normal   ${
                    isScrolled ? " text-black  " : "text-white"
                  }  focus:outline-none focus:ring `}
                >
                  <button
                    onClick={() => handleNavClick(item)}
                    className={`
             my-4  text-[17px]  w-[100%] hover:text-orange font-semibold  transition-all ease-in`}
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
            <div className="max-lg:hidden">
              <Select
                value={language}
                defaultValue={language}
                onValueChange={setLanguage}
              >
                <SelectTrigger
                  className={`w-[84px] bg-transparent outline-none focus:outline-none ${
                    isScrolled ? "" : "text-white"
                  } `}
                >
                  <SelectValue placeholder="" className="" />
                </SelectTrigger>

                <SelectContent className="w-full ">
                  <SelectGroup className="w-full">
                    <SelectItem value="FR" className="">
                      <div className="flex items-center  w-full text-center gap-1">
                        <img src={fr} alt="" className="h-3" />
                        <p>FR</p>
                      </div>
                    </SelectItem>
                    <SelectItem value="AR" className="">
                      <div className="flex items-center gap-1">
                        <img src={ar} alt="" className="h-3" />
                        <span className="text-sm">AR</span>
                      </div>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      ) : (
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
                            {item.labelAR}
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
                      <div>
                        <Select
                          value={language}
                          defaultValue={language}
                          onValueChange={setLanguage}
                        >
                          <SelectTrigger
                            className={`w-[84px] bg-transparent outline-none focus:outline-none ${
                              isScrolled ? "" : "text-black"
                            } `}
                          >
                            <SelectValue placeholder="" className="" />
                          </SelectTrigger>

                          <SelectContent className="w-full ">
                            <SelectGroup className="w-full">
                              <SelectItem value="FR" className="">
                                <div className="flex items-center  w-full text-center gap-1">
                                  <img src={fr} alt="" className="h-3" />
                                  <p>FR</p>
                                </div>
                              </SelectItem>
                              <SelectItem value="AR" className="">
                                <div className="flex items-center gap-1">
                                  <img src={ar} alt="" className="h-3" />
                                  <span className="text-sm">AR</span>
                                </div>
                              </SelectItem>
                            </SelectGroup>
                          </SelectContent>
                        </Select>
                      </div>
                    </ul>
                  </SheetDescription>
                </SheetHeader>
              </SheetContent>
            </Sheet>
          </div>
          <div className="flex items-center justify-center gap-3 max-lg:hidden ">
            <ul className="max-lg:hidden  flex xl:justify-center gap-8 items-center lg:flex-row flex-col justify-center  max-lg max-lg:pt-5  px-0 ">
              {Navlinks.map((item) => (
                <li
                  key={item.label}
                  className={`group relative inline-block  overflow-hidden rounded  border-r-gray-100    text-sm font-normal   ${
                    isScrolled ? " text-black  " : "text-white"
                  }  focus:outline-none focus:ring `}
                >
                  <button
                    onClick={() => handleNavClick(item)}
                    className={`
             my-4  text-[17px]  w-[100%] hover:text-orange font-semibold  transition-all ease-in`}
                  >
                    {item.labelAR}
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
            <div className="max-lg:hidden">
              <Select
                value={language}
                defaultValue={language}
                onValueChange={setLanguage}
              >
                <SelectTrigger
                  className={`w-[84px] bg-transparent outline-none focus:outline-none ${
                    isScrolled ? "" : "text-white"
                  } `}
                >
                  <SelectValue placeholder="" className="" />
                </SelectTrigger>

                <SelectContent className="w-full ">
                  <SelectGroup className="w-full">
                    <SelectItem value="FR" className="">
                      <div className="flex items-center  w-full text-center gap-1">
                        <img src={fr} alt="" className="h-3" />
                        <p>FR</p>
                      </div>
                    </SelectItem>
                    <SelectItem value="AR" className="">
                      <div className="flex items-center gap-1">
                        <img src={ar} alt="" className="h-3" />
                        <span className="text-sm">AR</span>
                      </div>
                    </SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

export default Nav;
