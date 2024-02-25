import React, { useRef } from "react";
import Book from "../assets/book.png";
import Flower from "../assets/flower.png";
import emailjs from "@emailjs/browser";

const Prototype = () => {
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
    <div
      name="contact"
      className="relative isolate overflow-hidden bg-main-color py-24 flex"
    >
      <img
        src={Book}
        alt=""
        className="absolute -z-10 bottom-10 -left-48 drop-shadow-xl"
      />
      <img
        src={Flower}
        alt=""
        className="absolute -z-10 -bottom-40 -right-60 md:-right-40 mix-blend-soft-light"
      />
      <div className="max-w-[85%] w-full space-y-10 m-auto text-center text-white">
        <h1 className="text-5xl font-semibold">
          Get a Free Prototype <br /> of Your Future Website!
        </h1>
        <p className="max-w-[600px] w-full m-auto">
          Send your requirements for a website, we will research your
          specification, create a prototype of the website for free and send a
          sample to you!
        </p>

        <form
          ref={form}
          onSubmit={handleClick}
          className="space-y-7 max-w-[600px] w-full m-auto text-white"
        >
          <div className="w-full md:flex justify-between space-y-5 md:space-y-0 gap-5">
            <input
              type="text"
              name="user_name"
              required
              className="bg-inherit border rounded-[5.5rem] py-4 px-10 w-full md:w-[50%]"
              placeholder="First name"
            />
            <input
              type="text"
              name="user_email"
              required
              className="bg-inherit border rounded-[5.5rem] py-4 px-10 w-full md:w-[50%]"
              placeholder="Your Email"
            />
          </div>
          <textarea
            className="bg-inherit border rounded-3xl py-4 px-10 w-full text-white"
            placeholder="Message"
            name="subject"
            rows="5"
          ></textarea>
          <button type="submit" className="default-border">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Prototype;
