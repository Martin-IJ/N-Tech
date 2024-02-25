import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../variants";

const NewsLetter = () => {
  const handleClick = (e) => {
    e.preventDefault();
  };

  return (
    <div name="newsletter" className="bg-white overflow-hidden pb-20">
      <motion.div
        variants={fadeIn("", 0.1)}
        initial="hidden"
        whileInView={"show"}
        viewport={{ once: false, amount: 0.7 }}
        className="newsletterBgr max-w-[85%] w-full m-auto text-center py-32 px-7 rounded-[4rem]"
      >
        <h1 className="text-5xl text-white">
          Be <span className="textGradient">Up to Date</span> With New Events
        </h1>
        <p className="max-w-[700px] mb-20 mt-7 w-full m-auto text-white">
          Join our mailing list to receive news and announcements.
        </p>
        <form
          onSubmit={handleClick}
          className="max-w-[550px] md:flex space-y-5 md:space-y-0 gap-7 justify-center m-auto"
        >
          <input
            type="email"
            placeholder="Email"
            className="border text-white w-full bg-transparent py-3 px-7 rounded-[4rem]"
          />
          <button type="submit" className="go-border text-white py-3 px-12">
            Go
          </button>
        </form>
      </motion.div>
    </div>
  );
};

export default NewsLetter;
