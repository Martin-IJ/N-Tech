import React, { useState } from "react";
import Logo from "../assets/IMG_8764.PNG";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoCloseSharp } from "react-icons/io5";
import { RiTwitterXFill } from "react-icons/ri";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoInstagram,
} from "react-icons/bi";
import { Link } from "react-scroll";

const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);

  const closeNavbar = () => {
    setNavbarOpen(false);
  };

  const openNavbar = () => {
    setNavbarOpen(true);
  };

  return (
    <div className="navbarPosition z-40 inset-x-0 top-0 h-[100px] nav-container flex justify-center bg-[rgba(230,245,255,0.7)] backdrop-blur-lg">
      {/* Desktop Navbar */}
      <div className="max-w-[85%] w-[100%] flex justify-between items-center text-main-color">
        <Link to="home" smooth={true} duration={500}>
          <img src={Logo} alt="logo" className="w-[150px] cursor-pointer" />
        </Link>

        <div>
          <div
            className="md:hidden cursor-pointer text-2xl"
            onClick={openNavbar}
          >
            <GiHamburgerMenu />
          </div>
          <ul className="hidden md:flex items-center font-semibold md:space-x-5 lg:space-x-12">
            <Link
              to="home"
              smooth={true}
              duration={500}
              className="w-full md:w-auto cursor-pointer"
              onClick={closeNavbar}
            >
              <li className="py-5 w-full text-lg hover:text-[#710CF6]">Home</li>
            </Link>
            <Link
              to="about"
              smooth={true}
              duration={500}
              className="w-full md:w-auto cursor-pointer"
              onClick={closeNavbar}
            >
              <li className="py-5 w-full text-lg hover:text-[#710CF6]">
                About Us
              </li>
            </Link>
            <Link
              to="ourServices"
              smooth={true}
              duration={500}
              className="w-full md:w-auto cursor-pointer"
              onClick={closeNavbar}
            >
              <li className="py-5 w-full text-lg hover:text-[#710CF6]">
                Services
              </li>
            </Link>
            <Link
              to="contact"
              smooth={true}
              duration={500}
              className="w-full md:w-auto cursor-pointer"
              onClick={closeNavbar}
            >
              <li className="py-5 w-full text-lg hover:text-[#710CF6]">
                Contact Us
              </li>
            </Link>
          </ul>
        </div>

        <button className="hidden md:block rounded-md bg-[#4b0ba0] hover:bg-default active:bg-[#4b0ba0] duration-200 ease-in-out text-white font-semibold py-2 px-5">
          <Link to="contact" smooth={true} duration={500}>
            Work with Us
          </Link>
        </button>
      </div>

      {/* Mobile Navbar */}
      {navbarOpen && (
        <div className="absolute z-50 md:hidden w-full flex justify-end">
          <div
            className={`${
              navbarOpen ? "translate-x-0" : "-translate-x-full"
            }  bg-white shadow-2xl w-[350px] h-screen font-semibold transition-all duration-1000 ease-in-out`}
          >
            <div className="w-full h-[100px] flex items-center px-8 justify-between">
              <div
                className="md:hidden text-3xl cursor-pointer"
                onClick={closeNavbar}
              >
                <IoCloseSharp />
              </div>
            </div>

            {/* Nav Links */}
            <ul className="">
              <Link
                to="home"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={closeNavbar}
              >
                <li className="py-5 w-full text-lg hover:text-[#710CF6] hover:bg-slate-200 px-8">
                  Home
                </li>
              </Link>
              <Link
                to="about"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={closeNavbar}
              >
                <li className="py-5 w-full text-lg hover:text-[#710CF6] hover:bg-slate-200 px-8">
                  About Us
                </li>
              </Link>
              <Link
                to="ourServices"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={closeNavbar}
              >
                <li className="py-5 w-full text-lg hover:text-[#710CF6] hover:bg-slate-200 px-8">
                  Services
                </li>
              </Link>
              <Link
                to="contact"
                smooth={true}
                duration={500}
                className="cursor-pointer"
                onClick={closeNavbar}
              >
                <li className="py-5 w-full text-lg hover:text-[#710CF6] hover:bg-slate-200 px-8">
                  Contact Us
                </li>
              </Link>
              <button className="md:hidden mx-8 bg-[#4b0ba0] hover:bg-default active:bg-[#4b0ba0] duration-200 ease-in-out text-white font-semibold py-5 px-20 rounded-md">
                <Link
                  to="contact"
                  smooth={true}
                  duration={500}
                  onClick={closeNavbar}
                >
                  Work with Us
                </Link>
              </button>
            </ul>

            {/* Social Icons */}
            <div className="absolute bottom-0 inset-x-0 flex justify-center items-end pb-5">
              <div className="flex gap-5 text-2xl">
                <BiLogoFacebook className="hover:text-default cursor-pointer" />
                <BiLogoInstagram className="hover:text-default cursor-pointer" />
                <RiTwitterXFill className="hover:text-default cursor-pointer" />
                <BiLogoLinkedin className="hover:text-default cursor-pointer" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;
