import React, { useRef } from "react";
import {
  BiLogoFacebook,
  BiLogoLinkedin,
  BiLogoInstagram,
} from "react-icons/bi";
import emailjs from "@emailjs/browser";
import { Link } from "react-scroll";
import { RiTwitterXFill } from "react-icons/ri";

const Footer = () => {
  const form = useRef();

  const handleClick = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cnepgxk",
        "template_x9o5rq2",
        form.current,
        "JXBIdaYYOh5NSEiz-"
      )
      .then(
        (result) => {
          alert("Email sent successfully");
        },
        (error) => {
          alert("Error sending email");
        }
      );
    e.target.reset();
  };
  return (
    <footer className="overflow-hidden bg-main-color">
      <div className="max-w-[85%] py-32 w-full m-auto text-start text-white space-y-20 md:space-y-0 md:flex gap-10">
        <div className="space-y-5 md:flex-1">
          <h1 className="text-2xl font-bold border-b pb-5">About</h1>
          <p className="text-[#7E8499]">
            We have much planned for the future, working with great clients and
            continued software development
          </p>
          <p className="footer-small-circle">+234 704 684 6121</p>
          <p className="footer-small-circle">techxcellgit@gmail.com</p>
          <div className="flex gap-5 text-2xl">
            <BiLogoFacebook className="hover:text-default cursor-pointer" />
            <BiLogoInstagram className="hover:text-default cursor-pointer" />
            <RiTwitterXFill className="hover:text-default cursor-pointer" />
            <BiLogoLinkedin className="hover:text-default cursor-pointer" />
          </div>
        </div>

        <div className="space-y-5 md:flex-1">
          <h1 className="text-2xl font-bold border-b pb-5">Useful Links</h1>
          <ul className="list-disc list-inside text-xl font-semibold space-y-3">
            <li className="hover:text-[#FFC91C] cursor-pointer">
              <Link to="home" smooth={true} duration={500}>
                Home
              </Link>
            </li>
            <li className="hover:text-[#FFC91C] cursor-pointer">
              <Link to="about" smooth={true} duration={500}>
                About
              </Link>
            </li>
            <li className="hover:text-[#FFC91C] cursor-pointer">
              <Link to="services" smooth={true} duration={500}>
                Services
              </Link>
            </li>
            <li className="hover:text-[#FFC91C] cursor-pointer">
              <Link to="contact" smooth={true} duration={500}>
                Contact Us
              </Link>
            </li>
            <li className="hover:text-[#FFC91C] cursor-pointer">
              <Link to="newsletter" smooth={true} duration={500}>
                Newsletter
              </Link>
            </li>
          </ul>
        </div>

        <div className="space-y-5 md:flex-1">
          <h1 className="text-2xl font-bold border-b pb-5">About</h1>
          <p className="text-[#7E8499]">
            Join our mailing list to receive news and announcements
          </p>
          <form ref={form} onSubmit={handleClick} className="space-y-5">
            <input
              type="email"
              placeholder="Your Email"
              name="user_email"
              className="bg-transparent border rounded-[4rem] w-full p-3"
            />
            <button type="submit" className="go-border p-3 w-full">
              Get Subscribed
            </button>
          </form>
        </div>
      </div>
      <div className="text-[#7E8499] bg-[#1B2032] p-5 text-center">
        <p>Copyright &copy; 2023 All Rights Reserved. Developed At N-Tech</p>
      </div>
    </footer>
  );
};

export default Footer;
